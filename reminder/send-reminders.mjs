// ============================================================
// ペット健康手帳 お薬リマインダー送信スクリプト
// GitHub Actions から15分ごとに実行される想定
// （.github/workflows/medicine-reminder.yml）。
//
// v1.9.13〜: 送信時刻はグループごとにアプリで設定できる
// （data/reminderTime、"HH:MM"、未設定なら "21:10"、いずれも JST）。
// 判定はキャッチアップ方式:
//   - JST の現在時刻がその日の通知時刻を過ぎている
//   - かつ今日分の送信済みマーカー（reminderSent/{YYYY-MM-DD}）が無い
//   - かつ今日が投薬日で未チェックの薬がある
// の3条件がそろったグループにだけ送信し、実際に送信できたら
// マーカーを書く。投薬対象が無い日はマーカーを書かないので、
// 同日中に薬が登録されれば後続の実行で送れる。
// なお、同日中に通知時刻が変更された場合の細部（例: 時刻を
// 早めた直後に既に送信済み、等）は v1 では割り切り、マーカーに
// よる二重送信防止を優先する。
//
// 接続情報:
//   - RTDB の URL はアプリの firebaseConfig と同じ（公開情報）
//   - 認証は環境変数 FIREBASE_SERVICE_ACCOUNT_JSON
//     （サービスアカウント JSON の文字列）から Admin SDK を初期化
//
// 投薬日判定はアプリ側（src/App.tsx の isDoseDay）と意味を揃えている:
//   - 開始日〜終了日（開始日 + 日数 - 1）の期間内
//   - 毎日 / 1日おき（開始日からの日数が偶数の日）
//   - 「今日の分」チェック（checks[YYYY-MM-DD]）が済んでいれば送らない
// アプリのデータモデルに朝・夕などの回ごとの区別は無い
// （timing は自由記入、checks は日単位）ため、通知時刻の回では
// その日まだチェックされていない当日分をすべて対象にする。
// ============================================================
import admin from "firebase-admin";

const DATABASE_URL =
  "https://pet-health-book-f8fe5-default-rtdb.firebaseio.com";
const APP_URL = "https://torao44.github.io/pet-health-book/";
const NOTIFICATION_TITLE = "💊 お薬の時間です";
const DEFAULT_REMINDER_TIME = "21:10";

// ---- 日付・時刻ヘルパー（アプリ側と同等。YYYY-MM-DD / HH:MM の文字列で処理） ----
function nowJst() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t).value;
  return {
    date: `${get("year")}-${get("month")}-${get("day")}`,
    time: `${get("hour")}:${get("minute")}`,
  };
}
function dateMs(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
}
function toDateStr(ms) {
  const d = new Date(ms);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function addDays(dateStr, n) {
  return toDateStr(dateMs(dateStr) + n * 86400000);
}
function diffDays(from, to) {
  return Math.round((dateMs(to) - dateMs(from)) / 86400000);
}
function medicineEndDate(med) {
  if (!med.days || med.days <= 0) return null;
  return addDays(med.startDate, med.days - 1);
}
function isDoseDay(med, dateStr) {
  if (dateStr < med.startDate) return false;
  const end = medicineEndDate(med);
  if (end && dateStr > end) return false;
  if (med.pattern === "alternate")
    return diffDays(med.startDate, dateStr) % 2 === 0;
  return true;
}

// 通知時刻の正規化（不正な値は既定値に倒す）
function normalizeReminderTime(v) {
  if (typeof v !== "string") return DEFAULT_REMINDER_TIME;
  const m = /^(\d{2}):(\d{2})$/.exec(v);
  if (!m) return DEFAULT_REMINDER_TIME;
  if (Number(m[1]) > 23 || Number(m[2]) > 59) return DEFAULT_REMINDER_TIME;
  return v;
}

// RTDB は配列をオブジェクトで返すことがあるため、アプリ側と同様に正規化する
function toList(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : Object.values(v);
}

async function main() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    console.error("FIREBASE_SERVICE_ACCOUNT_JSON が設定されていません");
    process.exit(1);
  }
  let serviceAccount;
  try {
    serviceAccount = JSON.parse(raw);
  } catch {
    console.error("FIREBASE_SERVICE_ACCOUNT_JSON が JSON として読めません");
    process.exit(1);
  }
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: DATABASE_URL,
  });

  const db = admin.database();
  const { date: today, time: nowTime } = nowJst();
  const snap = await db.ref("pet-health-book/groups").get();
  const groups = snap.val() || {};

  let groupsSent = 0;
  let tokensSent = 0;

  for (const [groupId, group] of Object.entries(groups)) {
    const data = (group && group.data) || {};

    // グループの通知時刻を過ぎているか（キャッチアップ判定）
    const reminderTime = normalizeReminderTime(data.reminderTime);
    if (nowTime < reminderTime) continue;

    // 今日分を送信済みなら二重送信しない
    const markerRef = db.ref(
      `pet-health-book/groups/${groupId}/reminderSent/${today}`
    );
    const markerSnap = await markerRef.get();
    if (markerSnap.exists()) continue;

    const pets = toList(data.pets);
    const petNames = new Map(pets.map((p) => [p.id, p.name || "ペット"]));
    const medicines = toList(data.medicines);

    // 今日が投薬日で、まだ「今日の分」がチェックされていない薬
    const due = medicines.filter(
      (med) =>
        med &&
        typeof med.startDate === "string" &&
        isDoseDay(med, today) &&
        !(med.checks && med.checks[today])
    );
    // 投薬対象が無い日はマーカーを書かない（同日中の後続実行で送れるように）
    if (due.length === 0) continue;

    const tokenMap = (group && group.fcmTokens) || {};
    const tokens = Object.keys(tokenMap);
    if (tokens.length === 0) continue;

    const items = due.map(
      (med) => `${petNames.get(med.petId) ?? "ペット"}：${med.name}`
    );
    const body = items.join(" / ");

    const res = await admin.messaging().sendEachForMulticast({
      tokens,
      notification: { title: NOTIFICATION_TITLE, body },
      data: { url: APP_URL },
    });
    groupsSent += 1;
    tokensSent += res.successCount;

    // 失効したトークンの掃除
    const removals = [];
    res.responses.forEach((r, i) => {
      const code = (r.error && r.error.code) || "";
      if (
        !r.success &&
        (code === "messaging/registration-token-not-registered" ||
          code === "messaging/invalid-registration-token")
      ) {
        removals.push(
          db.ref(`pet-health-book/groups/${groupId}/fcmTokens/${tokens[i]}`).remove()
        );
      }
    });
    await Promise.all(removals);

    // 実際に送信できたら、今日分の送信済みマーカーを書く
    let marked = false;
    if (res.successCount > 0) {
      await markerRef.set({ sentAt: new Date().toISOString(), items });
      marked = true;
    }

    console.log(
      `group ${groupId}: time=${reminderTime} due=${due.length} sent=${res.successCount}/${tokens.length}` +
        (removals.length ? ` staleRemoved=${removals.length}` : "") +
        (marked ? " marked" : "")
    );
  }

  console.log(
    `done: date=${today} now=${nowTime} groupsSent=${groupsSent} tokensSent=${tokensSent}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("送信処理でエラーが発生しました:", e && e.message ? e.message : e);
    process.exit(1);
  });

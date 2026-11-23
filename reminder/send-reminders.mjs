// ============================================================
// ペット健康手帳 お薬リマインダー送信スクリプト
// GitHub Actions から毎晩 21:10 JST に実行される想定
// （.github/workflows/medicine-reminder.yml）。
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
// （timing は自由記入、checks は日単位）ため、21:10 の夜回では
// その日まだチェックされていない当日分をすべて対象にする。
// ============================================================
import admin from "firebase-admin";

const DATABASE_URL =
  "https://pet-health-book-f8fe5-default-rtdb.firebaseio.com";
const APP_URL = "https://torao44.github.io/pet-health-book/";
const NOTIFICATION_TITLE = "💊 お薬の時間です";

// ---- 日付ヘルパー（アプリ側と同等。YYYY-MM-DD の文字列で処理） ----
function todayJst() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t).value;
  return `${get("year")}-${get("month")}-${get("day")}`;
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
  const today = todayJst();
  const snap = await db.ref("pet-health-book/groups").get();
  const groups = snap.val() || {};

  let groupsSent = 0;
  let tokensSent = 0;

  for (const [groupId, group] of Object.entries(groups)) {
    const data = (group && group.data) || {};
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
    if (due.length === 0) continue;

    const tokenMap = (group && group.fcmTokens) || {};
    const tokens = Object.keys(tokenMap);
    if (tokens.length === 0) continue;

    const body = due
      .map((med) => `${petNames.get(med.petId) ?? "ペット"}：${med.name}`)
      .join(" / ");

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

    console.log(
      `group ${groupId}: due=${due.length} sent=${res.successCount}/${tokens.length}` +
        (removals.length ? ` staleRemoved=${removals.length}` : "")
    );
  }

  console.log(`done: date=${today} groupsSent=${groupsSent} tokensSent=${tokensSent}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("送信処理でエラーが発生しました:", e && e.message ? e.message : e);
    process.exit(1);
  });

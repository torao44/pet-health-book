// ============================================================
// ★ v1.9.12: FCM（Firebase Cloud Messaging）プッシュ通知
// お薬リマインダーの受け口。送信は GitHub Actions の
// reminder/send-reminders.mjs が15分ごとにチェックし、グループの
// 通知時刻（v1.9.13〜アプリで設定可能、既定 21:10 JST）を過ぎたら行う。
// ★ v1.9.14: トークン登録を「端末IDキー＋トークンは値」に変更し、
// 同一端末に複数登録が残って通知が2件届く問題を解消した。
// ============================================================

// ★★★ Web Push 証明書（VAPID）の公開鍵 ★★★
// Firebase コンソール → プロジェクトの設定 → Cloud Messaging →
// 「Web Push 証明書」で生成したキーペアの公開鍵をここに貼ること。
// プレースホルダの間は通知UI自体を表示しない（機能オフ）。
export const FCM_VAPID_KEY: string = "BGJIi9zC3zKjetqDVhkjHV5_L5BoFMnWSkVwh55FqxDA0EWEygHn43c2xn5ZukaMdvFhZX0y04WMsbop68fd8h8";

import { getMessaging, getToken, onMessage, type Messaging } from "firebase/messaging";
import { ref, set, get, remove } from "firebase/database";
import { app, db } from "./firebase";

export function isFcmConfigured(): boolean {
  return FCM_VAPID_KEY !== "__FCM_VAPID_KEY__" && FCM_VAPID_KEY.length > 20;
}

export function isPushSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    "Notification" in window &&
    "serviceWorker" in navigator
  );
}

let messagingInstance: Messaging | null = null;
function messaging(): Messaging {
  if (!messagingInstance) messagingInstance = getMessaging(app);
  return messagingInstance;
}

// GitHub Pages のサブパス（/pet-health-book/）で公開されているため、
// デフォルトのルート探索に頼らず、BASE_URL スコープで SW を明示登録する。
export async function registerFcmServiceWorker(): Promise<ServiceWorkerRegistration> {
  const base = import.meta.env.BASE_URL || "/";
  return navigator.serviceWorker.register(`${base}firebase-messaging-sw.js`, {
    scope: base,
  });
}

// ★ v1.9.14: 端末ID（localStorage に永続化）。トークンの登録はこの ID を
// キーにして1端末1レコードに保つ。以前はトークン自体をキーにしていたため、
// トークン更新やブラウザ/PWA の二重登録で同一端末に複数レコードが残り、
// 同じ通知が2件届くことがあった。
const DEVICE_ID_KEY = "pet-health-device-id";
function getDeviceId(): string {
  try {
    let id = localStorage.getItem(DEVICE_ID_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(DEVICE_ID_KEY, id);
    }
    return id;
  } catch {
    // localStorage が使えない環境では登録のたびに新しい ID になる
    // （重複防止は送信側のトークン重複排除と失効掃除が引き続き担保する）。
    return crypto.randomUUID();
  }
}

// 通知許可 → トークン取得 → RTDB に保存する。成功したら true。
// 許可済みの場合の再呼び出しはトークンの最新化として機能する。
export async function enableFcmNotifications(
  uid: string,
  groupId: string
): Promise<boolean> {
  if (!isFcmConfigured() || !isPushSupported()) return false;
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return false;
    const registration = await registerFcmServiceWorker();
    const token = await getToken(messaging(), {
      vapidKey: FCM_VAPID_KEY,
      serviceWorkerRegistration: registration,
    });
    if (!token) return false;
    const deviceId = getDeviceId();
    const ua = navigator.userAgent;
    const tokensPath = `pet-health-book/groups/${groupId}/fcmTokens`;
    await set(ref(db, `${tokensPath}/${deviceId}`), {
      token,
      uid,
      updatedAt: new Date().toISOString(),
      ua,
    });
    // ★ v1.9.14: 自分の登録を書いたら、同一端末由来の古い登録を掃除する。
    // 対象は (a) キーが現在のトークンと一致する旧形式レコード、
    // (b) uid と UA が自分と一致し、キーが自分の端末IDでないレコード。
    // 他端末のレコードを誤って消してしまった場合でも、その端末は次回
    // アプリ起動時の自動再登録で自己回復するため、安全側に倒して消す。
    // 掃除の失敗は登録自体の成否に影響させない。
    try {
      const snap = await get(ref(db, tokensPath));
      const records = (snap.val() || {}) as Record<
        string,
        { uid?: string; ua?: string } | null
      >;
      const removals: Promise<void>[] = [];
      for (const [key, value] of Object.entries(records)) {
        if (key === deviceId) continue;
        if (key === token || (value && value.uid === uid && value.ua === ua)) {
          removals.push(remove(ref(db, `${tokensPath}/${key}`)));
        }
      }
      await Promise.all(removals);
    } catch (e) {
      console.warn("FCM stale token cleanup failed:", e);
    }
    return true;
  } catch (e) {
    console.error("FCM enable failed:", e);
    return false;
  }
}

// フォアグラウンド（アプリを開いている間）の受信をトースト表示につなぐ。
export function startFcmForegroundListener(
  onNotify: (title: string, body: string) => void
): void {
  if (!isFcmConfigured() || !isPushSupported()) return;
  try {
    onMessage(messaging(), (payload) => {
      const title = payload.notification?.title || "💊 お薬の時間です";
      const body = payload.notification?.body || "";
      onNotify(title, body);
    });
  } catch (e) {
    console.error("FCM foreground listener failed:", e);
  }
}

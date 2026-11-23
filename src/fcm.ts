// ============================================================
// ★ v1.9.12: FCM（Firebase Cloud Messaging）プッシュ通知
// お薬リマインダーの受け口。送信は GitHub Actions の
// reminder/send-reminders.mjs が毎晩 21:10 JST に行う。
// ============================================================

// ★★★ Web Push 証明書（VAPID）の公開鍵 ★★★
// Firebase コンソール → プロジェクトの設定 → Cloud Messaging →
// 「Web Push 証明書」で生成したキーペアの公開鍵をここに貼ること。
// プレースホルダの間は通知UI自体を表示しない（機能オフ）。
export const FCM_VAPID_KEY: string = "__FCM_VAPID_KEY__";

import { getMessaging, getToken, onMessage, type Messaging } from "firebase/messaging";
import { ref, set } from "firebase/database";
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
    await set(ref(db, `pet-health-book/groups/${groupId}/fcmTokens/${token}`), {
      uid,
      updatedAt: new Date().toISOString(),
      ua: navigator.userAgent,
    });
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

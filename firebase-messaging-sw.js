/* ペット健康手帳 プッシュ通知用 Service Worker (Firebase Cloud Messaging)
 * アプリ本体と同じ firebase 11.10.0 の compat ビルドを使う。
 * このファイルは /pet-health-book/ スコープで登録される
 * （src/fcm.ts の registerFcmServiceWorker を参照）。
 */
importScripts("https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js");

// 公開情報（src/firebase.ts と同じ内容）
firebase.initializeApp({
  apiKey: "AIzaSyBBsCbQtT7NuCCI6owVaGH7kNWpNbPJirA",
  authDomain: "pet-health-book-f8fe5.firebaseapp.com",
  databaseURL: "https://pet-health-book-f8fe5-default-rtdb.firebaseio.com",
  projectId: "pet-health-book-f8fe5",
  storageBucket: "pet-health-book-f8fe5.firebasestorage.app",
  messagingSenderId: "760283215334",
  appId: "1:760283215334:web:4aeb51a4c2cf2a288d1227",
  measurementId: "G-4HZE1TV8VM",
});

const messaging = firebase.messaging();

// バックグラウンド（アプリを閉じている／裏にある間）の受信
messaging.onBackgroundMessage((payload) => {
  const title =
    (payload.notification && payload.notification.title) ||
    (payload.data && payload.data.title) ||
    "💊 お薬の時間です";
  const body =
    (payload.notification && payload.notification.body) ||
    (payload.data && payload.data.body) ||
    "";
  const options = {
    body,
    icon: self.registration.scope + "favicon.svg",
    data: {
      url: (payload.data && payload.data.url) || self.registration.scope,
    },
  };
  return self.registration.showNotification(title, options);
});

// 通知タップでアプリを開く／前面に出す
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url =
    (event.notification.data && event.notification.data.url) ||
    self.registration.scope;
  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((list) => {
        for (const c of list) {
          if (c.url.startsWith(self.registration.scope) && "focus" in c) {
            return c.focus();
          }
        }
        return clients.openWindow(url);
      })
  );
});

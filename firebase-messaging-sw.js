importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:"AIzaSyDBIV4zaXogNGNunaK9c8wrRk9S9kVYVY0",
  authDomain:"clb-c1k.firebaseapp.com",
  databaseURL:"https://clb-c1k-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:"clb-c1k",
  storageBucket:"clb-c1k.firebasestorage.app",
  messagingSenderId:"553963981005",
  appId:"1:553963981005:web:5297ab8a0ad029a75c8184"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification?.title || 'CLB C1K',
    {
      body: payload.notification?.body || '',
      icon: 'https://nhatkhanheth.github.io/CLB-C1K-online-ver-5.2.0-/icon-192.png',
      badge: 'https://nhatkhanheth.github.io/CLB-C1K-online-ver-5.2.0-/icon-192.png',
      vibrate: [200, 100, 200],
      data: { url: 'https://nhatkhanheth.github.io/CLB-C1K-online-ver-5.2.0-/' }
    }
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(
    e.notification.data?.url || 'https://nhatkhanheth.github.io/CLB-C1K-online-ver-5.2.0-/'
  ));
});

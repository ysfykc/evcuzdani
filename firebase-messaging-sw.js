importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyADpIRNLQEIer_gplTgwKi_EKkfcyrYoqY",
  authDomain: "maasgunu-bd353.firebaseapp.com",
  projectId: "maasgunu-bd353"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Arka planda bildirim yakalandı: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/ev-logo.png' // Bildirimde görünecek logo
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

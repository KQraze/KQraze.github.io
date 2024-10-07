importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBg4vVrlcQiiYaBoN4RxVZNC-NNib1yKMQ",
    authDomain: "myapp-9c0d3.firebaseapp.com",
    projectId: "myapp-9c0d3",
    storageBucket: "myapp-9c0d3.appspot.com",
    messagingSenderId: "721166739682",
    appId: "1:721166739682:web:5838f60a79104768fc16bb"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png',  // Укажите путь к иконке уведомления
    };

    self.registration.showNotification(notificationTitle, notificationOptions).then((value) => console.log(value));
})
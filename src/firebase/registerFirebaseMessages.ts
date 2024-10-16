import {getMessaging, getToken, onMessage} from "firebase/messaging";
import {toast} from "vue3-toastify";
import { firebaseApp } from "@/firebase/index.js";

const messaging = getMessaging(firebaseApp)

// @ts-ignore Запрос на получение токена и обработка уведомлений на переднем плане
getToken(messaging, { vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY }).then((currentToken) => {
    if (currentToken) {
        console.log('FCM Token:', currentToken);
    } else {
        console.log('No registration token available.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token.', err);
});

// Обработка уведомлений в активном приложении
onMessage(messaging, (payload) => {
    console.log(payload);
    // toast(`${payload.notification?.body}`, {
    //     theme: "light",
    //     type: "info",
    //     position: "top-center",
    //     autoClose: 3000,
    //     transition: "slide",
    //     dangerouslyHTMLString: true
    // });
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((err) => {
            console.log('Service Worker registration failed:', err);
        });
}

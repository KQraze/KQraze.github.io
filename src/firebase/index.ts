import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBg4vVrlcQiiYaBoN4RxVZNC-NNib1yKMQ",
    authDomain: "myapp-9c0d3.firebaseapp.com",
    projectId: "myapp-9c0d3",
    storageBucket: "myapp-9c0d3.appspot.com",
    messagingSenderId: "721166739682",
    appId: "1:721166739682:web:5838f60a79104768fc16bb",
    databaseURL: "https://myapp-9c0d3-default-rtdb.firebaseio.com/",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const database = getDatabase(firebaseApp);

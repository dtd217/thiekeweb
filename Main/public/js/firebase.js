// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxZSxFIjpswxV9p7hLaiGhXz82WxWKdvY",
    authDomain: "web04-29b03.firebaseapp.com",
    projectId: "web04-29b03",
    storageBucket: "web04-29b03.appspot.com",
    messagingSenderId: "1004096437860",
    appId: "1:1004096437860:web:136743a2cdd1be342fa971",
    measurementId: "G-DQFZCX0NR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgZkR23vBltIF7-7cbWyKcNtqX3zWVlko",
  authDomain: "web04-5af4e.firebaseapp.com",
  projectId: "web04-5af4e",
  storageBucket: "web04-5af4e.appspot.com",
  messagingSenderId: "171482619428",
  appId: "1:171482619428:web:b5cb27822b07f5cb9302b1",
  measurementId: "G-YQ5NR3ZMG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
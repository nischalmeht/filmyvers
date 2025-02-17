// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIE7ZqVyrONw_baJQeFrOHuQDuhMt3WXk",
  authDomain: "filmyverse-2ff8f.firebaseapp.com",
  projectId: "filmyverse-2ff8f",
  storageBucket: "filmyverse-2ff8f.firebasestorage.app",
  messagingSenderId: "287935840449",
  appId: "1:287935840449:web:f6f7976571498601b41440",
  measurementId: "G-P4BQR2PQZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
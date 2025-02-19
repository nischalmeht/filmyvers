// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
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

// Firestore Initialization
export const db = getFirestore(app);
export const movieref = collection(db, "movies");

// Firebase Auth (If Needed)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider, RecaptchaVerifier } from "firebase/auth";

// // Firebase configuration
// const firebaseConfig = {
//   // apiKey: "AIzaSyAIE7ZqVyrONw_baJQeFrOHuQDuhMt3WXk",
//   // authDomain: "filmyverse-2ff8f.firebaseapp.com",
//   // projectId: "filmyverse-2ff8f",
//   // storageBucket: "filmyverse-2ff8f.firebasestorage.app",
//   // messagingSenderId: "287935840449",
//   // appId: "1:287935840449:web:f6f7976571498601b41440",
//   // measurementId: "G-P4BQR2PQZH"
//   apiKey: "AIzaSyCt69q6fp2gooZMqTy2b5fNUw0e_zUT6ZU",
//   authDomain: "filmyverse-954a8.firebaseapp.com",
//   projectId: "filmyverse-954a8",
//   storageBucket: "filmyverse-954a8.firebasestorage.app",
//   messagingSenderId: "292299938485",
//   appId: "1:292299938485:web:c5397135918aa70cd33cfc",
//   measurementId: "G-8ZZV6HQ31R"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Firestore Initialization
// export const db = getFirestore(app);
// export const movieref = collection(db, "movies");
// export const reviewsRef = collection(db, "reviews");
// // export const userRef=collection(db,"")
// // Firebase Auth Initialization
// export const auth = getAuth(app);
// auth.settings.appVerificationDisabledForTesting = true;
// export const provider = new GoogleAuthProvider();

// // ReCAPTCHA Verifier Export (Optional, if used in Signup component)
// export const recaptchaVerifier = RecaptchaVerifier;

// // Export default app
// export default app;

import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt69q6fp2gooZMqTy2b5fNUw0e_zUT6ZU",
  authDomain: "filmyverse-954a8.firebaseapp.com",
  projectId: "filmyverse-954a8",
  storageBucket: "filmyverse-954a8.firebasestorage.app",
  messagingSenderId: "292299938485",
  appId: "1:292299938485:web:c5397135918aa70cd33cfc",
  measurementId: "G-8ZZV6HQ31R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const movieref = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");

export const userRef = collection(db, "users");

// Don't set `appVerificationDisabledForTesting` in production
if (process.env.NODE_ENV === "development") {
  auth.settings.appVerificationDisabledForTesting = true;
}

export default app;

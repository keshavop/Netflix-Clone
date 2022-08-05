// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzl6UeXFYCvd3rd5xF6hYg8-sge6CEb4Y",
  authDomain: "netflix-clone-4c5a5.firebaseapp.com",
  projectId: "netflix-clone-4c5a5",
  storageBucket: "netflix-clone-4c5a5.appspot.com",
  messagingSenderId: "721545209669",
  appId: "1:721545209669:web:d6733b17be6f730617802c",
  measurementId: "G-9X123XE796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

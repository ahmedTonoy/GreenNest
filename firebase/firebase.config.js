// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD43TKr31X5TqrtIXQeLVaOueIqzPt76W0",
  authDomain: "greennestweb.firebaseapp.com",
  projectId: "greennestweb",
  storageBucket: "greennestweb.firebasestorage.app",
  messagingSenderId: "1056819221143",
  appId: "1:1056819221143:web:773a0c123aadd8e88e4fd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

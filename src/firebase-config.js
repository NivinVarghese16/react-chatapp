// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp7tabDtIAQff2RE8hO8SYsg60pTPk0go",
  authDomain: "chatapp-ba6c5.firebaseapp.com",
  projectId: "chatapp-ba6c5",
  storageBucket: "chatapp-ba6c5.appspot.com",
  messagingSenderId: "668048261429",
  appId: "1:668048261429:web:790bc59c57d22098838c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
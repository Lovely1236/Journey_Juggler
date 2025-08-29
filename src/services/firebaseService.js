// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_APPID,
  VITE_MESSAGESENDERID,
} from "@/utils/constent";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: "journey-juggler.firebaseapp.com",
  projectId: "journey-juggler",
  storageBucket: "journey-juggler.appspot.com",
  messagingSenderId: VITE_MESSAGESENDERID,
  appId: VITE_FIREBASE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

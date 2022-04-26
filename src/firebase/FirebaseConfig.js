import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbKW8r7axGjut3sfkiNc70vmzD26sHj2A",
  authDomain: "athistic-golden-services.firebaseapp.com",
  projectId: "athistic-golden-services",
  storageBucket: "athistic-golden-services.appspot.com",
  messagingSenderId: "926830934029",
  appId: "1:926830934029:web:2ac4adc5d918218ef23d44"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);
export const FIREBASE_REALTIME_DB = getDatabase(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);

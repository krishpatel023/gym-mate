import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB13QSjQX5WFNpXCHUkXIJtclhxL9R77AI",
  authDomain: "gym-mate-b4632.firebaseapp.com",
  projectId: "gym-mate-b4632",
  storageBucket: "gym-mate-b4632.appspot.com",
  messagingSenderId: "473413081724",
  appId: "1:473413081724:web:2596d5cbf0b1d2ff6dc7f9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

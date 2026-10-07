import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBsCbQtT7NuCCI6owVaGH7kNWpNbPJirA",
  authDomain: "pet-health-book-f8fe5.firebaseapp.com",
  databaseURL: "https://pet-health-book-f8fe5-default-rtdb.firebaseio.com",
  projectId: "pet-health-book-f8fe5",
  storageBucket: "pet-health-book-f8fe5.firebasestorage.app",
  messagingSenderId: "760283215334",
  appId: "1:760283215334:web:4aeb51a4c2cf2a288d1227",
  measurementId: "G-4HZE1TV8VM"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

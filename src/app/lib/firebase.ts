import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_gmrooIQWj43tKdhU9QJBuz35KHj1jyY",
  authDomain: "luxury-wedding-79435.firebaseapp.com",
  projectId: "luxury-wedding-79435",
  storageBucket: "luxury-wedding-79435.firebasestorage.app",
  messagingSenderId: "288774072593",
  appId: "1:288774072593:web:360c60fa4f08a18c7d44b0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
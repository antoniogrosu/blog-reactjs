// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVlgIIdD0BPmrLKTICHAd6twfHsjw8kqM",
  authDomain: "blog-cms-project.firebaseapp.com",
  projectId: "blog-cms-project",
  storageBucket: "blog-cms-project.appspot.com",
  messagingSenderId: "237382012099",
  appId: "1:237382012099:web:b7c5da18d88baa25f1e676",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;

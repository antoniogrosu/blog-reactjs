import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVlgIIdD0BPmrLKTICHAd6twfHsjw8kqM",
  authDomain: "blog-cms-project.firebaseapp.com",
  projectId: "blog-cms-project",
  storageBucket: "blog-cms-project.appspot.com",
  messagingSenderId: "237382012099",
  appId: "1:237382012099:web:b7c5da18d88baa25f1e676",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3w57KDuXmKz597JDJpEAQchxaGasTH94",
  authDomain: "authentication-8e058.firebaseapp.com",
  projectId: "authentication-8e058",
  storageBucket: "authentication-8e058.firebasestorage.app",
  messagingSenderId: "274790692191",
  appId: "1:274790692191:web:664748c2abd0ad72bcf2ea",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

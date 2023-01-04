import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlria3Hgc0ac5mwZ5M59YBk5AE9d98G30",
  authDomain: "fire-auth-9d891.firebaseapp.com",
  projectId: "fire-auth-9d891",
  storageBucket: "fire-auth-9d891.appspot.com",
  messagingSenderId: "21174898242",
  appId: "1:21174898242:web:7e6a7d8c9d05a3a2b5a7db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;



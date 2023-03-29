import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAck_ZcRIwwys9wB2pKnoZPeGn6vnI1N8U",
  authDomain: "chat-a1e59.firebaseapp.com",
  projectId: "chat-a1e59",
  storageBucket: "chat-a1e59.appspot.com",
  messagingSenderId: "480413868124",
  appId: "1:480413868124:web:bbadf48d91c3d841ce0699"
};
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
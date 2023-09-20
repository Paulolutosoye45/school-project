// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}    from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBrOgP3607RwY0rHJnJLGQEubijRn0i2tU",
  authDomain: "school-project-3673e.firebaseapp.com",
  projectId: "school-project-3673e",
  storageBucket: "school-project-3673e.appspot.com",
  messagingSenderId: "503149553874",
  appId: "1:503149553874:web:d32af8b32cae6fa858e50b"
};


const app = initializeApp(firebaseConfig);
export const Auth = getAuth()
export const storage = getStorage(app);
export const db = getFirestore(app)
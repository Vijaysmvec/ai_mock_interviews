import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDQkefBfNwoI6uEOSBfS5nBdXFBDitT8zU",
    authDomain: "wiseedge-3cfa0.firebaseapp.com",
    projectId: "wiseedge-3cfa0",
    storageBucket: "wiseedge-3cfa0.firebasestorage.app",
    messagingSenderId: "709262749636",
    appId: "1:709262749636:web:016f2801cf3a0bf44cbe91",
    measurementId: "G-RZ5PMPJZGV"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
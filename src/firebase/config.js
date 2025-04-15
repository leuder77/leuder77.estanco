import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqGwL7W0doiuk-HjS0Jwehx_G3Cs8zAg4",
    authDomain: "estancolg-7358f.firebaseapp.com",
    projectId: "estancolg-7358f",
    storageBucket: "estancolg-7358f.firebasestorage.app",
    messagingSenderId: "835843249207",
    appId: "1:835843249207:web:9bce40fc228bb1f29e9bb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
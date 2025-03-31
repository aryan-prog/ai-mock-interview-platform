// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRf3eVlIzPPViaoPuoNNYd80tIgVI5umo",
  authDomain: "prepwise-34709.firebaseapp.com",
  projectId: "prepwise-34709",
  storageBucket: "prepwise-34709.firebasestorage.app",
  messagingSenderId: "509371875546",
  appId: "1:509371875546:web:28d3f6c84316f2ef23a5e3",
  measurementId: "G-1DQDVX7GF6"
};

// Initialize Firebase

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
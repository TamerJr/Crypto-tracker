// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth"
import {getFirestore} from"firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQRatsyHr82k_ns3ZcF0EHkg6zH3iDuSw",
  authDomain: "crypto-bcb07.firebaseapp.com",
  projectId: "crypto-bcb07",
  storageBucket: "crypto-bcb07.appspot.com",
  messagingSenderId: "390812322277",
  appId: "1:390812322277:web:10bba7100d8b2734d7070c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
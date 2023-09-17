// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp6W1Yj61eRYsy6WRO9cEv2qUY_LCETbU",
  authDomain: "question-a579f.firebaseapp.com",
  projectId: "question-a579f",
  storageBucket: "question-a579f.appspot.com",
  messagingSenderId: "515907500637",
  appId: "1:515907500637:web:4a7e1ac841ebd0f7aeabb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
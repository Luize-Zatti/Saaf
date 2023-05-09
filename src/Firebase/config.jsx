// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAULBEUhxAz4eQomF5kDdLvVJBW4-dqfzs",
  authDomain: "saaf-deae8.firebaseapp.com",
  projectId: "saaf-deae8",
  storageBucket: "saaf-deae8.appspot.com",
  messagingSenderId: "166979785341",
  appId: "1:166979785341:web:7ab64a681ea3583eae9714",
  measurementId: "G-8R36XDWG43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
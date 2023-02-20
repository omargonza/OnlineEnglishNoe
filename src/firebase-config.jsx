// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import    {getAuth}   from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhlrim6Ej9QsPHxTLuBi8lu4fzTd8SQI4",
  authDomain: "noewebsite-51199.firebaseapp.com",
  projectId: "noewebsite-51199",
  storageBucket: "noewebsite-51199.appspot.com",
  messagingSenderId: "337224509788",
  appId: "1:337224509788:web:aed537622ee260b7273999"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
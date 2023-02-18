import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDYX7ThKOwNLwSkdxsVmZ9F7lmFB0BmNI0",
    authDomain: "webnoe-11c99.firebaseapp.com",
    projectId: "webnoe-11c99",
    storageBucket: "webnoe-11c99.appspot.com",
    messagingSenderId: "934190738784",
    appId: "1:934190738784:web:103f839e9d465f22618205",
    measurementId: "G-TMG82ZLLJ4"
  };


  // Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
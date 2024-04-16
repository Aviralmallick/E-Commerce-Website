// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_4hfFZYptp07pPFoovxsbjMw0fOCQmlg",
  authDomain: "everything-9a05d.firebaseapp.com",
  projectId: "everything-9a05d",
  storageBucket: "everything-9a05d.appspot.com",
  messagingSenderId: "671644965924",
  appId: "1:671644965924:web:28cc4ce10f7b32cb7e0cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,auth,firestore,storage}
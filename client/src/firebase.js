// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "mern-estate-86f1a.firebaseapp.com",
  projectId: "mern-estate-86f1a",
  storageBucket: "mern-estate-86f1a.appspot.com",
  messagingSenderId: "414700299572",
  appId: "1:414700299572:web:981673ea6a54d3fb12f161"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
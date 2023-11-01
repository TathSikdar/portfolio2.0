// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtHGf7CgakkAmKUTYSEGqMg6Hf1xeGi6k",
  authDomain: "tath-sikdar.firebaseapp.com",
  projectId: "tath-sikdar",
  storageBucket: "tath-sikdar.appspot.com",
  messagingSenderId: "190094228187",
  appId: "1:190094228187:web:9eb610736420ef6fb4eafe",
  measurementId: "G-5YLEP7Z564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
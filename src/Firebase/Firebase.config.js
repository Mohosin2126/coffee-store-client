// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1B4Sso1J7TNy4MHDpUnhMOTFeemTHd2c",
  authDomain: "coffee-store-1b19a.firebaseapp.com",
  projectId: "coffee-store-1b19a",
  storageBucket: "coffee-store-1b19a.appspot.com",
  messagingSenderId: "644434618091",
  appId: "1:644434618091:web:51000e2de546e849bc00ae"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 
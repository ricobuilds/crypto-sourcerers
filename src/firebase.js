// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdVD3ptwOLi9Fcxu-pOOoVgFhr0PBt1J4",
  authDomain: "cryptosourcerers-691c8.firebaseapp.com",
  projectId: "cryptosourcerers-691c8",
  storageBucket: "cryptosourcerers-691c8.appspot.com",
  messagingSenderId: "1005196340960",
  appId: "1:1005196340960:web:4340cf70b5acb45bfaaa85",
  measurementId: "G-VLBHTS76WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa0HjcMKefUvwo2GoQIqxS0LKWEgizSkQ",
  authDomain: "azhizen-enroll-form.firebaseapp.com",
  projectId: "azhizen-enroll-form",
  storageBucket: "azhizen-enroll-form.firebasestorage.app",
  messagingSenderId: "1096753653556",
  appId: "1:1096753653556:web:65fe817a0c0457956be761",
  measurementId: "G-EYQRHJ9FJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtmEOt2aFv4-SAqIdZFBPFCNER7dMDfG8",
  authDomain: "gameover-ecomerce.firebaseapp.com",
  projectId: "gameover-ecomerce",
  storageBucket: "gameover-ecomerce.appspot.com",
  messagingSenderId: "515611406917",
  appId: "1:515611406917:web:515364c844efeb4ec4292c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage= getStorage();
export const db= getFirestore();  



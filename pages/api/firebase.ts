// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBftbIR-5F57cfdOBwRAG_k4i3tYHCBxE",
  authDomain: "leadistro-12rh78.firebaseapp.com",
  projectId: "leadistro-12rh78",
  storageBucket: "leadistro-12rh78.appspot.com",
  messagingSenderId: "976545594978",
  appId: "1:976545594978:web:d9b11f6e1a811f9fb0db3b",
  measurementId: "G-FWCSYQ8EFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDqd0mk1CUo1B-5i5TUshJU5C7xmKqHsc",
  authDomain: "miaustoredb.firebaseapp.com",
  projectId: "miaustoredb",
  storageBucket: "miaustoredb.appspot.com",
  messagingSenderId: "830638152132",
  appId: "1:830638152132:web:b2cd8d3fbfda7bae37ac91"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(

  <App />

)

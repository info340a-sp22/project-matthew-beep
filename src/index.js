import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKchJQTntTBEvPAYhsYytOusavIAO4icA",
  authDomain: "uwhuskyeats.firebaseapp.com",
  projectId: "uwhuskyeats",
  storageBucket: "uwhuskyeats.appspot.com",
  messagingSenderId: "593724812359",
  appId: "1:593724812359:web:a9e9226ca96d626676d562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

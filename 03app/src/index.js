import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBi644FRoZuevUbt6_diIyPNOwT3jrYUho",
  authDomain: "gfge-9b8d1.firebaseapp.com",
  projectId: "gfge-9b8d1",
  storageBucket: "gfge-9b8d1.appspot.com",
  messagingSenderId: "482140995547",
  appId: "1:482140995547:web:49e08dc8ae805475c071fe",
  measurementId: "G-WWBYJ214WC"
};
export const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

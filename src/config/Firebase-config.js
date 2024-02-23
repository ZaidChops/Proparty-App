import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHp31g2Z1vWb7b2FOo1KxijojhSL9UoR8",
  authDomain: "zaid-333c6.firebaseapp.com",
  projectId: "zaid-333c6",
  storageBucket: "zaid-333c6.appspot.com",
  messagingSenderId: "636635134058",
  appId: "1:636635134058:web:2a0aa4a67ae3370fa17213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
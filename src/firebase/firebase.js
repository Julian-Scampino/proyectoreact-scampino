// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjUkAfZYk9WS-ZlwhdfYaKwGfKrlrpPL8",
  authDomain: "proyectoreact-scampino.firebaseapp.com",
  projectId: "proyectoreact-scampino",
  storageBucket: "proyectoreact-scampino.appspot.com",
  messagingSenderId: "460739126931",
  appId: "1:460739126931:web:a86645de3974aec1d04f66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
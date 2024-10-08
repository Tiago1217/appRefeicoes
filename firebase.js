import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUtuEX7hGbIQvYCy9GgFtYVOC5L_uq0XQ",

    authDomain: "apprefeicaotiago.firebaseapp.com",

    projectId: "apprefeicaotiago",

    storageBucket: "apprefeicaotiago.appspot.com",

    messagingSenderId: "592528515284",

    appId: "1:592528515284:web:3a432eea20278fedef9b41",

    measurementId: "G-XNZ0BD40Z1"

};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
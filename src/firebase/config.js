// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKOtDQBFHh3r7kVdpM0qA3ezM-M8wcS2I",
    authDomain: "chaque-heure-pour-la-minorie.firebaseapp.com",
    projectId: "chaque-heure-pour-la-minorie",
    storageBucket: "chaque-heure-pour-la-minorie.appspot.com",
    messagingSenderId: "1034706521615",
    appId: "1:1034706521615:web:fc3495baf507bcf5321d7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


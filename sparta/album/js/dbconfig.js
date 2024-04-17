import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAmg7aj-z-MUKrA8ULurln1PSm57vnibfc",
    authDomain: "sparta-c6977.firebaseapp.com",
    projectId: "sparta-c6977",
    storageBucket: "sparta-c6977.appspot.com",
    messagingSenderId: "129201906122",
    appId: "1:129201906122:web:c077631e48c68af2af2f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
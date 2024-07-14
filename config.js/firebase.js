import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {  
    apiKey: "AIzaSyD3m1GXOZjDcgEiIWKn0sURtJ-huk_TFw0",
    authDomain: "myntraa-87de7.firebaseapp.com",
    projectId: "myntraa-87de7",
    storageBucket: "myntraa-87de7.appspot.com",
    messagingSenderId: "81099764693",
    appId: "1:81099764693:web:8afa22f2305f4dbc68c35c",
    measurementId: "G-32MG7Q8D2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();
export const database= getFirestore();
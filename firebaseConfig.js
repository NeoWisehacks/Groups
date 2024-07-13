import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyBkhlx8gf1pG-UUiXue8nntIbAlSf4HR7k",
    authDomain: "myntra-hackerramp-945c1.firebaseapp.com",
    projectId: "myntra-hackerramp-945c1",
    storageBucket: "myntra-hackerramp-945c1.appspot.com",
    messagingSenderId: "319970559799",
    appId: "1:319970559799:web:558f23ed8e20cbc41cbcb2"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // agaar ye kaam ni kiya to direct yha key put karke dekho.
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "ngo-muskan.firebaseapp.com",
  projectId: "ngo-muskan",
  storageBucket: "ngo-muskan.appspot.com",
  messagingSenderId: "787540289047",
  appId: "1:787540289047:web:5fdfb8ee9674be08595e52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEDCTntt0dz8RsYcl267xb5Of5IAv3wbI",
  authDomain: "comfy-store-4fddc.firebaseapp.com",
  projectId: "comfy-store-4fddc",
  storageBucket: "comfy-store-4fddc.appspot.com",
  messagingSenderId: "355165768513",
  appId: "1:355165768513:web:e828d6bee922a69aa26fc0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

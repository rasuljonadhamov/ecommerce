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


//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,

// from "firebase/auth";

// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";



// const firebaseApp = initializeApp(firebaseConfig);

// const googleProvider = new GoogleAuthProvider();

// googleProvider.setCustomParameters({
//   prompt: "select_account",
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = () =>
//   signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// export const db = getFirestore();
// export const creteUserDocumentFromAuth = async (
//   userAuth,
//   additionalInfomation = {}
// ) => {
//   const userDocRef = doc(db, "users", userAuth.uid);

//   const userSnapshot = await getDoc(userDocRef);

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInfomation,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return userDocRef;
// };

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };

// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// };

// export const signOutUser = async () => await signOut(auth);

// export const onAuthStateChangedListener = (callback) =>
//   onAuthStateChanged(auth, callback);

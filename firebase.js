// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyA24bREtA-6IZGdLQbWXSkD8vEoY0RzbWA",
  authDomain: "katthokra.firebaseapp.com",
  databaseURL:
    "https://katthokra-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "katthokra",
  storageBucket: "katthokra.appspot.com",
  messagingSenderId: "467644863964",
  appId: "1:467644863964:web:78ad6bb0234fea4df8eb19",
  measurementId: "G-P5JBBLK50G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (userData) => {
  const userDetails = await createUserWithEmailAndPassword(
    auth,
    userData.email,
    userData.password
  );
  // console.log(userDetails);
  return userDetails;
};
export const loginWithEmail = async (userData) => {
  const userDetails = await signInWithEmailAndPassword(
    auth,
    userData.email,
    userData.password
  );
  return userDetails;
};
export const logout = () => {
  signOut(auth);
};
export const loginWithSocial = async (socialDetails) => {
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  switch (socialDetails) {
    case "google": // Corrected to string 'gmail'
      try {
        const userDetails = await signInWithPopup(auth, googleAuthProvider); // Pass userData and googleAuthProvider to signInWithPopup
        return userDetails;
      } catch (error) {
        console.log("there was an error", error);
      }

      break;
    case "github": // Added case for GitHub authentication
      try {
        const userDetails = signInWithPopup(auth, githubAuthProvider); // Pass userData and googleAuthProvider to signInWithPopup
        return userDetails;
      } catch (error) {
        console.log("there was an error", error);
      }
      break;
    default:
      break;
  }
};

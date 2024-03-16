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
  apiKey: "AIzaSyA4EGC6IBIPSgu7VNJRV2fEqf-HtOcvodI",
  authDomain: "utillsjs2024.firebaseapp.com",
  databaseURL: "https://utillsjs2024-default-rtdb.firebaseio.com",
  projectId: "utillsjs2024",
  storageBucket: "utillsjs2024.appspot.com",
  messagingSenderId: "191989815985",
  appId: "1:191989815985:web:15fceda0963ddd2abfa090",
  measurementId: "G-W7WJLHMKRW",
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

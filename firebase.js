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

import { get, getDatabase, ref, set } from "firebase/database";

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
  )
    .then(function (userCredential) {
      // Save the user data to Firebase database using their unique ID as the key
      saveUserData(userCredential);
    })
    .catch(function (error) {
      console.error("Error registering user: ", error);
    });
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

export const loginWithSocial = async (socialDetails) => {
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  switch (socialDetails) {
    case "google": // Corrected to string 'gmail'
      try {
        const userDetails = await signInWithPopup(auth, googleAuthProvider); // Pass userData and googleAuthProvider to signInWithPopup

        // Save the user data to Firebase database using their unique ID as the key
        saveUserData(userDetails);
        return userDetails;
      } catch (error) {
        console.log("there was an error", error);
      }

      break;
    case "github": // Added case for GitHub authentication
      try {
        const userDetails = signInWithPopup(auth, githubAuthProvider); // Pass userData and googleAuthProvider to signInWithPopup

        // Save the user data to Firebase database using their unique ID as the key
        saveUserData(userDetails);
        return userDetails;
      } catch (error) {
        console.log("there was an error", error);
      }
      break;
    default:
      break;
  }
};
export const logout = () => {
  signOut(auth);
};

// Function to save user data to Firebase database
async function saveUserData(userData) {
  const { displayName, phoneNumber, photoURL, emailVerified, email, uid } =
    userData.user;

  // Get a reference to the location where user data will be stored
  const userRef = ref(db, "usersData/" + uid);
  // Check if user data already exists
  const snapshot = await get(userRef);
  // If user data doesn't exist, set the user data
  if (!snapshot.exists()) {
    set(userRef, {
      displayName,
      phoneNumber,
      photoURL,
      emailVerified,
      email,
      uid,
    });
    console.log("User data saved successfully!");
  } else {
    console.log("User data already exists.");
  }
}

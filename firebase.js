// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyASkj4IV-st5213iRV1XKhF-ZzTPYZkGpE",
  authDomain: "flashcard-3db13.firebaseapp.com",
  projectId: "flashcard-3db13",
  storageBucket: "flashcard-3db13.appspot.com",
  messagingSenderId: "47527172632",
  appId: "1:47527172632:web:13d68e25dc0c15e278c16d",
  measurementId: "G-5DRXXWL2VJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };


import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNYlBjedlDDwveJKF3h9LEOM8-UJFAoWE",
  authDomain: "ema-simple-john-6f876.firebaseapp.com",
  projectId: "ema-simple-john-6f876",
  storageBucket: "ema-simple-john-6f876.appspot.com",
  messagingSenderId: "21032156973",
  appId: "1:21032156973:web:8a37ed3e8348f14a1b5da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;
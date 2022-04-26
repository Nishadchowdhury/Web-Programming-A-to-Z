// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvzdIvOrcViqXI2gXcf5k4vii-dWp0IIg",
  authDomain: "genius-car-services-1e3a5.firebaseapp.com",
  projectId: "genius-car-services-1e3a5",
  storageBucket: "genius-car-services-1e3a5.appspot.com",
  messagingSenderId: "897205269940",
  appId: "1:897205269940:web:2dcb8706def0c1ab58aee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

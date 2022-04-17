// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW2gN-2DjwRLOdtE6QNwfS7gxDvUAOumA",
    authDomain: "ar-wild-grapher.firebaseapp.com",
    projectId: "ar-wild-grapher",
    storageBucket: "ar-wild-grapher.appspot.com",
    messagingSenderId: "189285588857",
    appId: "1:189285588857:web:dde5f5e9b12a57b402d9a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
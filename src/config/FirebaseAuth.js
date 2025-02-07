import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-ZkN3wcBrgrYd_Laxx2Rffb-3s7WZDFs",
    authDomain: "swiggi-auth.firebaseapp.com",
    projectId: "swiggi-auth",
    storageBucket: "swiggi-auth.firebasestorage.app",
    messagingSenderId: "588294331418",
    appId: "1:588294331418:web:cafc1ea94c3391135445a3"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); 

export { auth, provider };

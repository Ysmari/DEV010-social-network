// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBcT7hblI4Z5vQ4PDEsEkrjuRIyAoCOImA",
  authDomain: "social-network-hercode.firebaseapp.com",
  projectId: "social-network-hercode",
  storageBucket: "social-network-hercode.appspot.com",
  messagingSenderId: "134195357770",
  appId: "1:134195357770:web:93bc295e8beebdca835eb3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth}

import firebase from "firebase/app";
import 'firebase/auth';

 
export const firebaseConfig =firebase.initializeApp( {
    apiKey: "AIzaSyBciiAum9TlDIF7ryvTSR_vsqQ4IbYpYDc",
    authDomain: "chatify-73341.firebaseapp.com",
    projectId: "chatify-73341",
    storageBucket: "chatify-73341.appspot.com",
    messagingSenderId: "361860836437",
    appId: "1:361860836437:web:9284c12786bb4bb07178dc"
  }).auth();
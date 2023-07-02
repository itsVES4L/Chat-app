import React from "react";
import google from "../assets/google-logo.png";
import styles from "./styles/Login.module.css";

import firebase from "firebase/app";
import { firebaseConfig } from "../firebase";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>welcome to Chatify !</h2>
        <div
          onClick={() => {
            firebaseConfig.signInWithRedirect(
              new firebase.auth.GoogleAuthProvider()
            );
          }}
          className={styles.button}
        >
          <img src={google} /> Sign in with google
        </div>
      </div>
    </div>
  );
};

export default Login;

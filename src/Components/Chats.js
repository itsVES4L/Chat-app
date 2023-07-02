import React, { useContext, useEffect, useState } from "react";
import styles from "./styles/Chats.module.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { firebaseConfig } from "../firebase";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {

console.log(user.email.split("@")[0] , user.uid);


    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "433ec2f8-0538-446c-ba62-eddfe9797fa5",
          "user-name": user.email.split("@")[0],
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email.split("@")[0]);
        formData.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {

formData.append("avatar",avatar,avatar.name)
          axios
            .post("https://api.chatengine.io/users/", formData, {
              headers: {
                "private-key": "e560b099-c5ae-4bdc-b6d2-9d91b28f405f",
              },
            })
            .then(() => {
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
  }, [user, navigate]);

  const getFile = async (Url) => {
    const res = await fetch(Url);
    const data = await res.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logOutHandler = async () => {
    await firebaseConfig.signOut();
    navigate("/");
  };

  if (!user || loading) return "Loading ... ";

  return (
    <div className={styles.container}>
      <Navbar logOutHandler={logOutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="433ec2f8-0538-446c-ba62-eddfe9797fa5"
        userName={user.email.split("@")[0]}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;

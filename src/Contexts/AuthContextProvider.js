import React, { createContext, useEffect, useState } from "react";
import { firebaseConfig } from "../firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    firebaseConfig.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) navigate("/chats");
    });
  }, [user, navigate]);

  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

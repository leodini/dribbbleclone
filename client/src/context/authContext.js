import React, { createContext, useRef, useState, useEffect } from "react";
import api from "../api";
import JWT from "../helpers/jwt";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  const tokenData = async () => {
    const storageToken = localStorage.getItem("token");
    console.log(storageToken);
    if (storageToken) {
      setToken(storageToken);
      const { sub } = await JWT.parseJwt(token);
      setUsername(sub);
    }
  };

  const signin = async (username, password) => {
    const form = {
      username,
      password,
    };

    try {
      const {
        data: { token },
      } = await api.post("/signin", form);

      JWT.storeJwt(token);

      setToken(token);

      const { sub } = JWT.parseJwt(token);

      setUsername(sub);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ username, token, signin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

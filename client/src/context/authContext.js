import React, { createContext, useState, useEffect, useCallback } from "react";
import api from "../api";
import JWT from "../helpers/jwt";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(JWT.readToken() || null);

  const tokenData = useCallback(async () => {
    if (token) {
      // JWT.storeToken(token);
      const { sub } = await JWT.parseToken(token);
      setUser(sub);
      api.defaults.headers["Authorization"] = token;
    }
  }, [token]);

  const signin = async (username, password) => {
    const form = {
      username,
      password,
    };

    try {
      const {
        data: { token },
      } = await api.post("/signin", form);
      console.log(token);
      setToken(token);
      JWT.storeToken(token);
    } catch (err) {
      console.log(err);
    }
  };

  const signup = async (username, password, email) => {
    const newUser = {
      username,
      password,
      email,
    };

    try {
      const {
        data: { token },
      } = await api.post("/signup", newUser);
      setToken(token);
      JWT.storeToken(token);
    } catch (err) {
      console.log(err);
    }
  };

  const signout = () => {
    JWT.clearToken();
    setUser(null);
    setToken(null);
  };

  const getNewToken = (token) => {
    JWT.storeToken(token);
    setToken(token);
  };

  useEffect(() => {
    tokenData();
  }, [token, tokenData]);

  return (
    <AuthContext.Provider
      value={{ user, token, signin, signout, signup, getNewToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

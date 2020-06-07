import React, { createContext, useState, useEffect, useCallback } from "react";
import api from "../api";
import JWT from "../helpers/jwt";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(JWT.readToken() || null);

  const tokenData = useCallback(() => {
    if (token) {
      const { sub } = JWT.parseToken(token);
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
      JWT.storeToken(token);
      setToken(token);
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
      JWT.storeToken(token);
      setToken(token);
    } catch (err) {
      console.log(err);
    }
  };

  const signout = () => {
    JWT.clearToken();
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    tokenData();
  }, [token, tokenData]);

  return (
    <AuthContext.Provider value={{ user, token, signin, signout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

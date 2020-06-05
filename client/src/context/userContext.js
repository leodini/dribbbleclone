import React, { createContext, useReducer, useState } from "react";
import api from "../api";
import { userReducer } from "./reducer";

export const UserContext = createContext();

const INITIAL_STATE = {
  username: "",
  token: "",
};

const UserState = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);
  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};

export default UserState;

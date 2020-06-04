import React, { createContext, useReducer, useState } from "react";
import api from "../api";
import { userReducer } from "./reducer";

export const UserContext = createContext();

const UserState = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, {});
  return (
    <UserContext.Provider value={{ user: userState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;

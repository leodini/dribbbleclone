import React, { createContext, useReducer, useState } from "react";
// import { userReducer } from "./reducer";
// import { types } from "./reducer";
import api from "../api";
import JWT from "../helpers/jwt";

export const UserContext = createContext();

// const INITIAL_STATE = {
//   username: "",
//   token: "",
//   loading: false,
//   error: false,
// };

const UserState = ({ children }) => {
  // const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);

  // const signin = (username, password) => {
  //   dispatch({ type: types.SIGNIN_USER, username, password });
  // };

  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const signin = async (username, password) => {
    const form = {
      username,
      password,
    };

    try {
      // action.loading = true;
      setIsLoading(true);
      const {
        data: { token },
      } = await api.post("/signin", form);

      JWT.storeJwt(token);

      setToken(token);

      const { sub } = JWT.parseJwt(token);

      setUsername(sub);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{ username, token, isLoading, error, signin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;

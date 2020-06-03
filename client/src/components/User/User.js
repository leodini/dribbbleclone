import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { username } = useParams();

  return <h1>{username}</h1>;
};

export default User;

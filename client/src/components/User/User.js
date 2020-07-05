import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostContainer from "../Posts/PostContainer";
import Header from "../Header/Header";
import api from "../../api";

const User = () => {
  const [userData, setUserData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const { data } = await api.get(`/user/${id}`);
    setUserData(data);
  };

  if (!userData) return null;
  const { username, posts, bio, liked, followers, following } = userData;
  return (
    <>
      <Header />
      <div className="container">
        <h1>{username}</h1>
        <h2>{bio}</h2>
        <PostContainer data={posts} />
      </div>
    </>
  );
};

export default User;

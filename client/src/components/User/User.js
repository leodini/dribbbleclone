import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostContainer from "../Posts/PostContainer";
import Header from "../Header/Header";
import { MasterHead } from "./StyledUser";
import Avatar from "../Shared/Avatar";
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

  const randomImage = (ceil) => {
    if (typeof ceil === "number") {
      return Math.floor(Math.random() * ceil + 1);
    }
    throw new Error("must provide a number");
  };

  if (!userData) return null;
  const { username, posts, bio, liked, followers, following } = userData;
  const randomNumber = randomImage(posts.length);
  const masterHeadImage = posts[randomNumber].image_url;
  return (
    <>
      <Header />
      <div className="container">
        <MasterHead>
          <div className="mt-container">
            <div className="user-mt">
              {/* <Avatar /> */}
              <h1>{username}</h1>
              <h2>{bio}</h2>
            </div>
            <div className="img-container">
              <div className="masterhead-block-container">
                <div className="block"></div>
              </div>
              <img src={masterHeadImage} alt={username} />
            </div>
          </div>
        </MasterHead>
        <PostContainer data={posts} />
      </div>
    </>
  );
};

export default User;

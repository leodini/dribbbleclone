import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostContainer from "../Posts/PostContainer";
import Header from "../Header/Header";
import { MasterHead } from "./StyledUser";
import { Avatar } from "../Shared/Avatar";
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
      return Math.floor(Math.random() * ceil);
    }
    return 0;
  };

  if (!userData) return null;
  const { username, posts, bio, liked, followers, following } = userData;
  const masterHeadImage = posts[randomImage(posts.length)].image_url;
  return (
    <>
      <Header />
      <div className="container">
        <MasterHead>
          <div className="mt-container">
            <div className="user-mt">
              <Avatar user={userData} width={"84"} height={"84"} />
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

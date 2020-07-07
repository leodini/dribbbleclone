import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import PostContainer from "../Posts/PostContainer";
import Header from "../Header/Header";
import { MasterHead } from "./StyledUser";
import { Avatar } from "../Shared/Avatar";
import useAuth from "../../hooks/useAuth";
import api from "../../api";

const User = () => {
  const [userData, setUserData] = useState();
  const { id } = useParams();
  const { user } = useAuth();

  const fetchUserData = useCallback(async () => {
    const { data } = await api.get(`/user/${id}`);
    setUserData(data);
  }, [id]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const randomImage = (ceil) => {
    if (typeof ceil === "number") {
      return Math.floor(Math.random() * ceil);
    }
    return 0;
  };

  if (!userData) return null;
  const { username, posts, bio, followers, following } = userData;
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
              {user.username !== username ? <button>+ Follow</button> : null}
            </div>
            {posts.length && (
              <div className="img-container">
                <div className="masterhead-block-container">
                  <div className="block"></div>
                </div>

                <img
                  src={posts[randomImage(posts.length)].image_url}
                  alt={username}
                />
              </div>
            )}
          </div>
        </MasterHead>
        {posts && <span>Shots {posts.length}</span>}
        {followers && <span>Followers {followers.length}</span>}
        {following && <span>Following {following.length}</span>}
        <PostContainer data={posts} />
      </div>
    </>
  );
};

export default User;

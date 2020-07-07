import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import PostContainer from "../Posts/PostContainer";
import Header from "../Header/Header";
import { MasterHead, UserStats } from "./StyledUser";
import { Avatar } from "../Shared/Avatar";
import useAuth from "../../hooks/useAuth";
import api from "../../api";
import { Separator } from "../Settings/StyledSettings";

const User = () => {
  const [userData, setUserData] = useState();
  const { id } = useParams();
  const { user } = useAuth();

  const fetchUserData = useCallback(async () => {
    const { data } = await api.get(`/user/${id}`);
    console.log(data);
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
  const { username, posts, bio, followers, following, liked } = userData;
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
        <UserStats>
          {posts && (
            <span className="label">
              Shots <span className="count">{posts.length}</span>
            </span>
          )}
          {followers && (
            <span className="label">
              Followers <span className="count">{followers.length}</span>
            </span>
          )}
          {following && (
            <span className="label">
              Following <span className="count">{following.length}</span>
            </span>
          )}
          {liked && (
            <span className="label">
              Liked <span className="count">{liked.length}</span>
            </span>
          )}
        </UserStats>
        <Separator width={"93%"} />
        <PostContainer data={posts} />
      </div>
    </>
  );
};

export default User;

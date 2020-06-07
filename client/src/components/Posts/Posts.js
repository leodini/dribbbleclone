import React from "react";
import { PostsContainer } from "./StyledPost";
import api from "../../api";
import Post from "./Post";

const Posts = ({ data }) => {
  const likePost = async (postId) => {
    const { data } = await api.post(`/like/${postId}/post`, true);
    console.log(data);
  };

  return (
    <PostsContainer>
      {data &&
        data.map((post) => (
          <Post key={post._id} post={post} likePost={likePost} />
        ))}
    </PostsContainer>
  );
};

export default Posts;

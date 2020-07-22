import React from "react";
import { PostsContainer } from "./StyledPost";
import Post from "./Post";

const Posts = ({ data }) => {
  return (
    <>
      <PostsContainer>
        {data && data.map((post) => <Post key={post._id} post={post} />)}
      </PostsContainer>
    </>
  );
};

export default Posts;

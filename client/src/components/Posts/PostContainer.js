import React, { useState, useEffect, useCallback } from "react";
import { PostsContainer } from "./StyledPost";
import Post from "./Post";

const Posts = ({ data, user }) => {
  return (
    <>
      <PostsContainer>
        {data && data.map((post) => <Post key={post._id} post={post} />)}
      </PostsContainer>
    </>
  );
};

export default Posts;

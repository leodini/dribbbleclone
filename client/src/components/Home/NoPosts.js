import React from "react";
import styled from "styled-components";

const NoPosts = styled.p`
  font-size: 28px;
  color: #6e6d7a;
  text-align: center;
`;
const NoPostsContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const NoPost = () => {
  return (
    <NoPostsContainer>
      <NoPosts>No posts here =(</NoPosts>
    </NoPostsContainer>
  );
};

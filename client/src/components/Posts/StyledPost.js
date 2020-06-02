import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 400px;
  border-radius: 8px;
  margin-bottom: 3px;
`;

export const Author = styled.p`
  font-size: 14px;
  color: #404050;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

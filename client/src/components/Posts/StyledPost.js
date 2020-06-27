import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 22px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
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
  font-family: Roboto;
  font-weight: 600;
  color: #404050;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    align-items: center;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 50%;
  }
`;

export const Counter = styled.span`
  font-family: Roboto;
  color: #a1a1aa;
  font-size: 14px;
  padding: 3px;
  margin-right: 6px;
`;

import styled from "styled-components";

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 12px;
`;
export const AuthorName = styled.p`
  font-family: "Roboto";
  margin-left: 8px;
  color: #0d0c22;
  font-weight: 600;
  /* font-size: 16px; */
`;

export const Content = styled.div`
  font-family: "Roboto";
  margin-bottom: 5px;
  color: #0d0c22;
`;

export const Time = styled.span`
  font-family: "Roboto";
  color: #787783;
  font-size: 14px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  margin-left: 38px;
`;

import React from "react";
import { format } from "timeago.js";
import {
  CommentsContainer,
  AuthorName,
  Content,
  Time,
  UserContainer,
  ContentContainer,
} from "./StyledComment";
import { Avatar } from "../Shared/Avatar";

const Comments = ({ comment }) => {
  return (
    <CommentsContainer>
      <UserContainer>
        <Avatar user={comment.author} height={"30px"} width={"30px"} />
        <AuthorName>{comment.author.username}</AuthorName>
      </UserContainer>
      <ContentContainer>
        <Content>{comment.content}</Content>
        <Time>{format(comment.createdAt)}</Time>
      </ContentContainer>
    </CommentsContainer>
  );
};

export default Comments;

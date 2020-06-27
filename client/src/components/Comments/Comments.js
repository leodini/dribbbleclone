import React from "react";
import { UserImage } from "../PostPage/StyledPostPage";
import default_user from "../../assets/default_user.png";
import { Avatar } from "../Shared/Avatar";

const Comments = ({ comment }) => {
  return (
    <div className="comment-container">
      <Avatar user={comment.author} height={"30px"} width={"30px"} />
      <span>{comment.author.username}</span>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comments;

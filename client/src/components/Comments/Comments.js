import React from "react";
import { UserImage } from "../PostPage/StyledPostPage";
import default_user from "../../assets/default_user.png";

const Comments = ({ comment }) => {
  return (
    <div className="comment-container">
      {comment.author.image_url ? (
        <UserImage
          width="32px"
          height="32px"
          src={comment.author.image_url}
          alt={comment.author.username}
        />
      ) : (
        <UserImage
          width="32px"
          height="32px"
          src={default_user}
          alt={comment.author.username}
        />
      )}
      <span>{comment.author.username}</span>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comments;

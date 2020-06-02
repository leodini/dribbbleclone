import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  InfoContainer,
  PostContainer,
  PostsContainer,
  Image,
  Author,
  AuthorContainer,
} from "./StyledPost";
import default_user from "../../assets/default_user.png";

const Post = ({ post }) => {
  const { image_url, title, author, comments, likes } = post;
  return (
    <PostContainer>
      <Image src={image_url} alt={title} />
      <InfoContainer>
        <AuthorContainer>
          {author.avatar_url ? (
            <img src={author.avatar_url} alt={author.username} />
          ) : (
            <img
              src={default_user}
              alt={author.username}
              style={{ width: "22px" }}
            />
          )}
          <Author>{author.username}</Author>
        </AuthorContainer>
        <div className="">
          <FaRegCommentAlt
            style={{ color: "#404050", marginRight: "3px" }}
            size={16}
          >
            <span>{comments.length}</span>
          </FaRegCommentAlt>
          <AiOutlineHeart style={{ color: "#404050" }} size={18}>
            <span>{likes.length}</span>
          </AiOutlineHeart>
        </div>
      </InfoContainer>
    </PostContainer>
  );
};

export default Post;

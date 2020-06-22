import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Modal from "react-modal";
import { FaRegCommentAlt } from "react-icons/fa";
// import { PostModal } from "../";
import {
  AiOutlineHeart,
  // AiFillHeart
} from "react-icons/ai";
import {
  InfoContainer,
  PostContainer,
  Image,
  Author,
  AuthorContainer,
  Counter,
} from "./StyledPost";
import default_user from "../../assets/default_user.png";

const Post = ({ post, likePost }) => {
  const { image_url, title, author, comments, likes, _id } = post;

  return (
    <PostContainer>
      <Link to={`/shot/${_id}`}>
        <Image src={image_url} alt={title} />
      </Link>
      <InfoContainer>
        <Link to={`/${author.username}`} style={{ textDecoration: "none" }}>
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
        </Link>
        <div>
          <FaRegCommentAlt
            style={{ color: "#a1a1aa", marginRight: "3px", cursor: "pointer" }}
            size={12}
          />
          <Counter>{comments.length}</Counter>
          <AiOutlineHeart
            onClick={() => likePost(_id)}
            style={{ color: "#a1a1aa", cursor: "pointer" }}
            size={14}
          />
          <Counter>{likes.length}</Counter>
        </div>
      </InfoContainer>
    </PostContainer>
  );
};

export default Post;

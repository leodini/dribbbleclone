import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegCommentAlt } from "react-icons/fa";
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
import { Avatar } from "../Shared/Avatar";

const Post = ({ post, likePost }) => {
  const { image_url, title, author, comments, likes, _id } = post;

  return (
    <PostContainer>
      <Link to={`/post/${_id}`}>
        <Image src={image_url} alt={title} />
      </Link>
      <InfoContainer>
        <Link to={`/${author.username}`} style={{ textDecoration: "none" }}>
          <AuthorContainer>
            <Avatar user={author} />
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

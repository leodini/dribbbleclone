import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  InfoContainer,
  PostContainer,
  Image,
  Author,
  AuthorContainer,
  Counter,
} from "./StyledPost";
import { Avatar } from "../Shared/Avatar";
import api from "../../api";
import useAuth from "../../hooks/useAuth";

const Post = ({ post }) => {
  const [numLikes, setNumLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useAuth();

  const likePost = async (postId) => {
    try {
      const { data } = await api.post(`/like/post/${postId}`);
      setNumLikes([...numLikes, data]);
    } catch (e) {
      console.log(e);
    }
    setIsLiked(true);
  };

  useEffect(() => {
    if (!user) return false;
    const likeIndex = numLikes.indexOf(user.user_id);
    if (likeIndex === -1) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  }, [numLikes, user]);

  const { image_url, title, author, comments, _id } = post;

  return (
    <PostContainer>
      <Link to={`/post/${_id}`}>
        <div className="hvrbox">
          <Image src={image_url} alt={title} />
          <div className="hvrbox-layer_top">
            <div className="hvrbox-text">{title}</div>
          </div>
        </div>
      </Link>
      {author.username && (
        <InfoContainer>
          <Link
            to={`/user/${author.username}`}
            style={{ textDecoration: "none" }}
          >
            <AuthorContainer>
              <Avatar user={author} />
              <Author>{author.username}</Author>
            </AuthorContainer>
          </Link>
          <div>
            <FaRegCommentAlt
              style={{
                color: "#a1a1aa",
                marginRight: "3px",
                cursor: "pointer",
              }}
              size={12}
            />
            <Counter>{comments.length}</Counter>
            {isLiked ? (
              <AiFillHeart style={{ color: "#ff5555" }} size={14} />
            ) : (
              <AiOutlineHeart
                onClick={() => likePost(_id)}
                style={{ color: "#a1a1aa", cursor: "pointer" }}
                size={14}
              />
            )}

            <Counter>{numLikes.length}</Counter>
          </div>
        </InfoContainer>
      )}
    </PostContainer>
  );
};

export default Post;

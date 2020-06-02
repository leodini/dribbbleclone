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

const Posts = ({ data }) => {
  return (
    <PostsContainer>
      {data &&
        data.map((post) => (
          <PostContainer>
            <Image src={post.image_url} alt={post.title} />
            <InfoContainer>
              <AuthorContainer>
                {post.author.avatar_url ? (
                  <img
                    src={post.author.avatar_url}
                    alt={post.author.username}
                  />
                ) : (
                  <img
                    src={default_user}
                    alt={post.author.username}
                    style={{ width: "22px" }}
                  />
                )}
                <Author>{post.author.username}</Author>
              </AuthorContainer>
              <div className="">
                <FaRegCommentAlt
                  style={{ color: "#404050", marginRight: "3px" }}
                  size={16}
                >
                  <span>{post.comments.length}</span>
                </FaRegCommentAlt>
                <AiOutlineHeart style={{ color: "#404050" }} size={18}>
                  <span>{post.likes.length}</span>
                </AiOutlineHeart>
              </div>
            </InfoContainer>
          </PostContainer>
        ))}
    </PostsContainer>
  );
};

export default Posts;

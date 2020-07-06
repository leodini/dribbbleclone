import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  AuthorContainer,
  PostPageContainer,
  InfoContainer,
  Title,
  Author,
  Description,
  Responses,
  NoComment,
} from "./StyledPostPage";
import { Header } from "../";
import CommentForm from "./CommentForm";
import Comments from "../Comments/Comments";
import api from "../../api";
import useAuth from "../../hooks/useAuth";
import { Avatar } from "../Shared/Avatar";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { user } = useAuth();

  const fetchData = useCallback(async () => {
    const { data } = await api.get(`/posts/${id}`);
    setPost(data);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = async (content) => {
    try {
      const { data } = await api.post(`/comment/${id}`, { content });
      console.log(user);
      data.author = user;
      setPost({ ...post, comments: [data, ...comments] });
    } catch (e) {
      throw new Error(e);
    }
  };

  if (!post) {
    return "loading...";
  }

  const { author, title, image_url, description, comments } = post;

  return (
    <>
      <Header />
      <PostPageContainer>
        <InfoContainer>
          <Avatar user={author} />
          <AuthorContainer>
            <Title>{title}</Title>
            <Author>
              <span>by</span> {author.username}
            </Author>
          </AuthorContainer>
        </InfoContainer>
        <img
          src={image_url}
          alt={title}
          style={{ width: "760px", borderRadius: "8px" }}
        />
        <Description>{description}</Description>
        <CommentForm postId={id} handleSubmit={handleSubmit} />

        <Responses>{comments.length} responses</Responses>
        {comments.length ? (
          comments.map((comment, i) => <Comments comment={comment} key={i} />)
        ) : (
          <NoComment>seja o primeiro a comentar</NoComment>
        )}
      </PostPageContainer>
    </>
  );
};

export default PostPage;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  AuthorContainer,
  PostPageContainer,
  UserImage,
} from "./StyledPostPage";
import default_user from "../../assets/default_user.png";
import { Header } from "../";
import CommentForm from "./CommentForm";
import Comments from "../Comments/Comments";
import api from "../../api";
import useAuth from "../../hooks/useAuth";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await api.get(`/posts/${id}`);
    setPost(data);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/comment/${id}`, { content });
      data.author = user;
      setPost({ ...post, comments: [data, ...comments] });
    } catch (e) {
      console.log(e);
    }
    setContent("");
  };

  if (!post) {
    return "loading...";
  }

  const { author, title, image_url, description, comments } = post;

  return (
    <>
      <Header />
      <PostPageContainer>
        <div className="info-container">
          {!!author.avatar_url ? (
            <UserImage
              className="author-image"
              src={author.avatar_url}
              alt={author.username}
            />
          ) : (
            <UserImage
              className="author-image"
              src={default_user}
              alt={author.username}
            />
          )}
          <AuthorContainer>
            <div>
              <p className="title">{title}</p>
              <p className="author">
                <span>by</span> {author.username}
              </p>
            </div>
          </AuthorContainer>
        </div>
        <img
          src={image_url}
          alt={title}
          style={{ width: "760px", borderRadius: "8px" }}
        />
        <div className="desc">{description}</div>
        {/* <CommentForm postId={id} handleComment={handleComment} /> */}
        {user && (
          <form onSubmit={handleComment}>
            <input
              type="text"
              value={content}
              placeholder="deixe seu comentario"
              onChange={(e) => setContent(e.target.value)}
            />
            <button disabled={!content} type="submit">
              enviar
            </button>
          </form>
        )}
        {comments.length ? (
          comments.map((comment, i) => <Comments comment={comment} key={i} />)
        ) : (
          <p>seja o primeiro a comentar</p>
        )}
      </PostPageContainer>
    </>
  );
};

export default PostPage;

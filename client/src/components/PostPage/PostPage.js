import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { AuthorContainer } from "./StyledPostPage";

const PostPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`/posts/${id}`);

  if (isLoading) {
    return "loading...";
  }
  if (!data) {
    return null;
  }
  const { default_user, author, title, image_url, description } = data;
  return (
    <div className="container">
      {author.avatar_url ? (
        <img src={author.avatar_url} alt={author.username} />
      ) : (
        <img src={default_user} alt={author.username} />
      )}
      <AuthorContainer>
        <div>
          <p className="title">{title}</p>
          <p className="author">
            <span>by</span> {author.username}
          </p>
        </div>
      </AuthorContainer>
      <img
        src={image_url}
        alt={title}
        style={{ width: "760px", borderRadius: "8px" }}
      />
      <div className="desc">{description}</div>
    </div>
  );
};

export default PostPage;

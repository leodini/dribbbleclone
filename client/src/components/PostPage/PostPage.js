import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { AuthorContainer, PostPageContainer } from "./StyledPostPage";
import default_user from "../../assets/default_user.png";
import { Header } from "../";

const PostPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`/posts/${id}`);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading || !data) {
    return "loading...";
  }
  const { author, title, image_url, description, comments } = data;
  return (
    <>
      <Header />
      <PostPageContainer>
        <div className="info-container"></div>
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
        {comments ? (
          comments.map((comment) => (
            <div className="comment-container">
              <span>{comment.author.username}</span>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>seja o primeiro a comentar</p>
        )}
      </PostPageContainer>
    </>
  );
};

export default PostPage;

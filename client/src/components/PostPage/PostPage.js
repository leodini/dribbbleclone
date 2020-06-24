import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {
  AuthorContainer,
  PostPageContainer,
  UserImage,
} from "./StyledPostPage";
import default_user from "../../assets/default_user.png";
import { Header } from "../";
import CommentForm from "./CommentForm";
import Comments from "../Comments/Comments";

const PostPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`/posts/${id}`);

  if (isLoading || !data) {
    return "loading...";
  }
  console.log(data);
  const { author, title, image_url, description, comments } = data;
  return (
    <>
      <Header />
      <PostPageContainer>
        <div className="info-container">
          {author.avatar_url ? (
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
        <CommentForm postId={id} />
        {comments ? (
          comments.map((comment, i) => <Comments comment={comment} key={i} />)
        ) : (
          <p>seja o peimeiro a comentar</p>
        )}
      </PostPageContainer>
    </>
  );
};

export default PostPage;

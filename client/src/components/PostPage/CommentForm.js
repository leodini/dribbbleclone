import React from "react";
import { useState } from "react";
import api from "../../api";
import useAuth from "../../hooks/useAuth";
import useFetchApi from "../../hooks/useFetchApi";

const CommentForm = ({ postId, handleComment }) => {
  const [content, setContent] = useState("");
  const { user } = useAuth();

  return (
    <>
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
    </>
  );
};

export default CommentForm;

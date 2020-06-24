import React from "react";
import { useState } from "react";
import api from "../../api";
import useAuth from "../../hooks/useAuth";

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState("");
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await api.post(`/comment/${postId}`, { content });
      console.log(data);
      setContent("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {user && (
        <form onSubmit={handleSubmit}>
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

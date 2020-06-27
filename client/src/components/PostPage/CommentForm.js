import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const CommentForm = ({ handleSubmit }) => {
  const [content, setContent] = useState("");
  const { user } = useAuth();

  const handleForm = (e) => {
    e.preventDefault();
    handleSubmit(content);
    setContent("");
  };

  return (
    <>
      {user && (
        <form onSubmit={handleForm}>
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

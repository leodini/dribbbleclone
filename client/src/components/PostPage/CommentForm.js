import React from "react";
import { useState } from "react";
import api from "../../api";

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState("");

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
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        value={content}
        placeholder="deixe seu comentario"
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">enviar</button>
    </form>
  );
};

export default CommentForm;

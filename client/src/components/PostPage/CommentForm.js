import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Input, Btn, Form } from "./StyledPostPage";

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
        <Form onSubmit={handleForm}>
          <Input
            type="text"
            value={content}
            placeholder="deixe seu comentario"
            onChange={(e) => setContent(e.target.value)}
          />
          <Btn disabled={!content} type="submit">
            enviar
          </Btn>
        </Form>
      )}
    </>
  );
};

export default CommentForm;

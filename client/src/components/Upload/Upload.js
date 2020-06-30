import React, { useState, useMemo } from "react";
import camera from "../../assets/camera.png";
import api from "../../api";
import {
  Thumbnail,
  Form,
  TextFields,
  ImageContainer,
  Container,
} from "./StyledUpload";

export default function Upload({ history }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? thumbnail : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      image_url: thumbnail,
      title,
      category,
      description,
    };

    try {
      await api.post("/posts", formData);
      history.push("/");
    } catch (e) {
      throw new Error(e);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ImageContainer>
          <Thumbnail
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? "has-thumbnail" : ""}
          >
            <img src={camera} style={{ width: "200px" }} alt="select img" />
          </Thumbnail>
          <input
            type="text"
            placeholder="url da imagem"
            onChange={(event) => setThumbnail(event.target.value)}
          />
        </ImageContainer>

        <TextFields>
          <label htmlFor="title">TITLE *</label>
          <input
            type="text"
            id="title"
            placeholder="sua empresa incrivel"
            onChange={(event) => setTitle(event.target.value)}
          />

          <label htmlFor="categories">
            CATEGORIES * <span>(separadas por virgula)</span>
          </label>
          <input
            type="text"
            id="categories"
            placeholder="quais tecnologias usam?"
            onChange={(event) => setCategory(event.target.value)}
          />

          <label htmlFor="description">DESCRIPTION </label>
          <input
            type="text"
            id="description"
            placeholder="valor cobrado por dia"
            onChange={(event) => setDescription(event.target.value)}
          />

          <button type="submit" className="btn">
            Cadastrar
          </button>
        </TextFields>
      </Form>
    </Container>
  );
}

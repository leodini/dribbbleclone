import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import camera from "../../assets/camera.png";
import api from "../../api";
import {
  Thumbnail,
  Form,
  TextFields,
  ImageContainer,
  Container,
  Label,
  TextArea,
  Input,
  Button,
  Header,
} from "./StyledUpload";
import useMessage from "../../hooks/useMessage";

export default function Upload({ history }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const { addMessage } = useMessage();

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

      addMessage("Post added successfully", "success");
      setTimeout(() => {
        history.push("/");
      }, 1600);
    } catch (e) {
      addMessage("Error posting your image", "error");
      throw new Error(e);
    }
  }

  return (
    <>
      <Header>
        <Link to="/">
          <h2>dribbbleo</h2>
        </Link>
        <p>Publish your shot</p>
        <span>Help</span>
      </Header>

      <Container>
        <Form onSubmit={handleSubmit}>
          <ImageContainer>
            <Thumbnail
              id="thumbnail"
              style={{ backgroundImage: `url(${preview})` }}
              className={thumbnail ? "has-thumbnail" : ""}
            >
              <img
                src={camera}
                style={
                  thumbnail
                    ? { display: "none" }
                    : { display: "block", width: "150px" }
                }
                alt="select img"
              />
            </Thumbnail>
            <Label htmlFor="image">Url da imagem</Label>
            <Input
              type="text"
              id="image"
              placeholder="url da imagem"
              onChange={(event) => setThumbnail(event.target.value)}
            />
          </ImageContainer>

          <TextFields>
            <Label htmlFor="title">Titulo *</Label>
            <Input
              type="text"
              id="title"
              onChange={(event) => setTitle(event.target.value)}
            />

            <Label htmlFor="categories">
              Categorias<span></span>
            </Label>
            <Input
              type="text"
              id="categories"
              placeholder="categorias separadas por virgula"
              onChange={(event) => setCategory(event.target.value)}
            />

            <Label htmlFor="description">Description </Label>
            <TextArea
              type="text"
              id="description"
              placeholder="Tell us about your process and how you arrived at this design"
              onChange={(event) => setDescription(event.target.value)}
            />

            <Button type="submit" className="btn">
              Cadastrar
            </Button>
          </TextFields>
        </Form>
      </Container>
    </>
  );
}

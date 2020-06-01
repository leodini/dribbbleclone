import React, { useState, useMemo } from "react";
import api from "../api";
import camera from "../assets/camera.png";

function NewPost() {
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? thumbnail : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append("image_url", thumbnail);
    data.append("title", title);
    data.append("category", category);
    data.append("description", description);
    console.log(thumbnail);
    await api.post("/posts", data, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkcmlibGxsZWNsb25lIiwic3ViIjoiNWVjZjIwMWY2YmVjNTU3MjJhOWUwMzQ5IiwiaWF0IjoxNTkwNjMyNDc5MjYwLCJleHAiOjE1OTMyMjQ0NzkyNjF9.1YZwWvqLAlXDERlEjRf80zxKZ4jS6gl7uBCKHtWHFAI",
      },
    });

    console.log("oin");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? "has-thumbnail" : ""}
      >
        <img src={camera} alt="Enviar imagem" width={100} />
      </label>
      <input
        type="text"
        value={thumbnail}
        onChange={(event) => {
          setThumbnail(event.target.value);
        }}
      />

      <label htmlFor="title">TITULO *</label>
      <input
        id="title"
        placeholder="Sua empresa incrível"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="category">
        CATEGORIAS * <span>(separadas por vírgula)</span>
      </label>
      <input
        id="category"
        placeholder="Quais tecnologias usam?"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />

      <label htmlFor="description">
        DESCRIPTION* (em branco para GRATUITO)
      </label>
      <input
        id="description"
        placeholder="Valor cobrado por dia"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit" className="btn">
        Cadastrar
      </button>
    </form>
  );
}

export default NewPost;

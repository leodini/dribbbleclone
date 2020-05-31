import React, { useEffect, useState } from "react";
import api from "./api";
import NewPost from "./components/newPost";
import "./styles.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get("/posts");
      setData(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((post) => (
        <div key={post._id} className="container">
          <img src={post.image_url} width={100} alt={post.title} />
          <span>{post.likes.length}</span>
          <span>{post.comments.length}</span>
        </div>
      ))}
      <NewPost />
    </div>
  );
}

export default App;

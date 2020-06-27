import React, { useEffect, useState } from "react";
import { Header, MainSection, Posts } from "../";
import Loading from "../Loading/Loading";
import api from "../../api";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    window.document.title = "dribbbleo";
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await api.get("/posts");
    setPosts(data);
  };

  if (!posts) return <Loading />;
  return (
    <div>
      <Header />
      <MainSection />
      {posts.length ? <Posts data={posts} /> : <p>nenhum post ainda =(</p>}
    </div>
  );
}

export default Home;

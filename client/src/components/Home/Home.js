import React, { useEffect, useState } from "react";
import { Header, MainSection, Posts } from "../";
import Loading from "../Loading/Loading";
import api from "../../api";
import useAuth from "../../hooks/useAuth";

function Home() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();

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
      {!user && <MainSection />}
      {posts.length ? <Posts data={posts} /> : <p>nenhum post ainda =(</p>}
    </div>
  );
}

export default Home;

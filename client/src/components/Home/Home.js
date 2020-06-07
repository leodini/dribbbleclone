import React, { useEffect } from "react";
import { Header, MainSection, Posts } from "../";
import "../../styles.css";
import useFetch from "../../hooks/useFetch";

function Home() {
  const { data, isLoading } = useFetch("/posts");

  useEffect(() => {
    window.document.title = "dribbbleo";
  }, []);

  if (isLoading) return "Loading...";

  return (
    <div>
      <Header />
      <MainSection />
      <Posts data={data} />
    </div>
  );
}

export default Home;

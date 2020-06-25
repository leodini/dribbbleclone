import React, { useEffect } from "react";
import { Header, MainSection, Posts } from "../";
import Loading from "../Loading/Loading";
import "../../styles.css";
// import useFetch from "../../hooks/useFetch";
import useFetchApi from "../../hooks/useFetchApi";

function Home() {
  const { fetchApiData, apiData } = useFetchApi();

  useEffect(() => {
    window.document.title = "dribbbleo";
    fetchApiData("/posts");
  }, []);

  if (!apiData.posts) return <Loading />;
  return (
    <div>
      <Header />
      <MainSection />
      <Posts data={apiData.posts} />
    </div>
  );
}

export default Home;

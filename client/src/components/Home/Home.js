import React, { useEffect } from "react";
import { Header, MainSection, Posts } from "../";
import "../../styles.css";
import useFetch from "../../hooks/useFetch";

function App() {
  const { data, isLoading, isError } = useFetch("/posts");

  useEffect(() => {
    window.document.title = "dribbbleo";
  }, []);

  return (
    <div>
      <Header />
      <MainSection />
      <Posts data={data} />
    </div>
  );
}

export default App;

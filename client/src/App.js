import React, { useEffect, useState } from "react";
import api from "./api";
import NewPost from "./components/NewPost/NewPost";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Posts from "./components/Posts/Posts";
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
    <div>
      <Header />
      <MainSection />
      <Posts data={data} />
      {/* <NewPost /> */}
    </div>
  );
}

export default App;

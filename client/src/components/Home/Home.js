import React, { useEffect, useState } from "react";
import api from "../../api";
import { Header, MainSection, Posts } from "../";
import "../../styles.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.document.title = "dribbbleo";
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
    </div>
  );
}

export default App;

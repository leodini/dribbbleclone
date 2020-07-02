import React, { useEffect, useState, useCallback } from "react";
import { Header, MainSection, Posts } from "../";
import Loading from "../Loading/Loading";
import api from "../../api";
import useAuth from "../../hooks/useAuth";

function Home() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();
  const [filteredData, setFilteredData] = useState([]);

  const changeSort = (sortType) => {
    filterPosts(sortType);
  };

  const filterPosts = useCallback(
    (type) => {
      const map = {
        art: "art",
        illustration: "illustration",
      };
      const sortProperty = map[type];
      const sorted = posts.filter((post) =>
        post.category.includes(sortProperty)
      );
      setFilteredData(sorted);
    },
    [posts]
  );

  useEffect(() => {
    window.document.title = "dribbbleo";
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await api.get("/posts");
    setPosts(data);
    setFilteredData(data);
  };

  const sortTypes = ["art", "illustration", "other"];
  if (!filteredData.length) return <Loading />;
  return (
    <div>
      <Header />
      {!user && <MainSection />}
      <ul>
        {sortTypes.map((type, i) => (
          <li key={i}>
            <button onClick={() => changeSort(type)}>{type}</button>
          </li>
        ))}
      </ul>
      {filteredData.length ? (
        <Posts data={filteredData} user={user} />
      ) : (
        <p>nenhum post ainda =(</p>
      )}
    </div>
  );
}

export default Home;

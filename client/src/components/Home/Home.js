import React, { useEffect, useState, useCallback } from "react";
import { Header, MainSection, Posts } from "../";
import Loading from "../Loading/Loading";
import api from "../../api";
import useAuth from "../../hooks/useAuth";
import { FilterList, ListItem } from "./StyledFilter";
import { NoPost } from "./NoPosts";

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
        branding: "branding",
        mobile: "mobile",
        web: "web design",
        all: "all",
      };
      const sortProperty = map[type];
      if (sortProperty === "all") return setFilteredData(posts);
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

  const sortTypes = [
    "all",
    "art",
    "illustration",
    "branding",
    "mobile",
    "web design",
  ];
  if (!posts.length) return <Loading />;
  return (
    <div>
      <Header />
      {!user && <MainSection />}
      <FilterList>
        {sortTypes.map((type, i) => (
          <ListItem key={i} onClick={() => changeSort(type)}>
            {type}
          </ListItem>
        ))}
      </FilterList>
      {filteredData.length ? (
        <Posts data={filteredData} user={user} />
      ) : (
        <NoPost />
      )}
    </div>
  );
}

export default Home;

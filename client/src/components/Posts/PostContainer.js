import React, { useState, useEffect, useCallback } from "react";
import { PostsContainer } from "./StyledPost";
import Post from "./Post";

const Posts = ({ data, user }) => {
  const [sortType, setSortType] = useState(user ? "following" : "popular");
  const [filteredData, setFilteredData] = useState([]);

  const changeSort = (sortType) => {
    setSortType(sortType);
  };

  const filterPosts = useCallback(
    (type) => {
      const map = {
        popular: "likes",
        new: "createdAt",
        following: "following",
      };
      const sortProperty = map[type];
      const sorted = data.sort((a, b) => b[sortProperty] - a[sortProperty]);
      console.log(sorted);

      setFilteredData(sorted);
    },
    [data]
  );

  useEffect(() => {
    if (data.length) {
      filterPosts(sortType);
    }
  }, [sortType, filterPosts, data.length]);

  let sortTypes;
  if (user) {
    sortTypes = ["popular", "new", "following"];
  } else {
    sortTypes = ["popular", "new"];
  }
  return (
    <>
      <ul>
        {sortTypes.map((type, i) => (
          <li key={i}>
            <button onClick={() => changeSort(type)}>{type}</button>
          </li>
        ))}
      </ul>
      <PostsContainer>
        {filteredData &&
          filteredData.map((post) => <Post key={post._id} post={post} />)}
      </PostsContainer>
    </>
  );
};

export default Posts;

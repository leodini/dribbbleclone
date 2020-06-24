import React, { createContext, useState, useEffect, useCallback } from "react";
import api from "../api";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);

  const fetchApiData = async (url) => {
    try {
      const { data } = await api.get(url);
      console.log(data);
      apiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postApiData = async (url, dataPost) => {
    try {
      const { data } = await api.post(url, { dataPost });
      console.log(data);
      setApiData([...apiData, data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider value={{ apiData, fetchApiData, postApiData }}>
      {children}
    </DataContext.Provider>
  );
};

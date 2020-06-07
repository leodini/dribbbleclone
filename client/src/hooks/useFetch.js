import { useState, useEffect, useCallback } from "react";
import Proptypes from "prop-types";
import api from "../api";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(url);
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, isError };
};

useFetch.propTypes = {
  url: Proptypes.string,
};

useFetch.defaultProps = {
  url: "",
};

export default useFetch;

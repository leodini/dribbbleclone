import { useState, useEffect, useCallback } from "react";
import Proptypes from "prop-types";
import api from "../api";

const useFetch = (url, isProtected) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ error: false, msg: "" });

  const fetchData = useCallback(async () => {
    if (isProtected && !api.defaults.header["Authorization"]) {
      setIsError({ error: true, msg: "signin to do this" });
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await api.get(url);
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setIsError({ error: true, msg: err });
    }
  }, [url, isProtected]);

  useEffect(() => {
    let mounted = true;
    const abortController = new AbortController();
    fetchData();

    const cleanup = () => {
      mounted = false;
      abortController.abort();
    };

    return cleanup;
  }, [fetchData]);

  return { data, isLoading, isError };
};

useFetch.propTypes = {
  url: Proptypes.string,
  isProtected: Proptypes.bool,
};

useFetch.defaultProps = {
  url: "",
  isProtected: false,
};

export default useFetch;

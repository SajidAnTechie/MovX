import React, { useEffect, useState } from "react";
import apikey from "../../api/apiKey";
import List from "./List";
import { TopRatedgWrapper } from "./style";
import Loader from "../loader/Loader";
import axios from "axios";

const AllTopRatedMovies = () => {
  const [TopRated, setTopRated] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchTopRatedData = async () => {
      try {
        const topRatedData = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`,
          {
            cancelToken: source.token,
          }
        );

        setTopRated(topRatedData.data.results);
        setLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.log(error);
        }
      }
    };

    fetchTopRatedData();

    return () => {
      console.log("Component Unmount");
      source.cancel();
    };
  }, []);

  return (
    <TopRatedgWrapper>
      {Loading && <Loader />}
      {!Loading && <List movieData={TopRated} />}
    </TopRatedgWrapper>
  );
};
export default AllTopRatedMovies;

import React, { useEffect, useState } from "react";
import apikey from "../../api/apiKey";
import List from "./List";
import ErrorPage from "../errorPages";
import Button from "../../utilis/Button";
import { TopRatedgWrapper } from "./style";
import { Pagination } from "../../utilis/style";
import Loader from "../loader/Loader";
import axios from "axios";

const AllTopRatedMovies = () => {
  const [TopRated, setTopRated] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);
  const [active_page, setactive_page] = useState(1);
  const [total_page, settotal_page] = useState("");
  const [total_results, settotal_results] = useState("");

  useEffect(() => {
    setLoading(true);
    let source = axios.CancelToken.source();
    const fetchTopRatedData = async () => {
      try {
        const topRatedData = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=${active_page}`,
          {
            cancelToken: source.token,
          }
        );

        setTopRated(topRatedData.data.results);
        settotal_page(topRatedData.data.total_pages);
        settotal_results(topRatedData.data.total_results);
        setLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError(error);
        }
      }
    };

    fetchTopRatedData();

    return () => {
      console.log("Component Unmount");
      source.cancel();
    };
  }, [active_page]);

  const handleNext = () => {
    if (active_page < total_page) {
      setactive_page(active_page + 1);
    }
  };

  const handlePrevios = () => {
    if (active_page !== 1) setactive_page(active_page - 1);
  };

  return (
    <TopRatedgWrapper>
      {Error && <ErrorPage />}
      {Loading && <Loader />}
      {!Loading && <List movieData={TopRated} totalResuls={total_results} />}
      <Pagination>
        <p>
          Pages: {active_page} / {total_page}
        </p>
        <Button click={handlePrevios}>Previos</Button>
        <Button click={handleNext}>Next</Button>
      </Pagination>
    </TopRatedgWrapper>
  );
};
export default AllTopRatedMovies;

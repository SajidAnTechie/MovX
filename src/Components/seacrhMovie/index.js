import React, { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";
import ErrorPage from "../errorPages";
import Button from "../../utilis/Button";
import { SearchMovieWrapper } from "./style";
import { Pagination } from "../../utilis/style";
import Loader from "../loader/Loader";
import apiKey from "../../api/apiKey";

const SearchMovie = (props) => {
  const [MovieSearchData, setMovieSearchData] = useState([]);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [active_page, setactive_page] = useState(1);
  const [total_page, settotal_page] = useState("");
  const [total_results, settotal_results] = useState("");

  useEffect(() => {
    setLoading(true);
    let source = axios.CancelToken.source();
    const fetchSearchData = async () => {
      let movie_Name = props.match.params.movieName;
      try {
        let ViewData = await axios.get(
          `https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&query=${movie_Name}&language=en-US&page=${active_page}&include_adult=false`,
          {
            cancelToken: source.token,
          }
        );
        setMovieSearchData(ViewData.data.results);
        settotal_page(ViewData.data.total_pages);
        settotal_results(ViewData.data.total_results);
        setLoading(false);
        console.log(ViewData);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError(error);
        }
      }
    };

    fetchSearchData();

    return () => {
      console.log("Component Unmount");
      source.cancel();
    };
  }, [props.match.params.movieName, active_page]);

  const handleNext = () => {
    if (active_page < total_page) {
      setactive_page(active_page + 1);
    }
  };

  const handlePrevios = () => {
    if (active_page !== 1) setactive_page(active_page - 1);
  };

  return (
    <React.Fragment>
      {Error && <ErrorPage />}
      {Loading && <Loader />}
      {!Loading && (
        <SearchMovieWrapper>
          <List
            MovieSearchData={MovieSearchData}
            totalResults={total_results}
            SearchMovieName={props.match.params.movieName}
          />
          <Pagination>
            <p>
              Pages: {active_page} / {total_page}
            </p>
            <Button click={handlePrevios}>Previous</Button>
            <Button click={handleNext}>Next</Button>
          </Pagination>
        </SearchMovieWrapper>
      )}
    </React.Fragment>
  );
};

export default SearchMovie;

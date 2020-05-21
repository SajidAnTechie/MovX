import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorPage from "../errorPages";
import apiKey from "../../api/apiKey";
import SiglePageLoader from "../loader/SinglePageLoader";
import MovieOverView from "./MovieoverView";

const SinglePageMovie = (props) => {
  const [MovieShowData, setMovieShowData] = useState({});
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let source = axios.CancelToken.source();
    const fetchViewData = async () => {
      let movie_id = props.match.params.id;
      try {
        let ViewData = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`,
          {
            cancelToken: source.token,
          }
        );
        setMovieShowData(ViewData.data);
        setLoading(false);
        console.log(ViewData.data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError(error);
        }
      }
    };

    fetchViewData();

    return () => {
      console.log("Component Unmount");
      source.cancel();
    };
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      {Error && <ErrorPage />}
      {Loading && <SiglePageLoader />}
      {!Loading && <MovieOverView MovieShowData={MovieShowData} />}
    </React.Fragment>
  );
};

export default SinglePageMovie;

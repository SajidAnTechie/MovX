import React, { useState, useEffect } from "react";
import axios from "axios";
import apiKey from "../../api/apiKey";
const SinglePageMovie = (props) => {
  const [MovieShowData, setMovieShowData] = useState({});
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
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
          console.log(error);
        }
      }
    };

    fetchViewData();

    return () => {
      console.log("Component Unmount");
      source.cancel();
    };
  }, [props.match.params.id]);
  return <h2>Single Movie Page</h2>;
};

export default SinglePageMovie;

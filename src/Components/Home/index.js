import React, { useState, useEffect } from "react";
import axios from "axios";
import apikey from "../../api/apiKey";
import NowplayingMovie from "./nowplaying";
import { HomeWrapper } from "./style";
import ErrorPage from "../errorPages";

const Home = () => {
  const [NowPlaying, setNowPlaying] = useState([]);
  const [Upcoming, setUpcoming] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  const [Error, setError] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const nowPlayingData = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`
      );

      const upComingData = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`
      );

      const topRatedData = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`
      );

      setNowPlaying(nowPlayingData.data.results.slice(0, 10));
      setUpcoming(upComingData.data.results.slice(0, 10));
      setTopRated(topRatedData.data.results.slice(0, 10));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <HomeWrapper>
      {Error && <ErrorPage />}
      {!Error && (
        <React.Fragment>
          <NowplayingMovie movieData={NowPlaying} />
        </React.Fragment>
      )}
    </HomeWrapper>
  );
};
export default Home;

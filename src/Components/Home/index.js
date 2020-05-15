import React, { useState, useEffect } from "react";
import axios from "axios";
import apikey from "../../api/apiKey";
import Header from "../../utilis/Header";
import ErrorPage from "../error";
import { Container } from "react-bootstrap";

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
      let nowPlayingData = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`
      );

      let upComingData = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`
      );

      let topRatedData = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`
      );

      setNowPlaying(nowPlayingData);
      setUpcoming(upComingData);
      setTopRated(TopRated);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Container>
      {Error && <ErrorPage />}
      {!Error && <Header>Now Playing</Header>}
    </Container>
  );
};
export default Home;

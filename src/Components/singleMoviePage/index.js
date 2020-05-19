import React, { useState, useEffect } from "react";
import axios from "axios";
import { MovieOverview } from "./style";
import ErrorPage from "../errorPages";
import apiKey from "../../api/apiKey";
import { Container } from "react-bootstrap";
import SiglePageLoader from "../loader/SinglePageLoader";
import { AiFillStar } from "react-icons/ai";
import MovieDetails from "./Datails";
import moment from "moment";

const SinglePageMovie = (props) => {
  const [MovieShowData, setMovieShowData] = useState({});
  const [Error, setError] = useState(null);
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

  let filmtime = MovieShowData.runtime;

  var Hours = Math.floor(filmtime / 60);
  var minutes = filmtime % 60;
  let MoviTime = moment(MovieShowData.release_date).format("MMM M Y");

  return (
    <React.Fragment>
      {Error && <ErrorPage />}
      {Loading && <SiglePageLoader />}
      {!Loading && (
        <Container>
          <MovieOverview>
            <div className="box">
              <img
                src={`https://image.tmdb.org/t/p/w500/${MovieShowData.backdrop_path}`}
                alt="Backdrop_image"
              />
            </div>
            <div className="movie_overview">
              <h2>{MovieShowData.title}</h2>
              <p>
                {Hours}hr {minutes}min<span className="ml-1 mr-1">|</span>
                {MoviTime}
              </p>
              <div className="rating">
                <span className="mr-1">
                  <AiFillStar />
                </span>
                {MovieShowData.vote_average}/10 Rating
              </div>
              <h4>Overview</h4>
              <p>{MovieShowData.overview}</p>
              <div className="generes">
                Genres :
                {MovieShowData.genres.map((n, i) => (
                  <span key={i} className="ml-1">
                    {n.name},
                  </span>
                ))}
              </div>
            </div>
          </MovieOverview>
          <MovieDetails movieData={MovieShowData} />
        </Container>
      )}
    </React.Fragment>
  );
};

export default SinglePageMovie;

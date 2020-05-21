import React from "react";
import MovieDetails from "./Details";
import { MovieOverview } from "./style";
import { Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import moment from "moment";

const MovieOverView = ({ MovieShowData }) => {
  let filmtime = MovieShowData.runtime;

  var Hours = Math.floor(filmtime / 60);
  var minutes = filmtime % 60;
  let MoviTime = moment(MovieShowData.release_date).format("MMM M Y");
  return (
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
            {Array.isArray(MovieShowData.genres) &&
              MovieShowData.genres.map((n, i) => (
                <span key={i} className="ml-1">
                  {n.name},
                </span>
              ))}
          </div>
        </div>
      </MovieOverview>
      <MovieDetails movieData={MovieShowData} />
    </Container>
  );
};

export default MovieOverView;

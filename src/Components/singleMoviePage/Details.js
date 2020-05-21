import React from "react";
import { MovieDetails } from "./style";
const Details = ({ movieData }) => {
  return (
    <MovieDetails>
      <div className="box">
        <div className="content">
          <h4>Release Date</h4>
          <p>{movieData.release_date}</p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <h4>Status</h4>
          <p>{movieData.status}</p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <h4>Budget</h4>
          <p>{movieData.budget}</p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <h4>Revenue</h4>
          <p>{movieData.revenue}</p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <h4>Popularity</h4>
          <p>{movieData.popularity}</p>
        </div>
      </div>
    </MovieDetails>
  );
};
export default Details;

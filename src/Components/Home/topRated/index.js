import React from "react";
import Header from "../../../utilis/Header";
import GLobalButton from "../../../utilis/Button";
import { ButtonDiv } from "../style";
import { Link } from "react-router-dom";
import { Container, Col, Card } from "react-bootstrap";
import Slider from "react-slick";

const TopRatedMovies = ({ movieData }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
    ],
  };
  return (
    <Container>
      <Header>Top Rated Movies</Header>
      <Slider {...settings}>
        {movieData.map((movie, index) => {
          return (
            <Col key={index}>
              <Link exact to={`/view/movie/${movie.id}`}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <Card.Body>
                    <h4>{movie.title}</h4>
                    <p>{movie.release_date}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Slider>
      <ButtonDiv>
        <Link exact to="/ToPRated_Movies">
          <GLobalButton>View All Top Rated Movies</GLobalButton>
        </Link>
      </ButtonDiv>
    </Container>
  );
};
export default TopRatedMovies;

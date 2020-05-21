import React from "react";
import Header from "../../utilis/Header";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const List = ({ movieData, totalResults }) => {
  return (
    <Container>
      <Header>Now Playing Movies</Header>
      <p>{totalResults} Movies</p>
      <Row>
        {movieData.map((movie, index) => {
          return (
            <Col key={index} md="3">
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
      </Row>
    </Container>
  );
};
export default List;

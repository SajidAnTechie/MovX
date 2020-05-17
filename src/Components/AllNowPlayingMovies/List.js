import React from "react";
import Header from "../../utilis/Header";
import { Container, Row, Col, Card } from "react-bootstrap";

const List = ({ movieData }) => {
  return (
    <Container>
      <Header>Now Playing Movies</Header>
      <p>{movieData.length} Movies</p>
      <Row>
        {movieData.map((movie, index) => {
          return (
            <Col key={index} md="3">
              <Card>
                {/* <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                /> */}
                <Card.Body>
                  <h4>{movie.title}</h4>
                  <p>{movie.release_date}</p>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default List;

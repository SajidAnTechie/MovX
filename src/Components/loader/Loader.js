import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Header from "../../utilis/Header";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

const LoaderWrapper = styled.div`
  .card {
    border: 0px;
  }
`;

const SkeletonLoader = () => {
  return (
    <LoaderWrapper>
      <Container>
        <Header>
          <Skeleton height={30} width={"100%"} />
        </Header>
        <Row>
          {Array(6)
            .fill()
            .map((item, index) => {
              return (
                <Col md="3" key={index}>
                  <Card>
                    <Card.Body>
                      <Skeleton height={180} width={"100%"} />
                      <br />

                      <Skeleton width={`60%`} />
                      <br />

                      <Skeleton width={`90%`} />
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </LoaderWrapper>
  );
};
export default SkeletonLoader;

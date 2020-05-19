import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../utilis/Header";
import Skeleton from "react-loading-skeleton";

const SkeletonLoader = () => {
  return (
    <Container>
      <Header>
        <Skeleton height={30} width={"100%"} />
      </Header>
      <Row>
        {Array(3)
          .fill()
          .map((n, index) => {
            return (
              <React.Fragment key={index}>
                <Col md="6">
                  <Skeleton height={180} width={"100%"} />
                </Col>
                <Col md="6">
                  <Skeleton height={30} width={"100%"} />
                  <br />
                  <Skeleton width={"100%"} />
                  <br />
                  <Skeleton width={"100%"} />
                  <br />
                  <Skeleton height={100} width={"100%"} />
                  <br />
                  <Skeleton width={"100%"} />
                  <br />
                </Col>
              </React.Fragment>
            );
          })}
      </Row>
    </Container>
  );
};
export default SkeletonLoader;

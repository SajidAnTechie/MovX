import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../utilis/Header";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  const ErrorWrapper = styled.div`
    width: 100%;
    text-align: center;
    p {
      font-size: 15px;
      color: rgb(98, 107, 114);
    }
  `;
  const HomeButton = styled.button`
    width: 67px;
    height: 33px;
    border: 0;
    background-color: rgb(255, 182, 53);
    font-size: 12px;
    border-radius: 6px;
    color: rgb(23, 28, 32);
    font-weight: bold;
    :hover,
    :focus {
      background-color: rgb(232, 170, 60);
      outline: none;
    }
  `;
  return (
    <Container>
      <ErrorWrapper>
        <Header>Network Error</Header>
        <p>It seems like you don't have internet connection</p>
        <Link exact to="/">
          <HomeButton>Home</HomeButton>
        </Link>
      </ErrorWrapper>
    </Container>
  );
};

export default Error;

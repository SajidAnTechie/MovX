import styled from "styled-components";

export const TopRatedgWrapper = styled.div`
  h4 {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    font-size: 1rem;
    font-weight: 600;
    @media (max-width: 700px) {
      font-size: 0.9rem;
    }
  }
  p {
    font-size: 0.9rem;
    color: gray;
    @media (max-width: 700px) {
      font-size: 0.7rem;
    }
  }
  .card {
    border-radius: 7px;
    margin-top: 30px;
    img {
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

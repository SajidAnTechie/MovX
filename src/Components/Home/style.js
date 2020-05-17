import styled from "styled-components";

export const HomeWrapper = styled.div`
  .slick-arrow {
    width: 30px;
    height: 30px;
    background-color: rgb(253, 183, 59);
    border-radius: 50%;
    :hover,
    :focus {
      background-color: rgb(253, 183, 59);
    }
    ::before {
      font-size: 17px;
    }
    @media (max-width: 700px) {
      display: none !important;
    }
  }

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
export const ButtonDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;

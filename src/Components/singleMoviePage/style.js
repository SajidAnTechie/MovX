import styled from "styled-components";

export const MovieOverview = styled.div`
  margin-top: 85px;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(100px, auto);
  grid-gap: 40px;
  grid-auto-flow: dense;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
  h2 {
    font-weight: 600;
    font-size: 25px;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      font-size: 18px;
    }
  }
  img {
    width: 100%;
  }
  .rating {
    margin-top: 20px;
    font-size: 14px;
    margin-bottom: 26px;
    svg {
      color: rgb(253, 183, 59);
    }
  }
  p {
    line-height: 31px;
    font-size: 15px;
    color: rgb(98, 107, 114);
  }
  .generes {
    span {
      color: rgb(98, 107, 114);
    }
  }
`;
export const MovieDetails = styled.div`
  margin-top: 85px;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(100px, auto);
  grid-gap: 40px;
  grid-auto-flow: dense;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  .box {
    border: 1px solid #eee;
    border-radius: 6px;
  }
  .content {
    padding: 12px;
    h4 {
      font-size: 1rem;
      font-weight: 600;
      @media (max-width: 1000px) {
        font-size: 0.9rem;
      }
    }
    p {
      font-size: 0.9rem;
      color: gray;
      @media (max-width: 1000px) {
        font-size: 0.7rem;
      }
    }
  }
`;

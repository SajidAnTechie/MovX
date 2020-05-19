import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 25px;
  h2 {
    font-weight: 600;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      font-size: 1.25rem;
    }
  }
`;
export const ButtonWrapper = styled.button`
  width: 190px;
  height: 50px;
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
  @media (max-width: 1000px) {
    width: 177px;
    height: 45px;
    font-size: 11px;
  }
`;

export const Pagination = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 55px;
  button {
    margin-left: 12px;
  }
`;

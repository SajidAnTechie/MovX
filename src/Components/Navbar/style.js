import styled from "styled-components";

export const NavbarWrapper = styled.div`
  background-color: rgb(253, 183, 59);
  img {
    width: 100px;
  }
  a {
    color: rgb(23, 28, 32) !important;
    position: relative;
    margin-right: 26px;
  }
  .active {
    font-weight: 700;
    :before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      top: 100%;
      left: 0px;
      border: 1px solid;
    }
  }
  form {
    background-color: #fff;
    border-radius: 100px;
    padding: 0 13px;
    @media (max-width: 700px) {
      flex-flow: row !important;
      margin-top: 20px;
    }

    input {
      border: 0;
      font-size: 0.875rem;
      :focus {
        box-shadow: none;
      }
    }
  }
`;

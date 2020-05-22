import React from "react";
import styled from "styled-components";

const Footer = () => {
  const FooterWrapper = styled.div`
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    color: black;
    margin-top: 49px;
    font-weight: 700;

    span {
      font-size: 15px;
      color: rgb(98, 107, 114);
    }
  `;
  return (
    <FooterWrapper>
      Made By :&nbsp; <span>Sajid Ansari</span>
    </FooterWrapper>
  );
};
export default Footer;

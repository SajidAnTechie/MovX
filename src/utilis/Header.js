import React from "react";
import { HeaderWrapper } from "./style";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <h2>{props.children}</h2>
    </HeaderWrapper>
  );
};
export default Header;

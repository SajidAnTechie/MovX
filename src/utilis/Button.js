import React from "react";
import { ButtonWrapper } from "./style";

const Button = (props) => {
  return <ButtonWrapper type="button">{props.children}</ButtonWrapper>;
};

export default Button;

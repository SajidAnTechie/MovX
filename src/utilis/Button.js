import React from "react";
import { ButtonWrapper } from "./style";

const GLobalButton = (props) => {
  return (
    <ButtonWrapper onClick={props.click} type="button">
      {props.children}
    </ButtonWrapper>
  );
};

export default GLobalButton;

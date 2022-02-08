import React from "react";
import { ButtonSel } from "./SelectButton.styled";

const SelectButton = ({ children, id, ...rest }) => {
  return (
    <ButtonSel id={id} {...rest}>
      {children}
    </ButtonSel>
  );
};
export default SelectButton;

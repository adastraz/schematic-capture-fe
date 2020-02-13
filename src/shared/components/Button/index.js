import React from "react";

import { StyledButton } from "./Styles";

const Button = ({ text, ...rest }) => {
  return <StyledButton {...rest}>{text}</StyledButton>;
};

export default Button;

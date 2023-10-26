import React from "react";
import { TitleIconProps } from "./utils";
import { TitleIconWrapper } from "./Dashboard.styled";

const TitleIcon: React.FC<TitleIconProps> = ({ children }) => {
  return <TitleIconWrapper>{children}</TitleIconWrapper>;
};

export default TitleIcon;

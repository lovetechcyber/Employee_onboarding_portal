import React, { ReactNode } from "react";
import { ModalWrapper } from "./MyTeam.styled";

const Modal: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ModalWrapper>{children}</ModalWrapper>;
};

export default Modal;

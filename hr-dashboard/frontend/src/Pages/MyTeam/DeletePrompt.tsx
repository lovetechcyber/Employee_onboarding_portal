import React from "react";
import { DeleteBtnsWrapper, NoBtn, YesBtn } from "./MyTeam.styled";

const DeletePrompt = () => {
  return (
    <div>
      <span>Are you sure you want to delete {}</span>
      <DeleteBtnsWrapper>
        <YesBtn />
        <NoBtn />
      </DeleteBtnsWrapper>
    </div>
  );
};

export default DeletePrompt;

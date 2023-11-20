import React from "react";
import {
  DeleteBtnsWrapper,
  DeletePromptWrapper,
  NoBtn,
  YesBtn,
} from "./MyTeam.styled";
import { DeleteBtnsProps } from "./utils";
import { Link } from "react-router-dom";

const DeletePrompt: React.FC<DeleteBtnsProps> = ({
  onClickYes,
  onClickNo,
  detail,
}) => {
  return (
    <DeletePromptWrapper>
      <span>Are you sure you want to delete {detail}?</span>
      <DeleteBtnsWrapper>
        <Link to="#" state={null}>
          <YesBtn onClick={onClickYes} />
        </Link>
        <NoBtn onClick={onClickNo} />
      </DeleteBtnsWrapper>
    </DeletePromptWrapper>
  );
};

export default DeletePrompt;

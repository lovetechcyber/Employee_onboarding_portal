import React from "react";
import { btnTexts, getCurrentFormattedDate } from "./utils";
import Button from "../../Components/Button";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  BtnChildren,
  BtnsWrapper,
  DashboardTopWrapper,
  Greeting,
  TopBtn,
} from "./Dashboard.styled";

const DashboardTop = () => {
  return (
    <DashboardTopWrapper>
      <Greeting>
        <h1>GOOD AFTERNOON, MICHAEL</h1>
        <span>{getCurrentFormattedDate()}</span>
      </Greeting>
      <BtnsWrapper>
        {btnTexts.map((text) => (
          <TopBtn
            key={text}
            children={
              <BtnChildren>
                <AiFillPlusCircle />
                <span>{text}</span>
              </BtnChildren>
            }
          />
        ))}
      </BtnsWrapper>
    </DashboardTopWrapper>
  );
};

export default DashboardTop;

import React from "react";
import { OnTheClockCardProps } from "./utils";
import {
  OnTheClockCardWrapper,
  OnTheClockCardTop,
  OnTheClockCardBottom,
} from "./Dashboard.styled";

const OnTheClockCard: React.FC<OnTheClockCardProps> = ({
  name,
  duration,
  perPeriodTotal,
}) => {
  return (
    <OnTheClockCardWrapper>
      <OnTheClockCardTop>
        <span>{name}</span>
        <span>{duration}</span>
      </OnTheClockCardTop>
      <OnTheClockCardBottom>
        <span>Per Period Total</span>
        <span>{perPeriodTotal}</span>
      </OnTheClockCardBottom>
    </OnTheClockCardWrapper>
  );
};

export default OnTheClockCard;

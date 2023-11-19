import React, { useEffect, useState } from "react";
import TitleIcon from "./TitleIcon";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import {
  ClockInBtn,
  DurationsWrapper,
  MyTimeBody,
  MyTimeBodyCenter,
  MyTimeBodyLeft,
  MyTimeBodyRight,
  MyTimeBottom,
  MyTimeTop,
  MyTimeWrapper,
} from "./Dashboard.styled";
import {
  getCurrentFormattedDate,
  getCurrentFormattedDayAndYear,
  getCurrentFormattedTime,
  totals,
} from "./utils";
import { TextArea } from "../../Components/FormFields";

const MyTime = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const setTime = () => {
      setCurrentTime(getCurrentFormattedTime());
    };
    const interval = setInterval(setTime, 1000);

    () => {
      return clearInterval(interval);
    };
  }, []);
  return (
    <MyTimeWrapper>
      <MyTimeTop>
        <h2>MY TIME</h2>
        <IoIosArrowForward />
        <TitleIcon children={<FaRegCalendarDays />} />
      </MyTimeTop>
      <MyTimeBody>
        <MyTimeBodyLeft>
          <span>Totals</span>
          {totals.map((item) => (
            <DurationsWrapper key={item.title}>
              <span>{item.title}</span>
              <span>{item.duration}</span>
            </DurationsWrapper>
          ))}
          <span className="view-edit">View/Edit Timecard</span>
        </MyTimeBodyLeft>
        <MyTimeBodyCenter></MyTimeBodyCenter>
        <MyTimeBodyRight>
          <span>{getCurrentFormattedDate().split(",")[0]}</span>
          <span>{getCurrentFormattedDayAndYear()}</span>
          <span>{currentTime}</span>
          <TextArea placeholder="Enter notes here" />
          <ClockInBtn children="CLOCK IN" />
        </MyTimeBodyRight>
      </MyTimeBody>
    </MyTimeWrapper>
  );
};

export default MyTime;

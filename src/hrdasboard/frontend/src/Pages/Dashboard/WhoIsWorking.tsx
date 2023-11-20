import React from "react";
import {
  Divider,
  EmployeesOnTheClock,
  MyTimeTop,
  Title,
  WhoIsWorkingBody,
  WhoIsWorkingWrapper,
} from "./Dashboard.styled";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import TitleIcon from "./TitleIcon";
import { onTheClockData } from "./DashboardData";
import OnTheClockCard from "./OnTheClockCard";

const WhoIsWorking = () => {
  return (
    <WhoIsWorkingWrapper>
      <MyTimeTop>
        <h2>WHO'S WORKING</h2>
        <IoIosArrowForward />
        <TitleIcon children={<FaRegCalendarCheck />} />
      </MyTimeTop>
      <WhoIsWorkingBody>
        <Title>
          <span>ALL EMPLOYEES</span>
          <span>ON THE CLOCK</span>
        </Title>
        <Divider></Divider>
        <EmployeesOnTheClock>
          {onTheClockData.map((data) => (
            <OnTheClockCard
              key={data.name}
              name={data.name}
              duration={data.duration}
              perPeriodTotal={data.perPeriodTotal}
            />
          ))}
        </EmployeesOnTheClock>
      </WhoIsWorkingBody>
    </WhoIsWorkingWrapper>
  );
};

export default WhoIsWorking;

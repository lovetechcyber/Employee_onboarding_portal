import React, { useState } from "react";
import {
  Divider,
  Indicator,
  IndicatorsWrapper,
  MyTimeTop,
  TimeOffBottom,
  TimeOffWrapper,
} from "./Dashboard.styled";
import TitleIcon from "./TitleIcon";
import { LuClock9 } from "react-icons/lu";
import TimeOffRequestCard from "./TimeOffRequestCard";
import { timeOffRequests } from "./DashboardData";
import { TimeOffRequestCardProps } from "./utils";

const TimeOff = () => {
  const [currentRequest, setCurrentRequest] = useState<TimeOffRequestCardProps>(
    timeOffRequests[0]
  );
  return (
    <TimeOffWrapper>
      <MyTimeTop>
        <h2>TIME OFF</h2>
        <TitleIcon children={<LuClock9 />} />
      </MyTimeTop>
      <span className="time-off">Time Off</span>
      <span className="view">View All Requests</span>
      <Divider></Divider>
      <TimeOffBottom>
        <TimeOffRequestCard
          name={currentRequest.name}
          date={currentRequest.date}
          request={currentRequest.request}
          duration={currentRequest.duration}
        />
        <IndicatorsWrapper>
          {timeOffRequests.map((request) => (
            <Indicator
              key={request.name}
              $cursor={request === currentRequest ? "not-allowed" : "pointer"}
              $width={request === currentRequest ? "0.8rem" : "0.5rem"}
              $height={request === currentRequest ? "1rem" : "0.5rem"}
              $bgColor={request === currentRequest ? "rgb(30 58 138)" : "grey"}
              onClick={() => setCurrentRequest(request)}
            ></Indicator>
          ))}
        </IndicatorsWrapper>
      </TimeOffBottom>
    </TimeOffWrapper>
  );
};

export default TimeOff;

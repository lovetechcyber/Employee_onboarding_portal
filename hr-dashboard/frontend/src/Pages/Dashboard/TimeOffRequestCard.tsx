import React from "react";
import { TimeOffRequestCardProps } from "./utils";
import {
  TimeOffRequestCardWrapper,
  TimeOffRequestTop,
  ApprovalBtnsWrapper,
  AddTaskBtn,
  TimeOffRequestBottom,
} from "./Dashboard.styled";

const TimeOffRequestCard: React.FC<TimeOffRequestCardProps> = ({
  name,
  date,
  request,
  duration,
}) => {
  return (
    <TimeOffRequestCardWrapper>
      <TimeOffRequestTop>
        <span>{name}</span>
        <ApprovalBtnsWrapper>
          <AddTaskBtn children="APPROVE" />
          <AddTaskBtn children="DENY" />
        </ApprovalBtnsWrapper>
      </TimeOffRequestTop>
      <TimeOffRequestBottom>
        <span>{date}</span>
        <span>{request}</span>
        <span>{duration}</span>
      </TimeOffRequestBottom>
    </TimeOffRequestCardWrapper>
  );
};

export default TimeOffRequestCard;

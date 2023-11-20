import React from "react";
import { EmptyTeamProp } from "./utils";
import { EmptyTeamWrapper } from "./MyTeam.styled";

const EmptyTeam: React.FC<EmptyTeamProp> = ({ teamName }) => {
  return (
    <EmptyTeamWrapper>
      <p>You have no {teamName} team member invitations in process</p>
    </EmptyTeamWrapper>
  );
};

export default EmptyTeam;

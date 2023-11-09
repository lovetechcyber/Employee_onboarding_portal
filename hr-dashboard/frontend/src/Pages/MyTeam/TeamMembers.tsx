import React from "react";
import TeamMembersCard from "./TeamMembersCard";
import { OnboardingTeamMembersWrapper } from "./MyTeam.styled";
import { TeamMembersProps } from "./utils";

const TeamMembers: React.FC<TeamMembersProps> = ({ allTeamMembers }) => {
  return (
    <OnboardingTeamMembersWrapper>
      {allTeamMembers.map((member) => (
        <TeamMembersCard
          key={member.email}
          avatar={member.avatar}
          name={member.name}
          position={member.position}
          email={member.email}
          phoneNumber={member.phoneNumber}
        />
      ))}
    </OnboardingTeamMembersWrapper>
  );
};

export default TeamMembers;

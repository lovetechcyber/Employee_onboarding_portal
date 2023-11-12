import React from "react";
import { onBoardingMembers } from "./MyTeamData";
import OnBoardingTeamMemberCard from "./OnBoardingTeamMemberCard";
import { OnboardingTeamMembersWrapper } from "./MyTeam.styled";
import EmptyTeam from "./EmptyTeam";

const OnboardingTeamMembers = () => {
  return (
    <>
      {onBoardingMembers.length > 0 ? (
        <OnboardingTeamMembersWrapper>
          {onBoardingMembers.map((member) => (
            <OnBoardingTeamMemberCard
              key={member.email}
              name={member.name}
              email={member.email}
              phoneNumber={member.phoneNumber}
            />
          ))}
        </OnboardingTeamMembersWrapper>
      ) : (
        <EmptyTeam teamName="onboarding" />
      )}
    </>
  );
};

export default OnboardingTeamMembers;

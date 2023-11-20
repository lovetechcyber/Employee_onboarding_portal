import React from "react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { TeamCardProps } from "./utils";
import { MdGroups2 } from "react-icons/md";
import { IconWrapper, TeamCardWrapper } from "./MyTeam.styled";

const TeamCard: React.FC<TeamCardProps> = ({
  clicked,
  index,
  title,
  showActive,
  onClick,
  toggleShowActive,
}) => {
  return (
    <TeamCardWrapper onClick={() => index !== 3 && onClick(index)}>
      <span>{title}</span>
      {index !== 3 ? (
        clicked ? (
          <HiMinusSm className="plus-minus" />
        ) : (
          <HiPlusSm className="plus-minus" />
        )
      ) : (
        <span className="see" onClick={toggleShowActive}>
          SEE {showActive ? "INACTIVE" : "ACTIVE"}{" "}
        </span>
      )}
      <IconWrapper $blue={index === 3}>
        <MdGroups2 />
      </IconWrapper>
    </TeamCardWrapper>
  );
};

export default TeamCard;

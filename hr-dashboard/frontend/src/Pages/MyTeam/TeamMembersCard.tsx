import React from "react";
import {
  TeamMembersCardWrapper,
  TeamMemberAvatarWrapper,
  TeamMemberBody,
  TeamMemberBodyLeft,
  TeamMemberBodyRight,
  ContactDetailWrapper,
  Position_ProfileLink,
} from "./MyTeam.styled";
import { TeamMemberProps } from "./utils";
import { Link } from "react-router-dom";
import { HiDocumentText } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BiKey } from "react-icons/bi";

const TeamMembersCard: React.FC<TeamMemberProps> = ({
  avatar,
  email,
  name,
  phoneNumber,
  position,
}) => {
  return (
    <TeamMembersCardWrapper>
      <TeamMemberAvatarWrapper $bgImg={avatar!}></TeamMemberAvatarWrapper>
      <TeamMemberBody>
        <TeamMemberBodyLeft>
          <span className="name">{name}</span>
          <Position_ProfileLink>
            <span>{position}</span>
            <Link
              to="#"
              state={{ name, avatar, email, phoneNumber, position }}
            >
              Profile
            </Link>
          </Position_ProfileLink>
        </TeamMemberBodyLeft>
        <TeamMemberBodyRight>
          <ContactDetailWrapper>
            <MdEmail /> <span>{email}</span>
          </ContactDetailWrapper>
          <ContactDetailWrapper>
            <BsTelephoneFill /> <span>{phoneNumber}</span>
          </ContactDetailWrapper>
          <ContactDetailWrapper>
            <HiDocumentText /> <span>Goal Tracking</span>
          </ContactDetailWrapper>
          <ContactDetailWrapper className="delete-container">
            <BiKey /> <span className="delete">Reset Password</span>
          </ContactDetailWrapper>
        </TeamMemberBodyRight>
      </TeamMemberBody>
    </TeamMembersCardWrapper>
  );
};

export default TeamMembersCard;

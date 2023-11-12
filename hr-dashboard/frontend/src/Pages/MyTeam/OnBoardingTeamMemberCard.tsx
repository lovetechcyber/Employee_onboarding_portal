import React from "react";
import { IoIosPerson } from "react-icons/io";
import { onBoardingMemberDocs } from "./MyTeamData";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillWarning } from "react-icons/ai";
import { MdEmail, MdClear } from "react-icons/md";
import { BsTelephoneFill, BsFillCheckCircleFill } from "react-icons/bs";
import { OnboardingMemberProps } from "./utils";
import {
  OnboardingCardWrapper,
  MemberAvatarWrapper,
  MemberDetailsWrapper,
  MemberDetailsLeft,
  MemberDetailsRight,
  OnBoardingMemberDocsWrapper,
  ContactDetailWrapper,
} from "./MyTeam.styled";

const OnBoardingTeamMemberCard: React.FC<OnboardingMemberProps> = ({
  avatar,
  email,
  name,
  phoneNumber,
}) => {
  return (
    <OnboardingCardWrapper>
      <MemberAvatarWrapper>{!avatar && <IoIosPerson />}</MemberAvatarWrapper>
      <MemberDetailsWrapper>
        <MemberDetailsLeft>
          <span className="name">{name}</span>
          {onBoardingMemberDocs.map((item) => (
            <OnBoardingMemberDocsWrapper key={item}>
              {item === "Employer 1-9" ? (
                <AiFillWarning className="warn" />
              ) : (
                <BsFillCheckCircleFill className="check" />
              )}
              <span>{item}</span>
            </OnBoardingMemberDocsWrapper>
          ))}
        </MemberDetailsLeft>
        <MemberDetailsRight>
          <ContactDetailWrapper>
            <MdEmail />
            <span>{email}</span>
          </ContactDetailWrapper>
          <ContactDetailWrapper>
            <BsTelephoneFill />
            <span>{phoneNumber}</span>
          </ContactDetailWrapper>
          <ContactDetailWrapper className="delete-container">
            <MdClear />
            <span className="delete">Delete</span>
          </ContactDetailWrapper>
        </MemberDetailsRight>
      </MemberDetailsWrapper>
    </OnboardingCardWrapper>
  );
};

export default OnBoardingTeamMemberCard;

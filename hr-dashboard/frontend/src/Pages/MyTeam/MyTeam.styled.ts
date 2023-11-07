import styled from "styled-components";
import { InputField } from "../../Components/FormFields";
import Button from "../../Components/Button";
import {
  IconWrapperProp,
  SearchBtnsProps,
  TeamMemberAvatarProp,
} from "./utils";

export const MyTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 6rem;
  padding: 1rem;
`;

export const SearchInput = styled(InputField).attrs({ type: "search" })`
  border: 1px solid #d7d8de;
  color: #000;
  padding: 0 0.5rem;

  &:focus {
    outline: none;
  }
`;

export const SearchBtns = styled(Button)<SearchBtnsProps>`
  background: ${({ $bgColor }) => $bgColor};
  color: ${({ $textColor }) => $textColor};
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
`;

export const MyTeamTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-left: 6px solid rgb(30 58 138);
`;
export const MyTeamTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  color: grey;
`;
export const MyTeamTopRight = styled.form`
  display: flex;
  gap: 0.2rem;
`;

export const CTABtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-left: auto;
`;

export const TeamCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 4rem;
  width: 99%;
  background: #f5f5f5;
  padding: 0 1rem 0 4rem;
  border-radius: 0.2rem;
  color: grey;
  border: 1px solid #d7d8de;
  margin-left: auto;
  cursor: pointer;

  .plus-minus {
    font-size: 1.5rem;
  }

  .see {
    color: rgb(30 58 138);
  }
`;

export const IconWrapper = styled.div<IconWrapperProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${({ $blue }) => ($blue ? "#327FFF" : "#d54d1e")};
  position: absolute;
  top: auto;
  left: -2rem;
  color: #fff;
  font-size: 2.5rem;
`;

export const TeamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  gap: 2rem;
  align-items: center;
`;

export const OnboardingCardWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const MemberAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  border: 3px solid #d7d8de;
  font-size: 7rem;
  color: grey;
  svg {
  }
`;

export const MemberDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: auto;
  // border:solid red;
  // align-items: center;
  // gap:55%;
`;
export const MemberDetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  .name {
    border-bottom: 1px solid #d7d8de;
    width: 15rem;
  }
`;
export const MemberDetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 15rem;
  // border:1px solid red;

  .delete-container {
    cursor: pointer;

    svg {
      font-weight: 700;
    }
  }
`;

export const OnboardingTeamMembersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-width: 0 1px 1px 1px;
  border-style: none solid solid solid;
  border-color: #d7d8de;
  padding: 2rem;
  gap: 1rem;
`;

export const EachTeamContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const OnBoardingMemberDocsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  span {
    color: rgb(30 58 138);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .check {
    fill: green;
  }

  .warn {
    fill: #d54d1e;
  }
`;

export const ContactDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  span {
    color: rgb(30 58 138);
  }

  .delete {
    color: crimson;
  }

  svg {
    fill: grey;
  }
`;

export const EmptyTeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid #d7d8de;
  border-top: none;
  padding: 2rem 0;
  color: grey;
`;

export const TeamMembersCardWrapper = styled.div`
  display: flex;
  gap: 2rem;
  // border: 1px solid red;
`;

export const TeamMemberAvatarWrapper = styled.div<TeamMemberAvatarProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: 100% 100%;
  border-radius: 50%;
`;

export const TeamMemberBody = styled.div`
  display: flex;
  align-items: center;
  width: 86%;
  margin-left: auto;
  // border:1px solid red;
`;
export const TeamMemberBodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: rgb(30 58 138);
    width: fit-content;

    &:hover {
      text-decoration: underline;
    }
  }

  .name {
    border-bottom: 1px solid #d7d8de;
    width: 15rem;
  }
`;
export const TeamMemberBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  width: 15rem;
  // border:1px solid red;

  .delete-container {
    cursor: pointer;
  }
`;

export const Position_ProfileLink = styled.div`
  display: flex;
  flex-direction: column;
`;

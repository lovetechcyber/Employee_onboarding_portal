import React, { useEffect, useState } from "react";
import {
  CTABtnsWrapper,
  EachTeamContent,
  MyTeamTop,
  MyTeamTopLeft,
  MyTeamTopRight,
  MyTeamWrapper,
  SearchBtns,
  SearchInput,
  TeamsWrapper,
} from "./MyTeam.styled";
import {
  ctaBtnsText,
  inactiveTeamMembers,
  searchBtnsText,
  teamMembers,
} from "./MyTeamData";
import { AddTaskBtn, BtnChildren } from "../Dashboard/Dashboard.styled";
import { AiFillPlusCircle } from "react-icons/ai";
import TeamCard from "./TeamCard";
import OnboardingTeamMembers from "./OnboardingTeamMembers";
import PendingIVTeamMembers from "./PendingIVTeamMembers";
import DraftTeamMembers from "./DraftTeamMembers";
import TeamMembers from "./TeamMembers";
import { allTeamMembers } from "./MyTeamData";
import { TeamMemberProps } from "./utils";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import TeamMemberForm from "./TeamMemberForm";

const Team = () => {
  const location = useLocation();
  const [indexes, setIndexes] = useState<number[]>([3]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [showActiveEmployees, setShowActiveEmployees] = useState<boolean>(true);
  const [displayedMembers, setDisplayedMembers] = useState<TeamMemberProps[]>([
    ...allTeamMembers,
  ]);
  const [openModal, setOpenModal] = useState(false);

  const addIndexToArr = (num: number) => {
    !indexes.includes(num)
      ? setIndexes((prevIndexes) => [...prevIndexes, num])
      : setIndexes((prevIndexes) =>
          prevIndexes.filter((index) => index !== num)
        );
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleToggleActive = () => {
    setShowActiveEmployees((prev) => !prev);
  };

  useEffect(() => {
    displayedMembers === allTeamMembers
      ? setDisplayedMembers(
          (prevMembers) => (prevMembers = [...inactiveTeamMembers])
        )
      : setDisplayedMembers(allTeamMembers);
    location.state ? setOpenModal(true) : setOpenModal(false);
  }, [showActiveEmployees, location.state]);

  return (
    <MyTeamWrapper>
      <MyTeamTop>
        <MyTeamTopLeft>
          <span>DUNDER MIFFLIN</span>
          <span>Michael Scott</span>
        </MyTeamTopLeft>
        <MyTeamTopRight>
          <SearchInput
            onChange={handleSearchInputChange}
            value={searchValue}
            required
          />
          {searchBtnsText.map((text) => (
            <SearchBtns
              key={text}
              children={text}
              $bgColor={text === "SEARCH" ? "#327FFF" : "#f5f5f5"}
              $textColor={text === "SEARCH" ? "#fff" : "grey"}
              type={text === "SEARCH" ? "submit" : "button"}
              onClick={() => text === "CLEAR" && setSearchValue("")}
            />
          ))}
        </MyTeamTopRight>
      </MyTeamTop>
      <CTABtnsWrapper>
        {ctaBtnsText.map((text) => (
          <AddTaskBtn
            key={text}
            children={
              <BtnChildren>
                {text === "ADD EMPLOYEE" && <AiFillPlusCircle />}
                <span>{text}</span>
              </BtnChildren>
            }
          />
        ))}
      </CTABtnsWrapper>
      <TeamsWrapper>
        {teamMembers.map((team, index) => (
          <EachTeamContent key={team}>
            <TeamCard
              title={team}
              clicked={indexes.includes(index)}
              onClick={() => addIndexToArr(index)}
              index={index}
              showActive={showActiveEmployees}
              toggleShowActive={handleToggleActive}
            />
            {indexes.includes(index) ? (
              index === 0 ? (
                <OnboardingTeamMembers />
              ) : index === 1 ? (
                <PendingIVTeamMembers />
              ) : index === 2 ? (
                <DraftTeamMembers />
              ) : index === 3 ? (
                <TeamMembers allTeamMembers={[...displayedMembers]} />
              ) : null
            ) : null}
          </EachTeamContent>
        ))}
      </TeamsWrapper>
      {openModal && <Modal children={<TeamMemberForm />} />}
    </MyTeamWrapper>
  );
};

export default Team;

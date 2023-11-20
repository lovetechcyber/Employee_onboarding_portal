import React, { useState } from "react";
import DashboardTop from "./DashboardTop";
import MyTime from "./MyTime";
import { DashboardWrapper, DashboardBody } from "./Dashboard.styled";
import Tasks from "./Tasks";
import TimeOff from "./TimeOff";
import WhoIsWorking from "./WhoIsWorking";
import CompanyLinks from "./CompanyLinks";
import Modal from "../MyTeam/Modal";
import TeamMemberForm from "../MyTeam/TeamMemberForm";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const clickAddEmployee = (btnText: string) => {
    btnText === "ADD EMPLOYEE" && setOpenModal(true);
  };
  return (
    <DashboardWrapper className="">
      <DashboardTop onClick={(text: string) => clickAddEmployee(text)} />
      <DashboardBody>
        <MyTime />
        <Tasks />
        <TimeOff />
        <WhoIsWorking />
        <CompanyLinks />
      </DashboardBody>
      {openModal && (
        <Modal
          children={
            <TeamMemberForm register onClickLink={() => setOpenModal(false)} />
          }
        />
      )}
    </DashboardWrapper>
  );
};

export default Dashboard;

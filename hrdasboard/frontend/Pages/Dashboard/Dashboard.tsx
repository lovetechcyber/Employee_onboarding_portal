import React from "react";
import DashboardTop from "./DashboardTop";
import MyTime from "./MyTime";
import { DashboardWrapper, DashboardBody } from "./Dashboard.styled";
import Tasks from "./Tasks";
import TimeOff from "./TimeOff";
import WhoIsWorking from "./WhoIsWorking";
import CompanyLinks from "./CompanyLinks";

const Dashboard = () => {
  return (
    <DashboardWrapper className="">
      <DashboardTop />
      <DashboardBody>
        <MyTime />
        <Tasks />
        <TimeOff />
        <WhoIsWorking />
        <CompanyLinks />
      </DashboardBody>
    </DashboardWrapper>
  );
};

export default Dashboard;

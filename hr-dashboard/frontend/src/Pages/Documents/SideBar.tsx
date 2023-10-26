import React from "react";
import { sideBarData } from "./DocumentsData";
import { SideBarWrapper, SideBarTitle } from "./Documents.styled";
import { SideBarProps } from "./utils";

const SideBar: React.FC<SideBarProps> = ({ activeLink, onClick }) => {
  return (
    <SideBarWrapper>
      {sideBarData.map((data) => (
        <SideBarTitle
          $bgColor={data === activeLink ? "rgb(30 58 138)" : ""}
          $color={data === activeLink ? "#fff" : "rgb(30 58 138)"}
          onClick={() => onClick(data)}
        >
          {data}
        </SideBarTitle>
      ))}
    </SideBarWrapper>
  );
};

export default SideBar;

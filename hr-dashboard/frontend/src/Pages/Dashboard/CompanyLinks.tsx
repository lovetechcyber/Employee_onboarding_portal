import React from "react";
import {
  AddTaskBtn,
  CompanyLinksWrapper,
  LinksList,
  MyTimeTop,
  StyledLinkIcon,
} from "./Dashboard.styled";
import TitleIcon from "./TitleIcon";
import { companyLinks } from "./DashboardData";
import { Link } from "react-router-dom";

const CompanyLinks = () => {
  return (
    <CompanyLinksWrapper>
      <MyTimeTop>
        <h2>COMPANY LINKS</h2>
        <TitleIcon children={<StyledLinkIcon />} />
      </MyTimeTop>
      <LinksList>
        {companyLinks.map((link) => (
          <li>
            <Link to={link.route}>{link.title}</Link>
          </li>
        ))}
      </LinksList>
      <AddTaskBtn children="ADD NEW UPDATE" />
    </CompanyLinksWrapper>
  );
};

export default CompanyLinks;

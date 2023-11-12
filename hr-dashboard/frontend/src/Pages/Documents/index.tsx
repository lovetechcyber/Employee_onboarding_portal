import React, { useEffect, useState } from "react";
import {
  DocumentsBody,
  DocumentsBodyRight,
  DocumentsTop,
  DocumentsWrapper,
  Headings,
} from "./Documents.styled";
import SideBar from "./SideBar";
import { DocumentProps } from "./utils";
import {
  companyDocuments,
  employeeEligibilityDocs,
  employeeInfoDocs,
} from "./DocumentsData";
import DocumentCard from "./DocumentCard";
import { AddTaskBtn, BtnChildren } from "../Dashboard/Dashboard.styled";
import { AiFillPlusCircle } from "react-icons/ai";

const Documents = () => {
  const [active, setActive] = useState<string>("Company Documents");
  const [displayedDocs, setDisplayedDocs] = useState<DocumentProps[]>([
    ...companyDocuments,
  ]);

  useEffect(() => {
    active === "Employee Information Documents"
      ? setDisplayedDocs([...employeeInfoDocs])
      : active === "Employee Eligibility Documents"
      ? setDisplayedDocs([...employeeEligibilityDocs])
      : setDisplayedDocs([...companyDocuments]);
  }, [active]);
  return (
    <DocumentsWrapper>
      <DocumentsTop>
        <span>DOCUMENTS</span>
        <span>Michael Scott</span>
      </DocumentsTop>
      <DocumentsBody>
        <SideBar
          onClick={(text: string) => setActive(text)}
          activeLink={active}
        />
        <DocumentsBodyRight>
          <AddTaskBtn
            children={
              <BtnChildren>
                <AiFillPlusCircle />
                <span>NEW DOCUMENT</span>
              </BtnChildren>
            }
          />
          <Headings>
            <span>Date</span>
            <span className="document">Document</span>
            <span>Type</span>
          </Headings>
          {displayedDocs.map((doc) => (
            <DocumentCard
              key={doc.docName}
              date={doc.date}
              docName={doc.docName}
              docType={doc.docType}
            />
          ))}
        </DocumentsBodyRight>
      </DocumentsBody>
    </DocumentsWrapper>
  );
};

export default Documents;

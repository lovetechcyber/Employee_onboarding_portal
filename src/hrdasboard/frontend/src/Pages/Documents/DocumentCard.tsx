import React from "react";
import { DocumentProps } from "./utils";
import { FaEdit } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { RiDeleteBinFill } from "react-icons/ri";
import { DocumentCardWrapper, IconsWrapper } from "./Documents.styled";

const DocumentCard: React.FC<DocumentProps> = ({ date, docName, docType }) => {
  return (
    <DocumentCardWrapper>
      <span>{date}</span>
      <span>{docName}</span>
      <span>{docType}</span>
      <IconsWrapper>
        {docType !== "handbook" && <FaEdit />}
        {docType !== "handbook" && <BsFillSendFill />}
        <RiDeleteBinFill />
      </IconsWrapper>
    </DocumentCardWrapper>
  );
};

export default DocumentCard;

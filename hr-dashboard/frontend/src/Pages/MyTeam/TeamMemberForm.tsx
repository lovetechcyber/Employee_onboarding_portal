import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { InputField } from "../../Components/FormFields";
import { TeamMemberProps } from "./utils";
import { userFormLabels } from "./MyTeamData";
import {
  CloseIcon,
  DeleteButton,
  EditButton,
  FormBtnsWrapper,
  TeamMemberAvatarWrapper,
  TeamMemberFormLabel,
  TeamMemberRegForm,
  TeamMemberRegFormWrapper,
} from "./MyTeam.styled";

const TeamMemberForm = () => {
  const location = useLocation();
  const userDetails = location.state;
  const [details, setDetails] = useState<TeamMemberProps>({
    name: "",
    avatar: "",
    email: "",
    phoneNumber: "",
    position: "",
  });
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [btnText, setBtnText] = useState<string>("Edit");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]:
        name === "avatar" && files && files[0]
          ? URL.createObjectURL(files[0])
          : value,
    }));
    name === "avatar" && files && files[0] && setProfilePic(files[0]);
  };

  const handleToggleBtnText = () => {
    setBtnText((prevBtnText) => (prevBtnText === "Edit" ? "Update" : "Edit"));
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(btnText === "Edit");
    btnText === "Edit" && console.log("submitted");
  };

  useEffect(() => {
    userDetails && setDetails(userDetails);
  }, [userDetails]);
  const names = Object.keys(details);
  const values = Object.values({ ...details, avatar: "" });
  console.log(btnText);

  return (
    <TeamMemberRegFormWrapper>
      <TeamMemberAvatarWrapper
        $bgImg={details?.avatar!}
      ></TeamMemberAvatarWrapper>
      <Link to="/team" state={null}>
        <CloseIcon />
      </Link>
      <TeamMemberRegForm onSubmit={handleSubmitForm}>
        {userFormLabels.map((text, index) => (
          <TeamMemberFormLabel htmlFor={text} key={text}>
            <span>{text}</span>
            <InputField
              id={text}
              name={names[index]}
              value={index === 1 && profilePic ? "" : values[index]}
              onChange={handleInputChange}
              type={
                index === 1
                  ? "file"
                  : index === 2
                  ? "email"
                  : index === 3
                  ? "tel"
                  : "text"
              }
            />
          </TeamMemberFormLabel>
        ))}
        <FormBtnsWrapper>
          <EditButton children={btnText} onClick={handleToggleBtnText} />
          <DeleteButton />
        </FormBtnsWrapper>
      </TeamMemberRegForm>
    </TeamMemberRegFormWrapper>
  );
};

export default TeamMemberForm;

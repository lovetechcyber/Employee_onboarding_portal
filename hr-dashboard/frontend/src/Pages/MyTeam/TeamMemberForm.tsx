import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { InputField } from "../../Components/FormFields";
import { TeamMemberFormProps, TeamMemberProps } from "./utils";
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
import DeletePrompt from "./DeletePrompt";

const TeamMemberForm: React.FC<TeamMemberFormProps> = ({
  deleteMember,
  updateMember,
}) => {
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
  const [showDeletePrompt, setShowDeletePrompt] = useState<boolean>(false);

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
    btnText === "Update" && updateMember(details);
  };

  const handlePressEnter = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter" && btnText === "Update") {
      updateMember(details);
    }
  };

  // const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(btnText === "Edit");
  //   btnText === "Edit" && console.log("submitted");
  // };

  useEffect(() => {
    userDetails && setDetails(userDetails);
  }, [userDetails]);
  const names = Object.keys(details);
  const values = Object.values({ ...details, avatar: "" });

  return (
    <TeamMemberRegFormWrapper>
      <TeamMemberAvatarWrapper
        $bgImg={details?.avatar!}
      ></TeamMemberAvatarWrapper>
      <Link to="/team" state={null}>
        <CloseIcon />
      </Link>
      <TeamMemberRegForm onKeyDown={handlePressEnter}>
        {userFormLabels.map((text, index) => (
          <TeamMemberFormLabel
            $inputColor={btnText === "Edit" ? "#B0B0B0" : ""}
            htmlFor={text}
            key={text}
          >
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
              disabled={btnText === "Edit"}
            />
          </TeamMemberFormLabel>
        ))}
        <FormBtnsWrapper>
          <EditButton
            children={btnText}
            type="button"
            onClick={handleToggleBtnText}
          />
          <DeleteButton onClick={() => setShowDeletePrompt(true)} />
          {showDeletePrompt && (
            <DeletePrompt
              detail={details.name}
              onClickYes={() => deleteMember(details.email)}
              onClickNo={() => setShowDeletePrompt(false)}
            />
          )}
        </FormBtnsWrapper>
      </TeamMemberRegForm>
    </TeamMemberRegFormWrapper>
  );
};

export default TeamMemberForm;

export interface SearchBtnsProps {
  $bgColor: string;
  $textColor: string;
}

export interface TeamCardProps {
  title: string;
  clicked: boolean;
  onClick: (index: number) => void;
  index: number;
  showActive: boolean;
  toggleShowActive: () => void;
}

export interface OnboardingMemberProps {
  name: string;
  email: string;
  avatar?: string;
  phoneNumber: string;
}

export interface EmptyTeamProp {
  teamName: string;
}

export interface IconWrapperProp {
  $blue: boolean;
}

export interface TeamMemberProps {
  avatar?: string;
  name: string;
  position: string;
  email: string;
  phoneNumber: string;
}

export interface TeamMemberAvatarProp {
  $bgImg: string;
}

export interface TeamMembersProps {
  allTeamMembers: TeamMemberProps[];
}

export interface DeleteBtnsProps {

}

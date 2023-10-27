import { OnboardingMemberProps, TeamMemberProps } from "./utils";

export const searchBtnsText: string[] = ["SEARCH", "CLEAR"];

export const ctaBtnsText: string[] = [
  "ADD EMPLOYEE",
  "EXPORT CSV",
  "IMPORT CSV",
];

export const teamMembers: string[] = [
  "ONBOARDING TEAM MEMBERS",
  "PENDING INVITATION TEAM MEMBERS",
  "DRAFT TEAM MEMBERS",
  "TEAM MEMBERS",
];

export const onBoardingMemberDocs: string[] = [
  "Offer Letter",
  "W4",
  "Employee 1-9",
  "Employer 1-9",
];

export const onBoardingMembers: OnboardingMemberProps[] = [
  {
    name: "Andy Bernard",
    email: "matt+andy@ergoayroll.com",
    phoneNumber: "08038161542",
  },
  {
    name: "Michael Scott",
    email: "matt+michael@ergoayroll.com",
    phoneNumber: "08038161543",
  },
  {
    name: "Dwight Schrute",
    email: "matt+dwight@ergoayroll.com",
    phoneNumber: "08038161544",
  },
  {
    name: "Jim Halpert",
    email: "matt+jim@ergoayroll.com",
    phoneNumber: "08038161545",
  },
  {
    name: "Pam Beesly",
    email: "matt+pam@ergoayroll.com",
    phoneNumber: "08038161546",
  },
  {
    name: "Ryan Howard",
    email: "matt+ryan@ergoayroll.com",
    phoneNumber: "08038161547",
  },
  {
    name: "Angela Martin",
    email: "matt+angela@ergoayroll.com",
    phoneNumber: "08038161548",
  },
  {
    name: "Oscar Martinez",
    email: "matt+oscar@ergoayroll.com",
    phoneNumber: "08038161549",
  },
  {
    name: "Stanley Hudson",
    email: "matt+stanley@ergoayroll.com",
    phoneNumber: "08038161550",
  },
  {
    name: "Kelly Kapoor",
    email: "matt+kelly@ergoayroll.com",
    phoneNumber: "08038161551",
  },
];
// .filter((item) => item === null);

export const allTeamMembers: TeamMemberProps[] = [
  {
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "John Doe",
    position: "Software Engineer",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
  },
  {
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Alice Johnson",
    position: "UI/UX Designer",
    email: "alice.j@example.com",
    phoneNumber: "987-654-3210",
  },
  {
    avatar:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Bob Smith",
    position: "Product Manager",
    email: "bob.smith@example.com",
    phoneNumber: "555-123-4567",
  },
  {
    avatar:
      "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Eva Brown",
    position: "Marketing Specialist",
    email: "eva.brown@example.com",
    phoneNumber: "111-222-3333",
  },
  {
    avatar:
      "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Michael Johnson",
    position: "Backend Developer",
    email: "michael.j@example.com",
    phoneNumber: "999-888-7777",
  },
  {
    avatar:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Olivia Wilson",
    position: "Frontend Developer",
    email: "olivia.w@example.com",
    phoneNumber: "444-555-6666",
  },
  {
    avatar:
      "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Daniel White",
    position: "Data Analyst",
    email: "daniel.w@example.com",
    phoneNumber: "777-999-0000",
  },
  {
    avatar:
      "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Sophia Lee",
    position: "QA Engineer",
    email: "sophia.l@example.com",
    phoneNumber: "333-111-4444",
  },
  {
    avatar:
      "https://images.pexels.com/photos/2589650/pexels-photo-2589650.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Liam Harris",
    position: "DevOps Engineer",
    email: "liam.h@example.com",
    phoneNumber: "666-222-8888",
  },
  {
    avatar:
      "https://images.pexels.com/photos/1441151/pexels-photo-1441151.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Ava Clark",
    position: "Graphic Designer",
    email: "ava.c@example.com",
    phoneNumber: "222-444-6666",
  },
];

export const inactiveTeamMembers: TeamMemberProps[] = [
  {
    avatar:
      "https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Emma Davis",
    position: "Software Developer",
    email: "emma.d@example.com",
    phoneNumber: "111-222-3333",
  },
  {
    avatar:
      "https://images.pexels.com/photos/64385/pexels-photo-64385.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Liam Wilson",
    position: "UI Designer",
    email: "liam.w@example.com",
    phoneNumber: "444-555-6666",
  },
  {
    avatar:
      "https://images.pexels.com/photos/4429279/pexels-photo-4429279.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Ava Jackson",
    position: "Project Manager",
    email: "ava.j@example.com",
    phoneNumber: "777-888-9999",
  },
  {
    avatar:
      "https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Noah Martinez",
    position: "Frontend Developer",
    email: "noah.m@example.com",
    phoneNumber: "222-333-4444",
  },
  {
    avatar:
      "https://images.pexels.com/photos/1370719/pexels-photo-1370719.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Olivia Anderson",
    position: "Marketing Coordinator",
    email: "olivia.a@example.com",
    phoneNumber: "555-666-7777",
  },
  {
    avatar:
      "https://images.pexels.com/photos/1484801/pexels-photo-1484801.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "William Lee",
    position: "Backend Developer",
    email: "william.l@example.com",
    phoneNumber: "888-999-0000",
  },
  {
    avatar:
      "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Sophia Taylor",
    position: "Data Scientist",
    email: "sophia.t@example.com",
    phoneNumber: "333-444-5555",
  },
  {
    avatar:
      "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Jackson Harris",
    position: "Technical Support",
    email: "jackson.h@example.com",
    phoneNumber: "666-777-8888",
  },
  {
    avatar:
      "https://images.pexels.com/photos/3772519/pexels-photo-3772519.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Aria Parker",
    position: "UX Designer",
    email: "aria.p@example.com",
    phoneNumber: "999-000-1111",
  },
  {
    avatar:
      "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Logan Adams",
    position: "Software Engineer",
    email: "logan.a@example.com",
    phoneNumber: "111-222-3333",
  },
];

// Now the 'teamMembers2' array contains another 10 objects based on the TeamMemberProps interface.

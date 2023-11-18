import { ReactNode } from "react";

export const getCurrentFormattedDate = (): string => {
  const daysOfWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate: Date = new Date();
  const dayOfWeek: string = daysOfWeek[currentDate.getDay()];
  const month: string = months[currentDate.getMonth()];
  const day: number = currentDate.getDate();
  const suffix: string = getNumberSuffix(day);

  return `${dayOfWeek}, ${month} ${day}${suffix}`;
};

function getNumberSuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export const btnTexts: string[] = ["ADD EMPLOYEE", "NEW ANNOUNCEMENT"];

export interface TitleIconProps {
  children: ReactNode;
}

export const totals: { title: string; duration: string }[] = [
  { title: "current", duration: "0h 0m" },
  { title: "day", duration: "0h 0m" },
  { title: "week", duration: "0h 0m" },
];

export const getCurrentFormattedDayAndYear = (): string => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate: Date = new Date();
  const month: string = months[currentDate.getMonth()];
  const day: number = currentDate.getDate();
  const year: number = currentDate.getFullYear();

  return `${month} ${day}, ${year}`;
};

export function getCurrentFormattedTime(): string {
  const currentDate: Date = new Date();
  const hours: number = currentDate.getHours();
  const minutes: number = currentDate.getMinutes();
  const seconds: number = currentDate.getSeconds();

  const formattedHours: string = padZero(hours);
  const formattedMinutes: string = padZero(minutes);
  const formattedSeconds: string = padZero(seconds);

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padZero(num: number): string {
  return num < 10 ? `0${num}` : num.toString();
}

export interface TaskProps {
  task: string;
  dueDate: string;
}

export interface TimeOffRequestCardProps {
  name: string;
  date: string;
  request: string;
  duration: string;
}

export interface OnTheClockCardProps {
  name: string;
  duration: string;
  perPeriodTotal: string;
}

export interface CompanyLinksProps {
  title: string;
  route: string;
}

export interface DashBoardTopProps {
  onClick: (text: string) => void;
}

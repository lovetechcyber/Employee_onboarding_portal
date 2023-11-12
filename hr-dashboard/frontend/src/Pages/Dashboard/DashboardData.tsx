import {
  CompanyLinksProps,
  OnTheClockCardProps,
  TaskProps,
  TimeOffRequestCardProps,
} from "./utils";

export const tasks: TaskProps[] = [
  { task: "Complete 1-9 for Andy", dueDate: "06/20/23" },
];

export const timeOffRequests: TimeOffRequestCardProps[] = [
  {
    name: "Dwight Schrute",
    date: "07/03/2023",
    request: "Full-Time PTO",
    duration: "24 hours",
  },
  {
    name: "Michael Scott",
    date: "07/04/2023",
    request: "Half-Day PTO",
    duration: "4 hours",
  },
  {
    name: "Pam Beesly",
    date: "07/05/2023",
    request: "Vacation Leave",
    duration: "2 days",
  },
  {
    name: "Jim Halpert",
    date: "07/06/2023",
    request: "Sick Leave",
    duration: "8 hours",
  },
  {
    name: "Angela Martin",
    date: "07/07/2023",
    request: "Full-Time PTO",
    duration: "24 hours",
  },
  {
    name: "Oscar Martinez",
    date: "07/08/2023",
    request: "Half-Day PTO",
    duration: "4 hours",
  },
  {
    name: "Kevin Malone",
    date: "07/09/2023",
    request: "Vacation Leave",
    duration: "3 days",
  },
  {
    name: "Stanley Hudson",
    date: "07/10/2023",
    request: "Sick Leave",
    duration: "8 hours",
  },
  {
    name: "Meredith Palmer",
    date: "07/11/2023",
    request: "Full-Time PTO",
    duration: "24 hours",
  },
  {
    name: "Ryan Howard",
    date: "07/12/2023",
    request: "Half-Day PTO",
    duration: "4 hours",
  },
];

export const onTheClockData: OnTheClockCardProps[] = [
  {
    name: "Dwight Schrute",
    duration: "1 hour 44 minutes",
    perPeriodTotal: "1 hour 44 minutes",
  },
  {
    name: "Michael Scott",
    duration: "2 hours 30 minutes",
    perPeriodTotal: "2 hours 30 minutes",
  },
  {
    name: "Pam Beesly",
    duration: "3 hours 15 minutes",
    perPeriodTotal: "3 hours 15 minutes",
  },
  {
    name: "Jim Halpert",
    duration: "1 hour 10 minutes",
    perPeriodTotal: "1 hour 10 minutes",
  },
  {
    name: "Angela Martin",
    duration: "2 hours 5 minutes",
    perPeriodTotal: "2 hours 5 minutes",
  },
  {
    name: "Oscar Martinez",
    duration: "2 hours 50 minutes",
    perPeriodTotal: "2 hours 50 minutes",
  },
  {
    name: "Kevin Malone",
    duration: "3 hours 20 minutes",
    perPeriodTotal: "3 hours 20 minutes",
  },
  {
    name: "Stanley Hudson",
    duration: "1 hour 30 minutes",
    perPeriodTotal: "1 hour 30 minutes",
  },
  {
    name: "Meredith Palmer",
    duration: "2 hours 15 minutes",
    perPeriodTotal: "2 hours 15 minutes",
  },
  {
    name: "Ryan Howard",
    duration: "1 hour 55 minutes",
    perPeriodTotal: "1 hour 55 minutes",
  },
];

export const companyLinks: CompanyLinksProps[] = [
  { title: "Payroll Login", route: "#" },
  { title: "Benefits Login", route: "#" },
  { title: "Company Website", route: "#" },
  { title: "Paycheck Advance Request", route: "#" },
];

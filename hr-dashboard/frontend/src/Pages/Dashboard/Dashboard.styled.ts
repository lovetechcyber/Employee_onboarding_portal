import styled from "styled-components";
import Button from "../../Components/Button";
import { GrLink } from "react-icons/gr";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const DashboardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  justify-content: space-between;
  gap: 4rem;
`;

export const DashboardTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;

export const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 4px solid rgb(30 58 138);
  padding: 1rem;
  color: grey;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TopBtn = styled(Button)`
  display: flex;
  background: #f2f2f2;
  color: grey;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  height: fit-content;
  font-size: 0.875rem;
`;

export const BtnChildren = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TitleIconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: auto;
  left: -1rem;
  font-size: 2.5rem;
  background: rgb(30 58 138);
  color: #fff;
`;

export const MyTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  border: 1px solid #f5f5f5;
  gap: 1rem;
  padding-bottom: 2rem;
`;
export const MyTimeTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 1rem 5rem;
  position: relative;
  background: #f5f5f5;
`;

export const MyTimeBody = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
`;

export const MyTimeBodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: space-between;

  .view-edit {
    color: blue;
  }
`;

export const DurationsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const MyTimeBodyCenter = styled.div`
  width: 1px;
  height: 100%;
  background: grey;
`;

export const MyTimeBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 0.2rem;
  align-items: center;

  textarea {
    border: 1px solid grey;
    border-radius: 0.2rem;
    padding: 0.5rem;
  }

  textarea:focus {
    outline: none;
  }
`;

export const MyTimeBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem 1rem;
`;

export const ClockInBtn = styled(Button)`
  background: green;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  border: 1px solid #f5f5f5;
  gap: 1rem;
`;

export const TaskCardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const TaskCardLeft = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    cursor: pointer;
  }

  span {
    color: blue;
  }
`;

export const TasksBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
`;
export const TasksBodyTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AddTaskBtn = styled(Button)`
  margin: auto auto 1rem 1rem;
  background: #f5f5f5;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  color: grey;
`;

export const EachTask = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  input {
    cursor: pointer;
  }

  span {
    font-size: 0.875rem;
    color: blue;
  }
`;

export const TimeOffWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 47%;
  border: 1px solid #f5f5f5;

  .time-off {
    margin-left: 1rem;
  }

  .view {
    margin: 0 1rem 0 auto;
    color: blue;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f5f5f5;
`;

export const TimeOffRequestCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0.5rem;
`;

export const TimeOffRequestTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;
export const TimeOffRequestBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

export const ApprovalBtnsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: fit-content;
`;

export const TimeOffBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const IndicatorsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Indicator = styled.div<{
  $bgColor: string;
  $width: string;
  $height: string;
  $cursor: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $width }) => $width};
  background: ${({ $bgColor }) => $bgColor};
  border-radius: 50%;
  cursor: ${({ $cursor }) => $cursor};
`;

export const WhoIsWorkingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 47%;
  border: 1px solid #f5f5f5;
`;

export const WhoIsWorkingBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 0.5rem;
`;

export const OnTheClockCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const OnTheClockCardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const OnTheClockCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
  font-size: 0.875rem;
`;

export const EmployeesOnTheClock = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
  overflow: auto;
  gap: 0.5rem;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & span:nth-child(2) {
    color: #008080;
    font-weight: 700;
  }
`;

export const CompanyLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  gap: 1rem;
  border: 1px solid #f5f5f5;
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: blue;
  margin-left: 1rem;
`;

export const StyledLinkIcon = styled(GrLink)`
  color: #fff;
  fill: #fff;
  transform: rotate(-90deg);
  transform-origin: center;

  & path {
    stroke: #fff;
  }
`;

export const ChatIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: rgb(30 58 138);
  border-radius: 50%;
  color: #fff;
  font-size: 2rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

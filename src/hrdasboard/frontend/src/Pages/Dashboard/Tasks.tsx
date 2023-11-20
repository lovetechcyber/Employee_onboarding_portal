import React from "react";
import {
  AddTaskBtn,
  Divider,
  MyTimeTop,
  TasksBody,
  TasksBodyTop,
  TasksList,
  TasksWrapper,
} from "./Dashboard.styled";
import TitleIcon from "./TitleIcon";
import { FiCheckSquare } from "react-icons/fi";
import { tasks } from "./DashboardData";
import TaskCard from "./TaskCard";

const Tasks: React.FC = () => {
  return (
    <TasksWrapper>
      <MyTimeTop>
        <TitleIcon>
          <FiCheckSquare />
        </TitleIcon>
        <span>TASKS</span>
      </MyTimeTop>
      <TasksBody>
        <TasksBodyTop>
          <span>Open Tasks</span>
          <span>Due Date</span>
        </TasksBodyTop>
        <TasksList>
          {tasks.map((task) => (
            <TaskCard key={task.task} task={task.task} dueDate={task.dueDate} />
          ))}
        </TasksList>
      </TasksBody>
      <Divider></Divider>
      <AddTaskBtn children="ADD NEW TASK" />
    </TasksWrapper>
  );
};

export default Tasks;

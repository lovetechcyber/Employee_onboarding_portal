import React from "react";
import { InputField } from "../../Components/FormFields";
import { TaskCardWrapper, TaskCardLeft } from "./Dashboard.styled";
import { TaskProps } from "./utils";

const TaskCard: React.FC<TaskProps> = ({ task, dueDate }) => {
  return (
    <TaskCardWrapper>
      <TaskCardLeft>
        <InputField type="checkbox" />
        <span>{task}</span>
      </TaskCardLeft>
      <span>{dueDate}</span>
    </TaskCardWrapper>
  );
};

export default TaskCard;

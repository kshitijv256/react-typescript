import React from "react";
import { Task } from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

export const TaskList = (props: Props) => {
  return (
    <>
      {props.tasks.map((task, idx) => (
        <Task
          key={idx}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
        />
      ))}
    </>
  );
};

import React from "react";

interface AppProps {
  title: string;
  dueDate: string;
  completedAtDate: string;
  assigneeName: string;
  done: boolean;
}

const TaskCard = (props: AppProps) => {
  let label: string;
  if (props.dueDate) {
    label = `Due on: ${props.dueDate}`;
  } else {
    label = `Completed on: ${props.completedAtDate}`;
  }
  return (
    <div className="task-card border-4 px-3 py-2 border-sky-500 bg-slate-800 rounded w-full text-gray-200">
      <h2 className="font-semibold py-1 text-cyan-400">{props.title}</h2>
      <p>{label}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;

import { Task } from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteCB: (idx: number) => void;
}

export const TaskList = (props: Props) => {
  return (
    <>
      {props.tasks.map((task, idx) => (
        <li className="list-none" key={idx}>
          <Task
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
          />
          <button
            id="deleteTaskButton"
            className="deleteTaskButton bg-red-400 rounded-md text-white text-sm px-2 py-1.5"
            onClick={() => props.deleteCB(idx)}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

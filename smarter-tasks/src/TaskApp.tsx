import React from "react";
import { TaskItem } from "./types";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

interface TaskAppProp {
  title?: string;
}
interface TaskAppState {
  tasks: TaskItem[];
}
const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = React.useState<TaskAppState>({
    tasks: [],
  });
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-md mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-300 bg-gray-100  rounded-xl p-4">
          <h1 className="text-slate-500 font-bold text-center mb-8">Pending</h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;

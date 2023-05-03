import { TaskItem } from "./types";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {
  title?: string;
}
interface TaskAppState {
  tasks: TaskItem[];
}
const TaskApp = (props: TaskAppProp) => {
  if (props.title) {
    document.title = props.title;
  }
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  const deleteTask = (idx: number) => {
    setTaskAppState({
      tasks: taskAppState.tasks.filter((_, index) => index !== idx),
    });
  };

  return (
    <div className="container py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-md mb-6 text-slate-600 text-center">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-start-2 col-end-4 border border-slate-300 bg-gray-100  rounded-xl p-4">
          <h1 className="text-slate-500 font-bold text-center mb-8">Pending</h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} deleteCB={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;

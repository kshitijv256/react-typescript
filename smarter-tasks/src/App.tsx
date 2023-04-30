import React from "react";
import reactLogo from "./assets/react.svg";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  return (
    <div className="text-blue-800 text-xl w-full flex flex-col justify-center items-center gap-4">
      <img src={reactLogo} className="h-16 w-16" alt="" />
      <TaskForm />
      <TaskList tasks={[]} />
    </div>
  );
}

export default App;

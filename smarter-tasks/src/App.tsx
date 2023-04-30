import React from "react";
import reactLogo from "./assets/react.svg";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="text-blue-800 text-xl">
      <img src={reactLogo} className="h-16 w-16" alt="" />
      <TaskList />
    </div>
  );
}

export default App;

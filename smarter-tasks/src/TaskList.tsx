import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

interface State {
  tasks: TaskItem[];
}

class TaskList extends React.Component<Props, State> {
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        key={idx}
      />
    ));
  }
}

export default TaskList;

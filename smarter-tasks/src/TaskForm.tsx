import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  inputRef = React.createRef<HTMLInputElement>();
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (
      this.state.title.trim().length === 0 ||
      this.state.dueDate.trim().length === 0
    ) {
      console.log("Title or DueDate is empty");
      return;
    }
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
  };
  render() {
    return (
      <form
        onSubmit={this.addTask}
        className="flex flex-col gap-1 w-full items-start text-slate-600"
      >
        <label htmlFor="todoTitle">Title</label>
        <input
          type="text"
          id="todoTitle"
          className="rounded w-full px-1 py-2"
          value={this.state.title}
          onChange={this.titleChanged}
          ref={this.inputRef}
          required
        />
        <label htmlFor="todoDescription">Description</label>
        <input
          type="text"
          id="todoDescription"
          className="rounded w-full px-1 py-2"
          value={this.state.description}
          onChange={(event) => {
            console.log(`${event.target.value}`);
            this.setState({ description: event.target.value });
          }}
        />
        <label htmlFor="todoDueDate">DueDate</label>
        <input
          type="date"
          id="todoDueDate"
          className="rounded w-full px-1 py-2"
          required
          value={this.state.dueDate}
          onChange={(event) => {
            console.log(`${event.target.value}`);
            this.setState({ dueDate: event.target.value });
          }}
        />
        <button
          type="submit"
          id="addTaskButton"
          className="p-2 mt-2 bg-blue-400 rounded text-white"
        >
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;

import React from "react";
interface TaskFormProps {}
interface TaskFormState {
  title: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.titleChanged}
        />
        <button type="submit">Add item</button>
      </form>
    );
  }
}
export default TaskForm;

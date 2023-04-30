import React from "react";
interface TaskFormProps {}
interface TaskFormState {}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
  }
  render() {
    return <div>Task form</div>;
  }
}
export default TaskForm;

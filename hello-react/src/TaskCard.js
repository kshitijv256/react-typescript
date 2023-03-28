const TaskCard = (props) => {
  let label;
  if (props.dueDate) {
    label = `Due on: ${props.dueDate}`;
  } else {
    label = `Completed on: ${props.completedAtDate}`;
  }
  return (
    <div className="task-card border-2 px-3 py-2 border-gray-700 rounded w-full">
      <h2 className="font-semibold py-1">{props.title}</h2>
      <p>{label}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;

const TaskCard = (props) => {
  let label;
  if (props.status === "pending") {
    label = "Due on:";
  } else {
    label = "Completed on:";
  }
  return (
    <div className="task-card border-2 px-3 py-2 border-gray-700 rounded w-full">
      <h2 className="font-semibold py-1">{props.title}</h2>
      <p>
        {label} {props.date}
      </p>
      <p>Assignee: {props.assignee}</p>
    </div>
  );
};

export default TaskCard;

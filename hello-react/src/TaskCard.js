const TaskCard = (props) => {
  let label;
  if (props.dueDate) {
    label = `Due on: ${props.dueDate}`;
  } else {
    label = `Completed on: ${props.completedAtDate}`;
  }
  return (
    <div className="task-card border-4 px-3 py-2 border-sky-300 bg-slate-600 rounded w-full text-gray-200">
      <h2 className="font-semibold py-1 text-cyan-400">{props.title}</h2>
      <p>{label}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;

import TaskCard from "./TaskCard";

const Block = (props) => {
  return (
    <div className="border-2 border-gray-600 rounded-xl p-6 my-10 flex flex-col items-center gap-4 min-w-[30vw] pb-20">
      <h2 className="font-semibold text-gray-600 text-xl">{props.block.title}</h2>
      {props.children}
    </div>
  );
}


function App() {
  return (
    <div className="App w-full flex items-center justify-center">
      <div className="flex flex-col w-4/5">
        <h1 className="font-bold text-3xl my-3">Smarter Tasks</h1>
        <p className="text-gray-700"><b>Project: </b>Graduation Final Year Project (Revamp College Website)</p>
        <div className="flex flex-row gap-10">
          <Block block={{title: "Pending"}}>
            <TaskCard title="Build the website with static content" date="29th March" assignee="Amit" status="pending" />
            <TaskCard title="Add a blog" date="22nd March" assignee="Rohit A" status="pending" />
            <div className="bg-gray-300 text-gray-700 px-2 py-1 w-full rounded">
              + New Task
            </div>
          </Block>
          <Block block={{title: "Done"}}>
          <TaskCard title="Design the mockup" date="10th April" assignee="Rohit A" status="done" />
          <TaskCard title="Get the approval from principal" date="26th April" assignee="Ankita" status="done" />
          </Block>
        </div>
      </div>
    </div>
  );
}
export default App;

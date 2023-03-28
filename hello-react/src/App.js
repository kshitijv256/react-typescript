import TaskCard from "./TaskCard";

const Block = (props) => {
  return (
    <div className="border-4 bg-slate-700 border-sky-500 rounded-xl p-6 my-10 flex flex-col items-center gap-4 min-w-[30vw] pb-20">
      <h2 className="font-semibold text-cyan-400 text-2xl">
        {props.block.title}
      </h2>
      {props.children}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="w-full h-full bg-slate-600 flex items-center justify-center">
        <div className="flex flex-col w-4/5">
          <h1 className="font-bold text-3xl my-3 text-cyan-400">Smarter Tasks</h1>
          <p className="text-gray-100">
            <b>Project: </b>Graduation Final Year Project (Revamp College
            Website)
          </p>
          <div className="flex flex-row gap-10">
            <Block block={{ title: "Pending" }}>
              <TaskCard
                title="Build the website with static content"
                dueDate="29th March"
                assigneeName="Amit"
              />
              <TaskCard
                title="Add a blog"
                dueDate="22nd March"
                assigneeName="Rohit A"
              />
              <div className="bg-gray-800 text-cyan-500 px-2 py-1 w-full rounded">
                + New Task
              </div>
            </Block>
            <Block block={{ title: "Done" }}>
              <TaskCard
                title="Design the mockup"
                completedAtDate="10th April"
                assigneeName="Rohit A"
                status="done"
              />
              <TaskCard
                title="Get the approval from principal"
                completedAtDate="26th April"
                assigneeName="Ankita"
                status="done"
              />
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

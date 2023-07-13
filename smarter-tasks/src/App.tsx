import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <div>
      {/* {!open && <Header />} */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

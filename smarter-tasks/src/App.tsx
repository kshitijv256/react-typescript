import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useContext } from "react";
import { ThemeContext } from "./context/theme";

function App() {
  const currentTheme = useContext(ThemeContext);
  return (
    <div className={currentTheme.theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

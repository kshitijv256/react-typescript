import { useLocation } from "react-router-dom";

import Header from "./pages/shared/Header";
import Router from "./router/Router";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/signin" && location.pathname !== "/notfound" && (
        <Header />
      )}
      <Router />
    </div>
  );
}

export default App;

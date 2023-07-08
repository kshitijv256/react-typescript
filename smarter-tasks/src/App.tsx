import { useLocation } from "react-router-dom";

import Header from "./Header";
import Router from "./router/Router";

function App() {
  const location = useLocation();
  const open = ["/signin", "/signup", "notfound"].includes(location.pathname);
  return (
    <div>
      {!open && <Header />}
      <Router />
    </div>
  );
}

export default App;

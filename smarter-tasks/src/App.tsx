import Header from "./pages/shared/Header";
import Router from "./router/Router";

function App() {
  const isAuth = !!localStorage.getItem("authToken");

  return (
    <div>
      {isAuth && <Header />}
      <Router />
    </div>
  );
}

export default App;

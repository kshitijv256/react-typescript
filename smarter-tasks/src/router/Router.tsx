import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute";
import HomePage from "../HomePage";
import TaskApp from "../pages/tasks/TaskApp";
import TaskDetailsPage from "../pages/tasks/TaskDetailsPage";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import NotFound from "../NotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
      <Route path="/tasks" element={<ProtectedRoute element={<TaskApp />} />} />
      <Route
        path="/tasks/:id"
        element={<ProtectedRoute element={<TaskDetailsPage />} />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={<Dashboard />} />}
      />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
}

export default Router;

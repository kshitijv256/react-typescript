import React, { Suspense } from "react";
const ProjectDetails = React.lazy(() => import("./ProjectDetails"));
import { TasksProvider } from "../../context/task/context";
import ErrorBoundary from "../../components/ErrorBoundary";

import { Outlet } from "react-router-dom";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <TasksProvider>
            <ProjectDetails />
            <Outlet />
          </TasksProvider>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ProjectDetailsIndex;

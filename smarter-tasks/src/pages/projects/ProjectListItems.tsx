import { Link } from "react-router-dom";
import { useProjectsState } from "../../context/projects/context";
import { Project, ProjectsState } from "../../context/projects/reducer";

export default function ProjectListItems() {
  const state: ProjectsState = useProjectsState() as ProjectsState;

  const { projects, isLoading, isError, errorMessage } = state;

  if (projects.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }
  return (
    <>
      {projects.map((project: Project) => (
        <Link
          key={project.id}
          to={`${project.id}`}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
        </Link>
      ))}
    </>
  );
}

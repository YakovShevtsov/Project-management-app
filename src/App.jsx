import EmptyProjectsList from "./components/EmptyProjectsList";
import NewProjectForm from "./components/NewProjectForm";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [projectsList, setProjectsList] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsList((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = () => {};

  const handleSelectProject = (id) => {
    setProjectsList((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleStartAddProjects = () => {
    setProjectsList((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsList((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAddNewProject = (projectData) => {
    setProjectsList((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsList((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => {
          return project.id !== prevState.selectedProjectId;
        }),
      };
    });
  };

  const selectedProject = projectsList.projects.find(
    (project) => project.id === projectsList.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasksList={projectsList.tasks}
    />
  );

  if (projectsList.selectedProjectId === null) {
    content = (
      <NewProjectForm
        onAdd={handleAddNewProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsList.selectedProjectId === undefined) {
    content = <EmptyProjectsList onStartAddProjects={handleStartAddProjects} />;
  }

  return (
    <div className="flex">
      <SideBar
        projectsList={projectsList}
        onStartAddProjects={handleStartAddProjects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsList.selectedProjectId}
      />
      {content}
    </div>
  );
}

export default App;

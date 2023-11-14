import EmptyProjectsList from "./components/EmptyProjectsList";
import NewProjectForm from "./components/NewProjectForm";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [projectsList, setProjectsList] = useState({selectedProjectId: undefined, 
    projects: []});
  
  const handleSelectProject = (id) => {
    setProjectsList((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  const handleStartAddProjects = () => {
    setProjectsList((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  const handleAddNewProject = (projectData) => {
    setProjectsList(prevState => {
      const newProject = {
        ...projectData,
        id: Date.now()
      };
      return {...prevState, projects: [...prevState.projects, newProject]}
    })
  }


  const selectedProject = projectsList.projects.find(project => project.id === projectsList.selectedProjectId);


  let content = <SelectedProject project={selectedProject}/>;

  if(projectsList.selectedProjectId === null) {
    content = <NewProjectForm onAdd={handleAddNewProject} />;
  } else if (projectsList.selectedProjectId === undefined) {
    content = <EmptyProjectsList onStartAddProjects={handleStartAddProjects}/>;
  }

  return (
    <div className="flex">
      <SideBar projectsList={projectsList} onStartAddProjects={handleStartAddProjects} onSelectProject={handleSelectProject} selectedProjectId={projectsList.selectedProjectId} />
        {content}
    </div>
  );
}

export default App;

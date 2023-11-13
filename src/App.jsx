import EmptyProjectsList from "./components/EmptyProjectsList";
import NewProjectForm from "./components/NewProjectForm";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [projectsList, setProjectsList] = useState({selectedProjectId: undefined, 
    projects: []});

  // const getProjectsList = (newProjectData) => {
  //   setProjectsList((prevProjectsList) => {
  //     return [newProjectData, ...prevProjectsList];
  //   });
  // };

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

  let content;

  if(projectsList.selectedProjectId === null) {
    content = <NewProjectForm onAdd={handleAddNewProject} />;
  } else if (projectsList.selectedProjectId === undefined) {
    content = <EmptyProjectsList onStartAddProjects={handleStartAddProjects}/>;
  }

  return (
    <div className="flex">
      <SideBar projectsList={projectsList} onStartAddProjects={handleStartAddProjects} />
        {content}
        {projectsList.projects.map(item => {
          <p className="text-xl text-red-500">{item.name}</p>
        })}
    </div>
  );
}

export default App;

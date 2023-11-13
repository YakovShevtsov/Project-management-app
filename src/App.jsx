import NewProjectForm from "./components/NewProjectForm";
import SideBar from "./components/SideBar";

function App() {

  const getProjectsList = (projectsList) => {
    return projectsList;
  }

  return (
    <div className="flex">
      <SideBar />
      <NewProjectForm onGetProjectsList={getProjectsList}/>
    </div>
  );
}

export default App;

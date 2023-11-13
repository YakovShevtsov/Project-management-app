import EmptyProjectsList from "./components/EmptyProjectsList";
import ProjectCreationForm from "./components/ProjectCreationForm";
import SideBar from "./components/SideBar";

function App() {

  return (
    <div className="flex">
      <SideBar />
      <ProjectCreationForm/>
    </div>
  );
}

export default App;

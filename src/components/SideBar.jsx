import Button from "./Button";

const SideBar = ({onStartAddProjects, projectsList}) => {
  return (
    <aside className="bg-slate-800 w-80 rounded-r-lg p-6 h-screen">
      <h1 className="text-white font-bold text-4xl">ProjectManager</h1>
      <div className="mt-8">
        <Button onClick={onStartAddProjects}>+ Add project</Button>
      </div>
      <ul>
        {projectsList.projects.map((item) => {
          return <li key={item.id} className="text-white">{item.name}</li>;
        })}
      </ul>
    </aside>
  );
};

export default SideBar;

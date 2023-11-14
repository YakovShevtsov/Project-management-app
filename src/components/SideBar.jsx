import Button from "./Button";

const SideBar = ({
  onStartAddProjects,
  projectsList,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="bg-slate-800 w-80 rounded-r-lg p-6 h-screen">
      <h1 className="text-white font-bold text-4xl">ProjectManager</h1>
      <div className="mt-8">
        <Button onClick={onStartAddProjects}>+ Add project</Button>
      </div>
      <ul className="mt-4 flex-col flex gap-2">
        {projectsList.projects.map((item) => {
          let cssClasses =
            "text-white text-center rounded py-2 w-full cursor-pointer hover:bg-slate-700 border-b border-slate-600";

          if (item.id === selectedProjectId) {
            cssClasses += " bg-slate-700 pointer-events-none";
          }

          return (
            <li
              key={item.id}
              className={cssClasses}
              onClick={() => onSelectProject(item.id)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;

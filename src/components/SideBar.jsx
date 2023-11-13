import Button from "./Button";

const SideBar = ({projectList}) => {
  return (
    <aside className="bg-slate-800 w-80 rounded-r-lg p-6 h-screen">
      <h1 className="text-white font-bold text-4xl">ProjectManager</h1>
      <div className="mt-8">
        <Button>+ Add project</Button>
      </div>
      <ul>
        {projectList.map((item) => {
          return <li>{item.name}</li>
        })}
      </ul>
    </aside>
  );
};

export default SideBar;

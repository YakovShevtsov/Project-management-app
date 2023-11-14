import Button from "./Button";

const SelectedProject = ({ project }) => {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mt-8 p-8 w-[60rem] mx-auto">
      <header className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">{project.name}</h1>
          <Button>Delete</Button>
        </div>
        <p className="text-xl mt-2">{formattedDate}</p>
        <p className="mt-4">{project.description}</p>
      </header>
    </div>
  );
};

export default SelectedProject;

import Button from "./Button";
import TasksList from "./TasksList";
const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasksList,
}) => {
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
          <Button onClick={onDelete}>Delete</Button>
        </div>
        <p className="text-xl mt-2">{formattedDate}</p>
        <p className="mt-4 text-lg whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <hr className="mt-4" />
      <TasksList
        onAdd={onAddTask}
        onDelete={onDeleteTask}
        tasksList={tasksList}
      />
    </div>
  );
};

export default SelectedProject;

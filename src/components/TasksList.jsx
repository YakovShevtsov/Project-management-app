import AddTask from "./AddTask";

const TasksList = ({ onAdd, onDelete, tasksList }) => {
  return (
    <section>
      <h2 className="font-bold text-2xl">Tasks</h2>
      <AddTask onAdd={onAdd} />
      {tasksList.length !== 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasksList.map((task) => (
            <li
              key={task.id}
              className="flex justify-between my-4"
            >
              <span>{task.text}</span>
              <button className="hover:text-red-500">Clear</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>This project does not have any tasks yet.</p>
      )}
    </section>
  );
};

export default TasksList;

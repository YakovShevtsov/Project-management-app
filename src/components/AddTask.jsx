import { useState } from "react";
import Button from "./Button";
import InputGroup from "./InputGroup";

const AddTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const onChangeTaskText = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    setEnteredTask("");
    onAdd(enteredTask);
  };

  return (
    <div className="flex items-center gap-4 mt-4">
      <InputGroup
        labelText=""
        type="text"
        placeholder="Task name"
        value={enteredTask}
        onChange={onChangeTaskText}
      />
      <Button onClick={handleClick}>Add task</Button>
    </div>
  );
};

export default AddTask;

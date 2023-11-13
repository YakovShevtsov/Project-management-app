import { useRef, useState } from "react";
import Button from "./Button";
import InputGroup from "./InputGroup";

const NewProjectForm = ({ onAdd }) => {
  const projectNameRef = useRef();
  const projectDateRef = useRef();
  const projectDescriptionRef = useRef();

  const handleSave = () => {
    const enteredName = projectNameRef.current.value;
    const enteredDate = projectDateRef.current.value;
    const enteredDescription = projectDescriptionRef.current.value;

    onAdd({
      name: enteredName,
      date: enteredDate,
      description: enteredDescription
    });

    projectNameRef.current.value = "";
    projectDateRef.current.value = "";
    projectDescriptionRef.current.value = "";
  };

  return (
    <div className="mt-8 p-8 w-[40rem] mx-auto">
      <div className="flex flex-row gap-8 justify-end">
        <button className="text-xl hover:text-neutral-500">Cancel</button>
        <Button onClick={handleSave}>Save</Button>
      </div>
      <form className="flex flex-col gap-3 mt-6">
        <InputGroup
          ref={projectNameRef}
          type="text"
          labelText="Name"
        />
        <InputGroup
          ref={projectDateRef}
          type="date"
          labelText="Date"
        />
        <InputGroup
          ref={projectDescriptionRef}
          textarea
          labelText="Description"
        />
      </form>
    </div>
  );
};

export default NewProjectForm;

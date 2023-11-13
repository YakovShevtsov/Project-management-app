import { useRef, useState } from "react";
import Button from "./Button";
import InputGroup from "./InputGroup";
import Modal from "./Modal";

const NewProjectForm = ({ onAdd }) => {
  const [nameValidation, setNameValidation] = useState(false);
  const [dateValidation, setDateValidation] = useState(false);
  const projectNameRef = useRef();
  const projectDateRef = useRef();
  const projectDescriptionRef = useRef();
  const dialogRef = useRef();

  const handleSave = () => {
    const enteredName = projectNameRef.current.value;
    const enteredDate = projectDateRef.current.value;
    const enteredDescription = projectDescriptionRef.current.value;

    if (enteredName.length === 0) {
      dialogRef.current.open();
      return;
    } else if (enteredDate.length === 0) {
      dialogRef.current.open();
      return;
    } else {
      onAdd({
        name: enteredName,
        date: enteredDate,
        description: enteredDescription,
      });
    }

    projectNameRef.current.value = "";
    projectDateRef.current.value = "";
    projectDescriptionRef.current.value = "";
  };

  return (
    <div className="mt-8 p-8 w-[40rem] mx-auto">
      <Modal
        ref={dialogRef}
        buttonText="Close"
      >
        <h1 className="font-bold text-xl">Error</h1>
        <p>You must fill <strong>Name</strong> and <strong>Date</strong> fields at least!</p>
      </Modal>
      <div className="flex flex-row gap-8 justify-end">
        <button className="text-xl hover:text-neutral-500">Cancel</button>
        <Button onClick={handleSave}>Save</Button>
      </div>
      <form className="flex flex-col gap-3 mt-6">
        <InputGroup
          ref={projectNameRef}
          type="text"
          labelText="Name"
          invalid={nameValidation}
        />
        <InputGroup
          ref={projectDateRef}
          type="date"
          labelText="Date"
          invalid={dateValidation}
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

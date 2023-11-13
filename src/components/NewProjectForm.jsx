import { useRef, useState } from "react";
import Button from "./Button";
import InputGroup from "./InputGroup";

const NewProjectForm = ({onGetProjectsList}) => {
  const [projectsList, setProjectsList] = useState([]);

  const projectNameRef = useRef();
  const projectDateRef = useRef();
  const projectDescriptionRef = useRef();

  class Project {
    constructor(name, date, description) {
      this.name = name;
      this.date = date;
      this.description = description;
    }
  }

  const handleAddNewProject = () => {
    const newProject = new Project(
      projectNameRef.current.value,
      projectDateRef.current.value,
      projectDescriptionRef.current.value
    );

    setProjectsList((prevProjectsList) => {
      return [...prevProjectsList, newProject];
    });

    onGetProjectsList(projectsList);
    
    projectNameRef.current.value = "";
    projectDateRef.current.value = "";
    projectDescriptionRef.current.value = "";
  };

  return (
    <div className="mt-8 p-8 w-[40rem] mx-auto">
      <div className="flex flex-row gap-8 justify-end">
        <button className="text-xl hover:text-neutral-500">Cancel</button>
        <Button onClick={handleAddNewProject}>Save</Button>
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

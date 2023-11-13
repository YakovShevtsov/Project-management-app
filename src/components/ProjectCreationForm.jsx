import Button from "./Button";
import InputGroup from "./InputGroup";
import TextareaGroup from "./TextareaGroup";

const ProjectCreationForm = () => {
  return (
    <div className="mt-8 p-8 w-[40rem] mx-auto">
      <div className="flex flex-row gap-8 justify-end">
        <button className="text-xl hover:text-neutral-500">Cancel</button>
        <Button>Save</Button>
      </div>
      <form className="flex flex-col gap-3 mt-6">
          <InputGroup type="text" labelText="Name"/>
          <InputGroup type="date" labelText="Date"/>
          <TextareaGroup labelText="Description"/>
      </form>
    </div>
  );
};

export default ProjectCreationForm;

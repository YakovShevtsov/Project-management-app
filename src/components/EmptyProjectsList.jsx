import Button from "./Button";

const EmptyProjectsList = () => {

    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full">
            <img src="src/assets/no-projects.png" alt="No projects image" className="w-32 h-32" />
            <h1 className="font-bold text-4xl">No project selected</h1>
            <p className="text-lg">Select a project or create a new one</p>
            <Button>Create new project</Button>
        </div>
    );
}

export default EmptyProjectsList;
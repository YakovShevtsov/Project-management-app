import { useState } from "react";
import Button from "./Button";

const SideBar = () => {
  return (
    <aside className="bg-slate-800 w-80 rounded-r-lg p-6 h-screen">
      <h1 className="text-white font-bold text-4xl">PMapp</h1>
      <div className="mt-8">
        <Button>Add project</Button>
      </div>
    </aside>
  );
};

export default SideBar;

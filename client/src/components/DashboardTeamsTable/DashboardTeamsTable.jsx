import React from "react";
import AddButton from "../Buttons/AddButton/AddButton";

const DashboardTeamsTable = () => {
  return (
    <div className=" mx-auto m-0 w-3/4">
      <div className="flex items-center">
        <h1 className="mt-2 mb-2 text-2xl mr-2 font-semibold">Teams Table </h1>
        <AddButton type={"team"}/>
      </div>

      <div className="overflow-x-scroll">To be teams table</div>
    </div>
  );
};

export default DashboardTeamsTable;

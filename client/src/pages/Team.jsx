import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TeamsTableContainer from "../components/TeamsTableContainer/TeamsTableContainer";

const Team = () => {
  return (
    <div className="">
      <div className="bg-black">
        <Navbar />
      </div>
      <br />
      <br />
      <TeamsTableContainer />
    </div>
  );
};

export default Team;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ShikigamiTableContainer from "../components/ShikigamiTableContainer/ShikigamiTableContainer";



const Shikigami = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <br />
      <br />
      <ShikigamiTableContainer />
    </div>
  );
};

export default Shikigami;

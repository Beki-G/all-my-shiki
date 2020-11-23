import React from "react";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div>
      <Link
        className=" rounded-full px-2 h-6 bg-purple-600 font-bold text-white "
        to="/createshiki"
      >
        +
      </Link>
    </div>
  );
};

export default AddButton;

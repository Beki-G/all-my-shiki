import React from "react";
import "./styles.css";

const TogglePrivate = ({ onChange }) => {
  return (
    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
      {/* <!-- toggle --> */}
      <div className="relative">
        {/* <!-- input --> */}
        <input id="toogleA" type="checkbox" className="hidden" />
        {/* <!-- line --> */}
        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        {/* <!-- dot --> */}
        <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
      </div>
      {/* <!-- label --> */}
      <div className="ml-3 text-gray-700 font-medium">Set to private</div>
    </label>
  );
};

export default TogglePrivate;

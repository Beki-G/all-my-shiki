import React from "react";
import "./styles.css";

const TogglePrivate = ({ onChange }) => {
  return (
    <label for="toogleA" class="flex items-center cursor-pointer">
      {/* <!-- toggle --> */}
      <div class="relative">
        {/* <!-- input --> */}
        <input id="toogleA" type="checkbox" class="hidden" />
        {/* <!-- line --> */}
        <div class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        {/* <!-- dot --> */}
        <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
      </div>
      {/* <!-- label --> */}
      <div class="ml-3 text-gray-700 font-medium">Set to private</div>
    </label>
  );
};

export default TogglePrivate;

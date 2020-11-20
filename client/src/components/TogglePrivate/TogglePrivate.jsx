/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./styles.css";

const TogglePrivate = ({
  isEdit,
  isCharacterPrivate,
  setIsCharacterPrivate,
}) => {
  const [toggleMsg, setToggleMsg] = useState("Private");

  useEffect(() => {
    changeToggleMsg();
  }, [isCharacterPrivate]);

  const changeToggleMsg = () => {
    if (isCharacterPrivate) setToggleMsg("Private");
    else setToggleMsg("Public");
  };
  return (
    <label htmlFor="toogleA" className="flex items-center cursor-pointer mt-2">
      {/* <!-- toggle --> */}
      <div className="relative">
        {/* <!-- input --> */}
        <input
          id="toogleA"
          type="checkbox"
          className="hidden"
          checked={isCharacterPrivate}
          disabled={!isEdit}
          onChange={() => {
            setIsCharacterPrivate(!isCharacterPrivate);
          }}
        />
        {/* <!-- line --> */}
        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        {/* <!-- dot --> */}
        <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow bottom-0"></div>
      </div>
      {/* <!-- label --> */}
      <div className="ml-3 text-gray-700 font-medium">{toggleMsg}</div>
    </label>
  );
};

export default TogglePrivate;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./styles.css";

const ToggleShowFilters = ({ isShowFilter, setIsShowFilter }) => {
  const [toggleMsg, setToggleMsg] = useState({ msg: "Hide" });

  useEffect(() => {
    changeToggleMsg();
  }, [isShowFilter]);

  const changeToggleMsg = () => {
    if (isShowFilter) setToggleMsg({ msg: "Show" });
    else setToggleMsg({ msg: "Hide" });
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
          checked={isShowFilter}
          onChange={() => {
            setIsShowFilter(!isShowFilter);
          }}
        />
        {/* <!-- line --> */}
        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        {/* <!-- dot --> */}
        <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow bottom-0"></div>
      </div>
      {/* <!-- label --> */}
      <div className="ml-3 text-gray-700 font-medium">{toggleMsg.msg}</div>
    </label>
  );
};

export default ToggleShowFilters;

import React, { useState } from "react";

export const CharacterProfileCreatorEditBtn = ({
  setIsEdit,
  isEdit,
  onUpdate,
}) => {
  const [btnMsg, setBtnMsg] = useState("Edit");

  const onClick = (e) => {
    setIsEdit(!isEdit);
    if (isEdit) {
      setBtnMsg("Edit");
      onUpdate(e);
      
    } else setBtnMsg("Save");
  };

  return (
    <button
      onClick={onClick}
      className="  sm:mt-6 uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
    >
      {btnMsg}
    </button>
  );
};

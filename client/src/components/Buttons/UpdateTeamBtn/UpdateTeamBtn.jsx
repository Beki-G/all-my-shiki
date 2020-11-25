import React, {useState} from 'react'

const UpdateTeamBtn = ({
    setIsEdit,
    isEdit,
    onUpdate,
  }) => {
    const [btnMsg, setBtnMsg] = useState("Edit");
  
    const onClick = (e) => {
      setIsEdit(!isEdit);
      if (isEdit) {
        setBtnMsg("Edit");
        // onUpdate(e);
        
      } else setBtnMsg("Save");
    };
  
    return (
      <button
        onClick={onClick}
        className="  sm:mt-6 uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:ring focus:outline-none text-white text-xs py-3 px-10 rounded"
      >
        {btnMsg}
      </button>
    );
}

export default UpdateTeamBtn

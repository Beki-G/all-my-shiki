import React, { useState } from "react";
import Modal from "../../Modal/Modal";

export const EditProfileBtn = ({setIsEdit}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick =() =>{
      setIsEdit(true)
  }
  return (
    <div>
      <button className="block uppercase mx-auto shadow bg-old-mauve hover:bg-cinnabar focus:ring focus:outline-none text-white text-xs py-3 px-10 rounded mb-3 sm:mb-0 ring-papaya" onClick={onClick}>
        Edit
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Please double check your inputs!
      </Modal>
    </div>
  );
};

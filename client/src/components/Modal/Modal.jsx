import React from "react";
import ReactDom from "react-dom";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-75 z-100 rounded-md"></div>
      <div className="Modal_styles fixed top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-white p-20 z-100 flex flex-col rounded-md">
        <div className="mb-6">
        {children}

        </div>
        <button onClick={onClose} className="block uppercase mx-auto shadow  bg-old-mauve hover:bg-cinnabar font-bold text-white focus:outline-none focus:ring-2 ring-chestnut text-xs py-3 px-10 rounded">Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;

import React from "react";
import ReactDom from "react-dom";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-75 z-100"></div>
      <div className="Modal_styles fixed top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-white p-20 z-100 flex flex-col">
        {children}
        <button onClick={onClose} className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;

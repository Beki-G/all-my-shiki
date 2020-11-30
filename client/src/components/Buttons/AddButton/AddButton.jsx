import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const AddButton = ({ type }) => {
  const [redirectLink, setRedirectLink] = useState({
    redirect: null
  });

  const onClick = (e) => {
    e.preventDefault();
    switch (type) {
      case "modChara":
        setRedirectLink({redirect:"/createshiki"})
        break;
      case "team":
        setRedirectLink({redirect:"/createteam"})
        break;

      default:
        setRedirectLink({redirect: null})
        break;
    }
  };

  return (
    <div>
      {redirectLink.redirect ? (
        <Redirect to={redirectLink.redirect} />
      ) : (
        <button
          className=" rounded-full px-2 h-6 bg-old-mauve hover:bg-cinnabar font-bold text-white focus:outline-none focus:ring-2 ring-chestnut "
          onClick={onClick}
        >
          +
        </button>
      )}
    </div>
  );
};

export default AddButton;

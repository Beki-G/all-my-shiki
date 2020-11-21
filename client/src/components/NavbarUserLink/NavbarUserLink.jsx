import React from "react";
import { Link } from "react-router-dom";
import { UseUserSession } from "../../utils/UserContext";

const NavbarUserLink = () => {
  const { logoutMethod } = UseUserSession();

  return (
    <div className=" bg-black sm:bg-transparent">
      <div className="sm:flex">
        <Link
          to="/"
          className="block py-1  px-2 text-white font-semibold rounded hover:bg-lgCyan hover:text-midGreen font-sans"
        >
          Home
        </Link>
        <Link
          to="/profile"
          className="block py-1  px-2 text-white font-semibold rounded font-sans"
        >
          Profile
        </Link>
        <Link
          to="/dashboard"
          className="block py-1  px-2 text-white font-semibold rounded font-sans"
        >
          Dashboard
        </Link>

        <button
          onClick={() => logoutMethod()}
          className="block py-1  px-2 text-white font-semibold rounded font-sans"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default NavbarUserLink;

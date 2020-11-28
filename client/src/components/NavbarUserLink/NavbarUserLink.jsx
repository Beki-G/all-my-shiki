import React from "react";
import { Link } from "react-router-dom";

const NavbarUserLink = () => {

  return (
    <div className=" bg-black sm:bg-transparent">
      <div className="sm:flex">
        <Link
          to="/profile"
          className="block py-1  px-2 text-white  rounded font-sans"
        >
          Profile
        </Link>
        <Link
          to="/dashboard"
          className="block py-1  px-2 text-white  rounded font-sans"
        >
          Dashboard
        </Link>

      </div>
    </div>
  );
};

export default NavbarUserLink;

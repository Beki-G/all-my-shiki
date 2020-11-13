/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UseUserSession } from "../../utils/UserContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const { loginMethod, logoutMethod, userProfile } = UseUserSession();

  useEffect(() => {
    getIsUser();
  }, [userProfile]);

  function toggleSideMenu(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function getIsUser() {
    if (!userProfile.auth0Id) setIsUser(false);
    else setIsUser(true);
  }

  return (
    <nav className="bg-transparent sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        {/* <div>
          <Link to="/">
            <img
              className="h-10"
              src="https://via.placeholder.com/150"
              alt="BG initials"
            />
          </Link>
        </div> */}
        <div className="sm:hidden">
          <button
            onClick={toggleSideMenu}
            type="button"
            className="block text-white hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d={
                  isOpen
                    ? "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    : "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={` px-2 pt-2 pb-4 sm:flex sm:p-0 sm:justify-end ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="block py-1  px-2 text-white font-extrabold rounded hover:bg-lgCyan hover:text-midGreen font-sans"
        >
          Home
        </Link>
        {/* If user is logged in show logout, vice versa */}
        {isUser ? (
          <>
            <Link
              to="/profile"
              className="block py-1  px-2 text-white font-extrabold rounded hover:bg-lgCyan hover:text-midGreen font-sans"
            >
              Profile
            </Link>
            <button
              onClick={() => logoutMethod()}
              className="block py-1  px-2 text-white font-extrabold rounded hover:bg-lgCyan hover:text-midGreen font-sans"
            >
              Log Out
            </button>
          </>
        ) : (
          <button
            onClick={() => loginMethod()}
            className="block py-1  px-2 text-white font-extrabold rounded hover:bg-lgCyan hover:text-midGreen font-sans"
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

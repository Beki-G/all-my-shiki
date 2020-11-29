/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { UseUserSession } from "../../utils/UserContext";
import NavbarUserLink from "../NavbarUserLink/NavbarUserLink";
import { Link } from "react-router-dom";
import GuildCrest from "../../assets/GuildCrest.jpg"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const { loginMethod, userProfile } = UseUserSession();

  useEffect(() => {
    getIsUser();
  }, [userProfile]);

  function toggleSideMenu(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function toggleDropdown(e) {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  }

  function getIsUser() {
    if (!userProfile.auth0Id) setIsUser(false);
    else setIsUser(true);
  }

  return (
    <nav className=" bg-transparent sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 sm:h-12">
      <div className="flex items-center justify-between px-4 py-6 sm:p-0 ">
        <div>
          <Link to="/">
            <img
              className="h-10 rounded-full"
              src={GuildCrest}
              alt="SemiCasual Guild Crest"
            />
          </Link>
        </div>
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
        className={`absolute bg-black sm:bg-transparent sm:top-1 sm:right-0 px-2 pt-2 pb-4  sm:flex sm:p-0 sm:justify-end  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* If user is logged in show logout, vice versa */}
        <Link
          to="/"
          className="block py-1  px-2 text-white rounded hover:bg-lgCyan hover:text-midGreen font-sans"
        >
          Home
        </Link>
        {isUser ? (
          <div className="">
            <NavbarUserLink />
          </div>
        ) : (
          <div>
            <button
              onClick={() => loginMethod()}
              className="block py-1  px-2 text-white font-extrabold rounded hover:bg-lgCyan hover:text-midGreen font-sans relative  top-0"
            >
              Log In
            </button>
          </div>
        )}
        <div className=" relative right-0 py-1 px-2">
          <button className="text-white right-4 mr-12" onClick={toggleDropdown}>
            <span>Explore</span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={` pt-2 pb-4 flex rounded  ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <div className="shadow-md bg-old-mauve rounded-md">
              <Link
                className="block py-2 px-1 mt-2 text-sm bg-transparent  text-white md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring"
                to="/shikigami"
              >
                Shikigami
              </Link>
              <Link
                className="block py-2 px-1 mt-2 text-sm bg-transparent  text-white md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring"
                to="/teams"
              >
                Teams
              </Link>
              <Link
                className="block py-2 px-1 mt-2 text-sm bg-transparent  text-white md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring"
                to="/traits"
              >
                Traits
              </Link>
              <Link
                className="block py-2 px-1 mt-2 text-sm bg-transparent  text-white md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring"
                to="/advancedsearch"
              >
                Advanced Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

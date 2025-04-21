import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../assets/logo.jpg"; // Adjust the path accordingly

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path from useLocation
  const currentPath = location.pathname; // Extract the path to determine the active tab

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between max-w-7xl 2xl:max-w-[1920px]">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo}
              alt="Azhizen Logo"
              className="w-32 h-12 md:w-36 md:h-14 2xl:w-48 2xl:h-16"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-10 2xl:space-x-12 font-poppins">
          {[
            { name: "Home", path: "/" },
            { name: "About us", path: "/about-us" },
            { name: "Career", path: "/carrer" },
            { name: "Contact us", path: "/contact-us" },
          ].map(({ name, path }) => (
            <div
              key={name}
              className={`text-base md:text-lg 2xl:text-xl cursor-pointer transition-colors duration-200 ${
                currentPath === path
                  ? "font-bold text-[#00B4D9]"
                  : "text-gray-600 font-normal hover:text-[#00B4D9]"
              }`}
              onClick={() => handleNavigation(path)}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="bg-white text-gray-600 focus:outline-none p-2 rounded"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4 max-w-7xl">
            {[
              { name: "Home", path: "/" },
              { name: "About us", path: "/about-us" },
              { name: "Career", path: "/carrer" },
              { name: "Contact us", path: "/contact-us" },
            ].map(({ name, path }) => (
              <div
                key={name}
                className={`cursor-pointer text-base ${
                  currentPath === path
                    ? "font-bold text-[#00B4D9]"
                    : "text-gray-600 font-normal hover:text-[#00B4D9]"
                }`}
                onClick={() => {
                  setIsOpen(false);
                  handleNavigation(path);
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

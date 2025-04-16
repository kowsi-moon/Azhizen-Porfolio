import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Adjust the path accordingly

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(""); // Track the active tab
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    setActiveTab(path); // Set the active tab
    navigate(path);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto px-2 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="Azhizen Logo" style={{ width: "130px" , height: " 50px" }} />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-9 font-poppins">
          {[
            { name: "Home", path: "/" },
            { name: "About us", path: "/about-us" },
            { name: "Career", path: "/carrer" },
            { name: "Contact us", path: "/contact-us" }
          ].map(({ name, path }) => (
            <div
              key={name}
              className={`text-lg cursor-pointer ${
                activeTab === path ? "font-bold text-[#00B4D9]" : "text-gray-600 font-normal"
              }`}
              onClick={() => handleNavigation(path)}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "About us", path: "/about-us" },
              { name: "Career", path: "/career" },
              { name: "Contact us", path: "/contact-us" }
            ].map(({ name, path }) => (
              <div
                key={name}
                className={`cursor-pointer ${
                  activeTab === path ? "font-bold text-[#00B4D9]" : "text-gray-600 font-normal"
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

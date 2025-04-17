import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import foot1 from "../assets/foot1.png";
import foot2 from "../assets/foot2.png";
import foot3 from "../assets/foot3.png";
import foot4 from "../assets/foot4.png";
import logofoot from "../assets/logofoot.png";

const FooterSection = () => {
  const navigate = useNavigate();
  // State object to track open/closed status of each section
  const [openSections, setOpenSections] = useState({
    "Quick Links": false,
    Products: false,
    Services: false,
    Policies: false,
  });

  // Toggle function for a specific section
  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleContactClick = () => {
    navigate("/contact-us");
  };

  // Define links for each section to match desktop view
  const sectionLinks = {
    "Quick Links": [
      { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/contact-us" },
    ],
    Products: [
      { label: "Ease Milk", href: "#" },
      { label: "Soil Tester", href: "#" },
      { label: "Milk Tester", href: "#" },
    ],
    Services: [
      { label: "Research & Development", href: "#" },
      { label: "Smart Hardware Solutions", href: "#" },
      { label: "SoftEdge Innovations", href: "#" },
    ],
    Policies: [
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  };

  return (
    <footer className="bg-black text-white px-6 md:px-20 py-10">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-6 gap-8 text-left text-sm mb-10">
        {/* Logo and Description */}
        <div>
          <img src={logofoot} className="w-full h-10 mb-4 rounded-lg mt-1" alt="Logo" />
          <p className="text-gray-400">
            3rd Floor, Mercury Block <br />KSRCE, Tiruchengode, Namakkal, Tamil Nadu
          </p>
          <div className="flex justify-center space-x-4 mt-10 mr-10">
            <a href="https://link1.com" target="_blank" rel="noopener noreferrer">
              <img src={foot1} className="w-6 h-6" alt="Social 1" />
            </a>
            <a
              href="https://www.instagram.com/azhizensolutions?igsh=dDhmeDc4OTNobjk4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={foot2} className="w-6 h-6" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/azhizensolutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={foot3} className="w-6 h-6" alt="LinkedIn" />
            </a>
            <a href="https://link4.com" target="_blank" rel="noopener noreferrer">
              <img src={foot4} className="w-6 h-6" alt="Social 4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="about-us" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="contact-us" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Products</h4>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Ease Milk
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Soil Tester
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Milk Tester
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Services</h4>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
              Research & Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
              Smart Hardware Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
              SoftEdge Innovations
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Policies</h4>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-400 mb-4">
 Email: azhizensolutions@gmail.com
  <br />
  Phone: +91 9750603988
</p>
          <button
            className="text-white px-6 py-3 rounded-full transition-all hover:brightness-110 w-[150px]"
            style={{ background: "linear-gradient(135deg, #0078B4 0%, #00B4D9 100%)" }}
            onClick={handleContactClick}
          >
            Contact us
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="grid grid-cols-1 md:hidden gap-10 text-sm">
        {["Quick Links", "Products", "Services", "Policies"].map((title, i) => (
          <div key={i} className="text-left">
            <h4
              className="text-lg font-semibold mb-3 flex items-center cursor-pointer"
              onClick={() => toggleSection(title)}
            >
              {title}
              <span
                className={`ml-2 transform transition-transform duration-300 ${
                  openSections[title] ? "rotate-90" : "rotate-0"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </h4>
            <div className="border-b-2 border-white mb-3" />
            <ul
              className={`space-y-1 text-gray-400 ${
                openSections[title] ? "block" : "hidden"
              }`}
            >
              {sectionLinks[title].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Section */}
        <div className="text-left">
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-400 mb-1">azhizensolutions@gmail.com</p>
          <p className="text-gray-400 mb-1">+91 97506 03988</p>
          <p className="text-gray-400 mb-4">
            K.S.R College of Engineering Tiruchengode, Namakkal, Tamil Nadu
          </p>
          <img
            src={logofoot}
            className="w-full h-10 mb-4 rounded-lg mt-10 ml-2"
            alt="Logo"
          />
          <div className="flex justify-center space-x-4 mt-10">
            <a href="https://link1.com" target="_blank" rel="noopener noreferrer">
              <img src={foot1} className="w-6 h-6" alt="Social 1" />
            </a>
            <a
              href="https://www.instagram.com/azhizensolutions?igsh=dDhmeDc4OTNobjk4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={foot2} className="w-6 h-6" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/azhizensolutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={foot3} className="w-6 h-6" alt="LinkedIn" />
            </a>
            <a href="https://link4.com" target="_blank" rel="noopener noreferrer">
              <img src={foot4} className="w-6 h-6" alt="Social 4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-screen px-0 mx-[-1.5rem] md:mx-[-5rem] mt-10">
        <hr className="border-t border-white" />
      </div>
      <div className="text-center text-gray-500 mt-4">
        © 2025 Azhizen Solution. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
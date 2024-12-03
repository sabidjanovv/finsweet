import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "../../assets/Icon.png";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <header id="header" className="bg-[#232536]">
      <nav className="flex justify-between items-center px-6 md:px-20 py-6 h-20">
        <div className="flex items-center">
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="Logo"
            className="h-8"
          />
        </div>

        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Navigatsiya linklari */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-20 left-0 w-full bg-[#232536] md:flex md:static md:w-auto md:bg-transparent transition-all`}
        >
          <div className="flex flex-col md:flex-row justify-end items-center gap-8">
            <NavLink
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
              to={"/service"}
            >
              Service
            </NavLink>
            <NavLink
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
              to={"/company"}
            >
              Company
            </NavLink>
            <NavLink
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
              to={"/career"}
            >
              Career
            </NavLink>
            <NavLink
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
              to={"/auth"}
            >
              Login
            </NavLink>
            {/* <NavLink
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
              to={"/blog"}
            >
              Blog
            </NavLink>
            <NavLink
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
              to={"/contact_us"}
            >
              Contact us
            </NavLink>
            <NavLink
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
              to={"/clone_projects"}
            >
              <div className="flex items-center gap-2">
                Clone projects
                <img src={Icon} alt="Icon" className="h-4 w-9" />
              </div>
            </NavLink> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

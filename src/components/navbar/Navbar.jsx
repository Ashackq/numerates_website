import React, { useState } from "react";
import logo from "../../ass/logo.jpg";
import logo1 from "../../ass/logo1.jpg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { SidebarData } from "./sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between relative z-50">
      <div className="flex items-center">
        <Link to="/" className="mr-4">
          <img src={logo} alt="Logo" className="w-28" />
        </Link>
      </div>

      <div className="hidden md:flex space-x-6">
        <Link to="/About" className="hover:text-[#0087ca]">
          About
        </Link>
        <Link to="/Event" className="hover:text-[#0087ca]">
          Events
        </Link>
        <Link to="/Teams" className="hover:text-[#0087ca]">
          Teams
        </Link>
        <Link to="/Con" className="hover:text-[#0087ca]">
          Let's Connect
        </Link>
        <Link to="/Fut" className="hover:text-[#0087ca]">
          Future Plans
        </Link>
      </div>

      <div className="hidden md:block">
        <img src={logo1} alt="MIT Logo" className="h-12" />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <FaBars
          onClick={showSidebar}
          className="text-white text-2xl cursor-pointer"
          aria-label="Menu"
        />
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#2B2D42] text-white transform ${
          sidebar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="space-y-6 p-6">
          <li className="cursor-pointer" onClick={showSidebar}>
            ✖ Close
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className="nav-text">
              <Link
                to={item.path}
                className="block py-2 px-4 rounded-md hover:bg-gray-800 transition"
              >
                {item.icon} {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../images/Muskan2.png";
import PageLayout from "../components/PageLayout";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-NavColor">
      <PageLayout>
        <nav className="container px-10">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">
              <NavLink to="/">
                <img src={logoImage} alt="Logo" className="h-16" />
              </NavLink>
            </div>
            <div className="hidden md:block border-b-slate-900">
              <ul className="flex items-center space-x-8 text-lg font-semibold">
                <li>
                  <NavLink to="/" className="text-slate-800">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="text-slate-800">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/events" className="text-slate-800">
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/mens" className="text-slate-800">
                    Health
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" className="text-slate-800">
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/volunteering" className="text-slate-800">
                    Volunteering
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/donate" className="text-slate-800">
                    <button className="bg-DonateGreen rounded-full px-6 py-3 text-xl">
                      Donate
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`mobile-menu ${showMenu ? "block" : "hidden"} md:hidden`}
          >
            <ul className="mt-4 space-y-4">
              <li>
                <NavLink
                  to="/"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mens"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Menstrual Health
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </PageLayout>
    </header>
  );
};

export default Navbar;

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
        <nav className="container mx-auto px-4 sm:px-0 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">
              <NavLink to="/">
                <img src={logoImage} alt="Logo" className="h-16" />
              </NavLink>
            </div>
            <div className="hidden space-x-3 lg:space-x-7 md:flex text-sm lg:text-base font-semibold items-center">
              <NavLink to="/" className="text-slate-800">
                Home
              </NavLink>
              <NavLink to="/about" className="text-slate-800">
                About
              </NavLink>
              <NavLink to="/events" className="text-slate-800">
                Events
              </NavLink>
              <NavLink to="/admin" className="text-slate-800">
                Admin
              </NavLink>
              <NavLink to="/mens" className="text-slate-800">
                Health
              </NavLink>
              <NavLink to="/gallery" className="text-slate-800">
                Gallery
              </NavLink>
              <NavLink to="/volunteering" className="text-slate-800">
                Volunteering
              </NavLink>
              <NavLink to="/signin" className="text-slate-800">
                Signin
              </NavLink>
              <NavLink to="/donate" className="text-slate-800">
                <button className="bg-DonateGreen rounded-full px-4 py-2 text-lg">
                  Donate
                </button>
              </NavLink>
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
          <div className={`${showMenu ? "block" : "hidden"} md:hidden mt-4 space-y-4`}>
            <NavLink to="/" className="block px-4 py-2 text-white bg-gray-900 rounded">
              Home
            </NavLink>
            <NavLink to="/about" className="block px-4 py-2 text-white bg-gray-900 rounded">
              About
            </NavLink>
            <NavLink to="/events" className="block px-4 py-2 text-white bg-gray-900 rounded">
              Events
            </NavLink>
            <NavLink to="/admin" className="block px-4 py-2 text-white bg-gray-900 rounded">
              Admin
            </NavLink>
            <NavLink to="/mens" className="block px-4 py-2 text-white bg-gray-900 rounded">
              Health
            </NavLink>
            <NavLink to="/gallery" className="block px-4 py-2 text-white bg-gray-900 rounded">
              Gallery
            </NavLink>
            <NavLink to="/volunteering" className="block px-4 py-2 text-white bg-gray-900 rounded">
              Volunteering
            </NavLink>
          </div>
        </nav>
      </PageLayout>
    </header>
  );
};

export default Navbar;

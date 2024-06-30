import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../images/Muskan2.png";
import User from "../images/User1.png";
import PageLayout from "../components/PageLayout";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
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
            <div className="hidden space-x-3 lg:space-x-7 md:flex text-sm lg:text-base font-semibold items-center list-none font-montserrat text-white">
              <NavLink to="/" className="nav-link focus:outline-none focus:"  >
                <li className="">Home</li>
              </NavLink>
              <NavLink to="/about" className="nav-link">
                <li className="">About</li>
              </NavLink>
              <NavLink to="/events" className="nav-link">
                <li className="">Events</li>
              </NavLink>
              {currentUser &&
                currentUser.role === "admin" && ( // Check if currentUser exists and has role "admin"
                  <NavLink to="/admin" className="nav-link">
                    <li className="">Admin</li>
                  </NavLink>
                )}
              <NavLink to="/mens" className="nav-link">
                <li className="">Health</li>
              </NavLink>
              <NavLink to="/gallery" className="nav-link">
                <li className="">Gallery</li>
              </NavLink>
              <NavLink to="/volunteering" className="nav-link">
                <li className="">Volunteering</li>
              </NavLink>
              <NavLink to="/profile" className="nav-link">
                {currentUser ? (
                  <img
                    src={User}
                    alt="profileImage"
                    className="rounded-full h-7 w-7 object-cover"
                  />
                ) : (
                  <li className="nav-link ">Signin</li>
                )}
              </NavLink>
              <NavLink to="/donate" className="">
                <button className="group relative h-10 w-28 overflow-hidden rounded-lg bg-white text-lg shadow">
                  <div className="absolute inset-0 w-3 bg-DonateGreen transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">
                    Donate!
                  </span>
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
          <div
            className={`${
              showMenu ? "block" : "hidden"
            } md:hidden mt-4 space-y-4`}
          >
            <NavLink
              to="/"
              className="block px-4 py-2 text-white bg-gray-900 rounded"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-white bg-gray-900 rounded"
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/events"
              className="block px-4 py-2 text-white bg-gray-900 rounded"
              onClick={closeMenu}
            >
              Events
            </NavLink>
            {currentUser && currentUser.role === "admin" && (
              <NavLink
                to="/admin"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
                onClick={closeMenu}
              >
                Admin
              </NavLink>
            )}
            <NavLink
              to="/mens"
              className="block px-4 py-2 text-white bg-gray-900 rounded"
              onClick={closeMenu}
            >
              Health
            </NavLink>
            <NavLink
              to="/gallery"
              className="block px-4 py-2 text-white bg-gray-900 rounded"
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/volunteering"
              className="block px-4 py-2 text-white bg-gray-900 rounded"
              onClick={closeMenu}
            >
              Volunteering
            </NavLink>
            {currentUser ? (
              <NavLink
                to="/profile"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
                onClick={closeMenu}
              >
                Profile
              </NavLink>
            ) : (
              <NavLink
                to="/signin"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
                onClick={closeMenu}
              >
                Signin
              </NavLink>
            )}
          </div>
        </nav>
      </PageLayout>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../images/Muskan2.png";
import User from "../images/User1.png";
import PageLayout from "../components/PageLayout";
import {useSelector} from "react-redux"

const Navbar = () => {

  const {currentUser} = useSelector(state=>state.user)

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
            <div className="hidden space-x-3 lg:space-x-7 md:flex text-sm lg:text-base font-semibold items-center list-none">
              <NavLink to="/">
                <li className="text-slate-800 hover:underline">Home</li>
              </NavLink>
              <NavLink to="/about" className="text-slate-800">
                <li className="text-slate-800 hover:underline">About</li>
              </NavLink>
              <NavLink to="/events">
                <li className="text-slate-800 hover:underline">Events</li>
              </NavLink>
              <NavLink to="/admin">
                <li className="text-slate-800 hover:underline">Admin</li>
              </NavLink>
              <NavLink to="/mens">
                <li className="text-slate-800 hover:underline">Health</li>
              </NavLink>
              <NavLink to="/gallery">
                <li className="text-slate-800 hover:underline">Gallery</li>
              </NavLink>
              <NavLink to="/volunteering">
                <li className="text-slate-800 hover:underline">Volunteering</li>
              </NavLink>
              <NavLink to="/profile">
                {currentUser ? (
                  <img src={User} alt="profileImage" className="rounded-full h-7 w-7 object-cover"/>
                ): (
                  <li className="text-slate-800 hover:underline">Signin</li>
                )}
              </NavLink>
              <NavLink to="/donate">
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

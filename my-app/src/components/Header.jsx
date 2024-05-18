import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-700 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-end items-center gap-5">
          <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
            <li>
              <h2 className="text-base sm:text-lg">+91 1111122222</h2>
            </li>
            <li>
              <h2 className="text-base sm:text-lg">NGOMuskan@gmail.com</h2>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

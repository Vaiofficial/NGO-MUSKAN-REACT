import React from "react";
import PageLayout from "../components/PageLayout";
import backgroundImage from "../images/slider1.png"; // Import your image
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <PageLayout>
      {/* Text and image container */}
      <div className="relative">
        {/* Text overlay */}
        <div className="absolute top-full sm:top-1/3 lg:top-1/3 left-0 text-black p-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-pink-500 py-2">
            United for Good:
          </h1>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold py-2">
            Building a Brighter Future for All{" "}
          </h1>
          {/* Hide the <p> tag until lg breakpoint */}
          <p className="hidden xl:block text-sm sm:text-base md:text-lg py-2 font-semibold">
            Together, we amplify compassion and build a brighter future for all.
          </p>
          <div className="py-4">
            <NavLink to="/donate">
              <button className="bg-DonateGreen rounded-full px-7 py-4 text-xl text-black font-semibold">
                Donate Now
              </button>
            </NavLink>
          </div>
        </div>
        {/* Image */}
        <img src={backgroundImage} alt="Background" className="w-full" />
      </div>
    </PageLayout>
  );
};

export default Home;

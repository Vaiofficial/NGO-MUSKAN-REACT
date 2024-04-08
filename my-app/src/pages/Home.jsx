import React from "react";
import PageLayout from "../components/PageLayout";
import backgroundImage from "../images/slider1.png"; // Import your image
import AnimalCare from "../images/AnimalCare.jpg";
import FoodDonation from "../images/FoodDonate.jpg";
import OldAgeCare from "../images/OldAgeCare.jpg";
import PlantCare from "../images/PlantCare.jpg";
import Education from "../images/education.jpg";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// campaign data for sliding
const data = [
  {
    name: `Food Donation`,
    img: FoodDonation,
  },
  {
    name: `Old-Age Care`,
    img: OldAgeCare,
  },
  {
    name: `Plant Care`,
    img: PlantCare,
  },
  {
    name: `Animal Care`,
    img: AnimalCare,
  },
  {
    name: `Education Support`,
    img: Education,
  },
];

const Home = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Custom arrow components

  return (
    <PageLayout>
      {/* Text and image container Section Starts Here */}
      <div className="relative">
        {/* Text overlay */}
        <div className="absolute top-full sm:top-1/3 lg:top-1/3 left-0 text-black p-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-pink-500 py-2 sm:py-3">
            United for Good:
          </h1>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold py-2 sm:py-3">
            Building a Brighter Future for All{" "}
          </h1>
          {/* Hide the <p> tag until lg breakpoint */}
          <p className="hidden xl:block text-sm sm:text-base md:text-lg py-2 font-semibold">
            Together, we amplify compassion and build a brighter future for all.
          </p>
          <div className="py-2 sm:py-3">
            <NavLink to="/donate">
              <button className="bg-DonateGreen rounded-full px-6 py-1 sm:px-7 sm:py-4 text-base sm:text-xl text-black font-semibold">
                Donate Now
              </button>
            </NavLink>
          </div>
        </div>
        {/* Image */}
        <img src={backgroundImage} alt="Background" className="w-full" />
      </div>
      {/* Text and image container Section Ends Here */}

      {/* WHO WE ARE SECTION IN HOME PAGE STARTS HERE*/}
      <div className="mt-56 sm:my-28 md:my-12 px-8 py-4 md:p-8">
        {/* Heading about us */}
        <div className="items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            WHO WE ARE - NGO MUSKAN
          </h1>
        </div>
        {/* para about us */}
        <div className="my-8">
          <p className="text-lg sm:text-2xl">
            NGO Muskan is a youth led N.G.O. which visions at eradicating the
            taboos and normalising menstruation by the methods of spreading
            general awareness and encouraging hygiene for the same. Our NGO also
            focuses on H.E.F.A.O.; Health, Education and Environment, Food,
            Animals, Old Age and Children.
          </p>
        </div>
        <div>
          <NavLink to="/about">
            <button className="bg-slate-500 text-white font-bold px-5 py-3 rounded-full">
              View More
            </button>
          </NavLink>
        </div>
      </div>
      {/* WHO WE ARE SECTION IN HOME PAGE ENDS HERE */}

      {/* CAMPAIGNS SECTION STARTS HERE */}
      <div className="">
        <div className="mt-10 sm:mt-20">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div
                key={index}
                className="bg-CampaignColor rounded-lg h-[300px]"
              >
                <div className="h-56 rounded-2xl flex items-center justify-center">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-44 w-44 rounded-full"
                  />
                </div>
                <div className="bg-white text-center text-2xl font-semibold py-3 rounded-lg">
                  <h2>{d.name}</h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* CAMPAIGNS SECTION Ends Here */}
    </PageLayout>
  );
};

export default Home;

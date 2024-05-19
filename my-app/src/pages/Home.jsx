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
import PeopleSay from "../components/PeopleSay";
import ContactUs from "../components/ContactUs";
import Work from "../components/Work";

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
  return (
    <PageLayout>
      <div className="relative">
        <div className="absolute top-full sm:top-1/3 lg:top-1/3 left-0 text-black">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-pink-500 py-2 sm:py-3">
            United for Good:
          </h1>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold py-2 sm:py-3">
            Building a Brighter Future for All{" "}
          </h1>
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
        <img src={backgroundImage} alt="Background" className="w-full" />
      </div>

      <div className="mt-56 sm:my-28 md:my-12 py-4">
        <div className="items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            WHO WE ARE - NGO MUSKAN
          </h1>
        </div>
        <div className="my-8">
          <p className="text-lg sm:text-2xl">
            NGO Muskan is a youth led N.G.O. which visions at eradicating the
            taboos and normalising menstruation by the methods of spreading
            general awareness and encouraging hygiene for the same. Our NGO also
            focuses on H.E.F.A.O.; Health, Education and Environment, Food,
            Animals, Old Age and Children.
          </p>
        </div>
        <div className="my-8">
          <NavLink to="/about">
            <button className="bg-pink-500 rounded-full px-6 py-3 text-lg font-semibold text-white">
              View More
            </button>
          </NavLink>
        </div>
      </div>
      <div className="my-12 py-4">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold my-4">
          OUR CAUSES
        </h1>
        <Slider {...settings}>
          {data.map((d, i) => (
            <div key={i} className="px-2">
              <img
                src={d.img}
                alt={d.name}
                className="rounded-xl w-full h-64 sm:h-96 object-cover"
              />
              <h1 className="text-xl sm:text-2xl text-center font-bold mt-2">
                {d.name}
              </h1>
            </div>
          ))}
        </Slider>
      </div>
      <div className="my-8 py-4">
        <Work />
      </div>
      <div className="my-12 py-4">
        <PeopleSay />
      </div>
      <div className="my-12 py-4">
        <ContactUs />
      </div>
    </PageLayout>
  );
};

export default Home;

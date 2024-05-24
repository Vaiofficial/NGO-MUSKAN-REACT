import React from "react";
import PageLayout from "../components/PageLayout";
import backgroundImage1 from "../images/slider1.png"; // Import your image
import AnimalCare from "../images/AnimalCare.jpg";
import FoodDonation from "../images/FoodDonate.jpg";
import OldAgeCare from "../images/OldAgeCare.jpg";
import PlantCare from "../images/PlantCare.jpg";
import Education from "../images/education.jpg";
// import backgroundImage2 from "../images/homeHeadImage.jpg";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PeopleSay from "../components/PeopleSay";
import ContactUs from "../components/ContactUs";
import Work from "../components/Work";
import "../styles/customSlider.css";

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
      <div>
        {/* #1 */}
        <div className="relative">
          <div className="w-full flex justify-center">
          <div className="absolute sm:left-0 text-center sm:text-left top-full sm:top-1/3 text-black mt-2 sm:mt-0">
            <h1 className="text-4xl sm:text-4xl whitespace-nowrap lg:text-5xl xl:text-7xl font-bold  pt-10 sm:pt-5 text-headingPink font-montserrat ">
              United for Good:
            </h1>
            <h1 className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold pb-2 pt-1 sm:py-1 text-subHeadingBlue font-montserrat">
              Building a Brighter Future for All{" "}
            </h1>
            <p className="hidden xl:block text-sm sm:text-base md:text-lg py-2 font-semibold font-roboto">
              Together, we amplify compassion and build a brighter future for
              all.
            </p>
            <div className="py-2 sm:py-3 px-3">
              <NavLink to="/donate">
                <button className="inline-block text-white font-bold py-3 px-5 rounded-full bg-gradient-to-r from-gradientStart to-gradientEnd border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">
                  Donate Now
                </button>
              </NavLink>
            </div>
          </div>
          </div>
          <img src={backgroundImage1} alt="Background" className="w-full" />
        </div>

        {/* #2 */}
        <div className="mt-60 sm:mt-20 sm:mb-0 md:mt-12 md:mb-0 px-10 sm:px-0">
          <div className="px-5 sm:px-0 text-center sm:text-left sm:items-center ">
            <h1 className=" text-3xl sm:text-4xl md:text-54xl font-bold  font-montserrat  text-headingPink uppercase">
              Who we Are - NGO MUSKAN
            </h1>
          </div>
          <div className="mt-4 mb-5 text-center sm:text-left">
            <p className="sm:px-0 text-slate-900 text-lg sm:text-2xl font-roboto font-medium ">
              NGO Muskan is a youth led N.G.O. which visions at eradicating the
              taboos and normalising menstruation by the methods of spreading
              general awareness and encouraging hygiene for the same. Our NGO
              also focuses on H.E.F.A.O.; Health, Education and Environment,
              Food, Animals, Old Age and Children.
            </p>
          </div>
          <div className="my-8 text-center sm:text-left px-3">
            <NavLink to="/about">
              <button className="inline-block text-white font-bold py-3 px-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-800 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">
                View More
              </button>
            </NavLink>
          </div>
        </div>

        {/* #3 */}
        <div className="bg-PeopleColor rounded-md mx-4 sm:-mx-6 lg:-mx-8 sm:px-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold my-4 py-4 lg:my-0 sm:pb-11 text-headingPink">
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
                  <h1 className="text-xl sm:text-2xl text-slate-800 text-center font-bold mt-2 font-roboto">
                    {d.name}
                  </h1>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* 4*/}
        <div className="">
          <Work />
        </div>

        {/* 5 */}
        <div className="my-12 py-4 sm:my-0 sm:py-0 md:mt-12 md:py-4">
          <PeopleSay />
        </div>

        {/* #6 */}
        <div className="my-12 py-4 sm:my-0">
          <ContactUs />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;

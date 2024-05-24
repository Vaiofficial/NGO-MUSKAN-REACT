import React from "react";
import PageLayout from "../components/PageLayout";
import MensurationHead from "../images/Menstruation2.jpg";
import problem1 from "../images/problem1.jpg";
import problem2 from "../images/problem2.jpg";
import problem3 from "../images/problem3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimalCare from "../images/AnimalCare.jpg";
import FoodDonation from "../images/FoodDonate.jpg";
import OldAgeCare from "../images/OldAgeCare.jpg";
import PlantCare from "../images/PlantCare.jpg";
import Education from "../images/education.jpg";
import StruggleWoman from "../images/StruggleWoman.jpg";
import { NavLink } from "react-router-dom";
import "../styles/customSlider.css";

// campaign data for sliding
const data = [
  {
    name: `Menstrual Health Workshops`,
    img: FoodDonation,
    description: `Muskan NGO organizes interactive workshops to educate women and girls about menstrual health, hygiene, and reproductive anatomy. These workshops provide crucial information on menstrual cycle management, proper hygiene practices, and debunking myths and taboos surrounding menstruation.`,
    id: 1,
  },
  {
    name: `Sanitary Pad Distribution`,
    img: OldAgeCare,
    description: `Muskan NGO provides free sanitary pads to women and girls in underprivileged communities, ensuring they can manage their periods safely and with dignity, and continue attending school or work without interruption.`,
    id: 2,
  },
  {
    name: `Community Awareness Campaigns`,
    img: PlantCare,
    description: `Muskan NGO raises awareness about menstruation, challenging stigmas through street plays, posters, and info sessions. We normalize discussions and advocate for menstrual health as integral to women's lives.`,
    id: 3,
  },
  {
    name: `School Hygiene Programs`,
    img: AnimalCare,
    description: `
    Muskan NGO educates schools on menstrual health, providing hygiene programs and advocating for clean, private toilets with proper disposal systems to support menstruating students.`,
    id: 4,
  },
  {
    name: `Advocacy and Policy Engagement`,
    img: Education,
    description: `Muskan NGO partners with policymakers to advocate for menstrual health policies. We push for menstrual hygiene education in schools, funding for sanitary pads in public spaces, and supportive workplace policies. Our aim: systemic change for menstrual equity.`,
    id: 5,
  },
];

const Mens = () => {
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
      <div className="mb-10 mt-10">
        {/* TOP section */}

        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Text section Starts Here*/}
          <div className="lg:w-1/2 lg:mr-10 mb-10 lg:mb-0 px-10 sm:px-10">
            <h1 className="text-4xl lg:text-6xl font-bold mb-5 lg:mb-10 lg:text-left font-montserrat text-headingPink">
              Menstrual Health
            </h1>
            <div>
              <p className="text-lg lg:text-xl pt-5 md:p-0 font-roboto">
                We extend a warm welcome to you, as we embark upon a purposeful
                voyage within the realm of menstrual health. In this realm, we
                confront the pressing matters of inadequate access to essential
                hygiene products and limited education, affecting countless
                women around the world. Moving forward with unwavering
                determination, we pledge to shatter the barriers of stigma and
                ignorance, as we passionately advocate for the noble cause of
                menstrual justice.
              </p>
              <p className="text-lg lg:text-xl pt-5 md:p-0 font-roboto">
                Together, let us soar towards a brighter horizon, where women's
                health, dignity, and rights flourish with unabated strength.
                Join us, dear friend, in this magnificent odyssey of
                transformation and compassion, where the power of change is
                woven into the very fabric of our being.
              </p>
            </div>
          </div>
          {/* Text section Ends Here*/}

          {/* Image section */}
          <div className="lg:w-1/2">
            <img
              src={MensurationHead}
              alt="MensurationHead"
              className="w-full"
            />
          </div>
        </div>

        {/* Issue faced Section Starts Here */}
        <div className="bg-PeopleColor rounded-md mt-10 lg:mt-20">
          <div className="px-8 py-6 lg:py-10">
            <h2 className="text-5xl font-bold mb-5 text-center font-roboto uppercase text-slate-900 uppercase">
              Issue's faced
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
              <Issue
                name="Heavy Menstrual Bleeding (Menorrhagia)"
                image={problem1}
                description=" Excessive bleeding during periods can lead to fatigue, anemia, and inconvenience, impacting overall well-being and quality of life.

                "
                profile="https://www.linkedin.com/in/sadhan-singla/"
              />
              <Issue
                name="Period Pain (Dysmenorrhea)"
                image={problem2}
                description="Many women experience cramps and discomfort during menstruation, ranging from mild to severe pain, which can interfere with daily activities."
                profile="https://www.linkedin.com/in/sadhan-singla/"
              />
              <Issue
                name="Premenstrual Syndrome (PMS)"
                image={problem3}
                description="Emotional and physical symptoms such as mood swings, irritability, bloating, and breast tenderness often occur in the days leading up to menstruation, affecting mood and productivity."
                profile="https://www.linkedin.com/in/sadhan-singla/"
              />
            </div>
          </div>
        </div>
        {/* Issue faced Section Ends Here */}

        {/* MUSKAN DOING SECTION STARTS HERE */}
        <div className="bg-PeopleColor rounded-md mt-10 sm:mt-24">
          <div className="px-8 py-6 lg:py-10">
            <h2 className="text-5xl font-bold mb-14 text-center text-slate-900 font-montserrat uppercase">
              What NGO Muskan is Doing
            </h2>
            <Slider {...settings}>
              {data.map((item) => (
                <MuskanDoing
                  key={item.id}
                  name={item.name}
                  image={item.img}
                  description={item.description}
                />
              ))}
            </Slider>
          </div>
        </div>
        {/* MUSKAN DOING SECTION ENDS HERE */}

        {/* SHARE STRUGGLES SECTION STARTS HERE */}

        <div className="flex flex-col lg:flex-row items-center justify-center mt-5">
          {/* Text section Starts Here*/}
          <div className="lg:w-1/2 lg:mr-10 mb-10 lg:mb-0 mt-10 sm:mt-0 px-10 sm:px-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-5 lg:mb-10 lg:text-left text-headingPink font-montserrat">
              SHARE YOUR STRUGGLES WITH US
            </h1>
            <div className="">
              <p className="text-lg lg:text-xl sm:text-left mb-5 font-roboto">
                Voice your opinions and share your experiences and get a chance
                to be featured in our website or be approached by our
                organization.
              </p>
            </div>
            <div className="px-3 flex justify-center sm:flex-none">
              <NavLink to="/">
                <button className="inline-block text-white font-bold py-3 px-5 rounded-full bg-gradient-to-r from-gradientStart to-gradientEnd border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">
                  Share Now
                </button>
              </NavLink>
            </div>
          </div>
          {/* Text section Ends Here*/}

          {/* Image section */}
          <div className="lg:w-1/2">
            <img src={StruggleWoman} alt="StruggleWoman" className="w-full" />
          </div>
        </div>

        {/* SHARE STRUGGLES SECTION ENDS HERE */}
      </div>
    </PageLayout>
  );
};

// ISSUES FACED SECTION FUNCTION
const Issue = ({ name, image, description }) => {
  return (
    <div className="rounded-md bg-white overflow-hidden group relative transition duration-300 ease-in-out transform hover:scale-105">
      <div
        className="w-full h-96 bg-cover bg-center rounded-md relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-lg font-semibold font-montserrat">{name}</h3>
          <p className="text-sm font-roboto">{description}</p>
        </div>
      </div>
    </div>
  );
};

// WHAT MUSKAN DOING SECTION FUNCTION
const MuskanDoing = ({ name, image, description }) => {
  return (
    <div
      className="h-96 bg-cover bg-center rounded-md relative bg-white overflow-hidden group transition duration-300 ease-in-out transform hover:scale-105 w-auto"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-semibold font-montserrat">{name}</h3>
        <p className="text-sm font-roboto">{description}</p>
      </div>
    </div>
  );
};

export default Mens;

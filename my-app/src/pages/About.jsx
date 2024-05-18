import React from "react";
import PageLayout from "../components/PageLayout";
import MensurationHead from "../images/Menstruation1.jpg";
import VolunteerImage from "../images/Volunteer.jpg";
import ChildrenImage from "../images/children.jpg";
import Aarushi from "../images/Aarushi.jpg";
import Sahdan from "../images/Sahdan.jpg";
import Saumya from "../images/Saumya.jpg";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <PageLayout>
      <div className="px-5 sm:px-10 lg:px-20">
        {/* About section */}
        <div className="flex flex-col lg:flex-row items-center justify-center py-10">
          {/* Text section */}
          <div className="lg:w-1/2 lg:mr-10 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-pink-500 py-2 sm:py-3">
              Promote menstrual equity and knowledge to empower women
            </h1>
            <div className="">
              <p className="text-lg lg:text-xl mb-5">
                Muskan is a non-governmental organization committed to creating
                a society where menstruation is no longer a taboo subject, and
                where women and girls are not discriminated against or oppressed
                because of their menstrual status.
              </p>
              <p className="text-lg lg:text-xl mb-10">
                In addition to our work in menstrual health and hygiene, we also
                focus on promoting H.E.F.A.O. - Health care, Environment
                restoration, Food, and Animal welfare - to improve the overall
                quality of life for people and animals alike.
              </p>
            </div>
          </div>
          {/* Image section */}
          <div className="lg:w-1/2">
            <img
              src={MensurationHead}
              alt="MensurationHead"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Aim section */}
        <div className="bg-PeopleColor rounded-md mt-10">
          <div className="px-8 py-6 lg:py-10">
            <h2 className="text-5xl font-bold mb-5 text-center">Our Aim</h2>
            <p className="text-lg lg:text-xl">
              Our NGO focuses on promoting menstrual health and hygiene, while
              combating the stigma attached to menstruation. We strive to
              empower women and girls by providing them with accurate
              information, affordable menstrual products, and safe and hygienic
              menstrual management facilities. Our ultimate goal is to create a
              society where menstruation is considered a natural biological
              process, free from discrimination and exclusion. Through advocacy,
              education, and community engagement, we aim to promote menstrual
              equity and ensure that every individual who menstruates is able to
              do so with dignity and respect.
            </p>
          </div>
        </div>

        {/* Our team section */}
        <div className="bg-PeopleColor rounded-md mt-10 lg:mt-20">
          <div className="px-8 py-6 lg:py-10">
            <h2 className="text-5xl font-bold mb-5 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
              <TeamMember
                name="Sadhan Singla"
                role="C.E.O"
                image={Sahdan}
                profile="https://www.linkedin.com/in/sadhan-singla/"
              />
              <TeamMember
                name="Aarushi Juneja"
                role="C.O.O"
                image={Aarushi}
                profile="https://www.linkedin.com/in/sadhan-singla/"
              />
              <TeamMember
                name="Saumya Katiyar"
                role="Media Head"
                image={Saumya}
                profile="https://www.linkedin.com/in/sadhan-singla/"
              />
            </div>
          </div>
        </div>
        
        {/* Join us & support us section */}
        <div className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Join Us */}
          <div className="rounded-md overflow-hidden group relative transition duration-300 ease-in-out transform hover:scale-105">
            <div
              className="w-full h-80 md:h-96 bg-cover bg-center rounded-md flex justify-center items-center group-hover:bg-opacity-75 transition duration-300 ease-in-out relative"
              style={{ backgroundImage: `url(${VolunteerImage})` }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <NavLink
                  to="/"
                  className="bg-DonateGreen text-white px-6 py-3 text-xl font-semibold rounded-full transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                >
                  Join Us
                </NavLink>
              </div>
            </div>
          </div>

          {/* Support Us */}
          <div className="rounded-md overflow-hidden group relative transition duration-300 ease-in-out transform hover:scale-105">
            <div
              className="w-full h-80 md:h-96 bg-cover bg-center rounded-md flex justify-center items-center group-hover:bg-opacity-75 transition duration-300 ease-in-out relative"
              style={{ backgroundImage: `url(${ChildrenImage})` }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <NavLink
                  to="/donate"
                  className="bg-DonateGreen text-white px-6 py-3 text-xl font-semibold rounded-full transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                >
                  Support Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

const TeamMember = ({ name, role, image, profile }) => {
  return (
    <div className="rounded-md bg-white overflow-hidden group relative transition duration-300 ease-in-out transform hover:scale-105">
      <div
        className="w-full h-96 bg-cover bg-top rounded-md"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="px-4 py-6 text-center">
        <h3 className="font-semibold text-2xl pb-2">{name}</h3>
        <h3 className="font-medium text-xl pb-2">{role}</h3>
        <a className="flex justify-center " href={profile}>
          <FaLinkedin size={25} />
        </a>
      </div>
    </div>
  );
};

export default About;

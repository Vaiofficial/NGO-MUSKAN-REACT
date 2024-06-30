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
      <div className="px-5 sm:px-10 lg:px-20 mb-20  ">
        {/* About section */}
        <div className="flex flex-col lg:flex-row items-center justify-center py-10">
          {/* Text section */}
          <div className="lg:w-1/2 lg:mr-10 mb-10 lg:mb-0 lg:text-left px-10 sm:px-0">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-headingPink font-montserrat py-2 sm:py-3">
              Promote menstrual equity and knowledge to empower women
            </h1>
            <div className="py-4">
              <p className="text-lg lg:text-xl mb-5 font-roboto">
                Welcome to MUSKAN, a passionate advocate for menstrual health
                and hygiene. Registered in 2003, MUSKAN is dedicated to break
                the stigma surrounding menstruation and ensuring that every
                person has access to menstrual health education, products, and
                support.
              </p>
              <p className="text-lg lg:text-xl mb-10 font-roboto">
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
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Aim section */}
        <div className="bg-PeopleColor rounded-md mt-10">
          <div className="px-8 py-6 lg:py-10">
            <h2 className="text-5xl font-bold mb-5 text-center text-slate-900 font-montserrat uppercase">
              Our Aim
            </h2>
            <p className="text-lg lg:text-xl font-roboto">
              MUSKAN’s mission is clear: to promote menstrual equity and empower
              individuals by providing them with the knowledge, resources, and
              support they need to manage their menstruation with dignity and
              confidence.
            </p>
          </div>
        </div>
        {/* What we do section */}
        <div className="bg-PeopleColor rounded-md mt-10">
          <div className="px-8 py-6 lg:py-10">
            <h2 className="text-5xl font-bold mb-5 text-center text-slate-900 font-montserrat uppercase">
              What we do
            </h2>
            <p className="text-lg lg:text-xl font-roboto">
              <p className="font-bold">Education and Awareness:</p> We conduct
              workshops, seminars, and campaigns to educate communities about
              menstrual health, debunk myths, and promote healthy practices.
            </p>
            <br />
            <p className="text-lg lg:text-xl font-roboto">
              <p className="font-bold">Access to Products:</p> We work to ensure
              that menstrual products are accessible to those who need them
              most, including through distribut
            </p>
            <br />
            <p className="text-lg lg:text-xl font-roboto">
              <p className="font-bold">Advocacy and Policy: </p>We advocate for policy changes that
              support menstrual equity and address barriers to menstrual health
              and hygiene.
            </p>
          </div>
        </div>

        {/* Our Impact */}
        {/* Aim section */}
        <div className="bg-PeopleColor rounded-md mt-10">
          <div className="px-8 py-6 lg:py-10">
            <h2 className="text-5xl font-bold mb-5 text-center text-slate-900 font-montserrat uppercase">
              Our Impact
            </h2>
            <p className="text-lg lg:text-xl font-roboto">
              Since our inception, MUSKAN has reached a number of individuals.
              Through our efforts, we have seen increased awareness, improved
            </p>
          </div>
        </div>

        {/* Our team section */}
        <div className="bg-PeopleColor rounded-md mt-10 lg:mt-20">
          <div className="px-8 py-6 lg:py-10">
            <h2 className="text-5xl font-bold mb-5 text-center font-montserrat text-slate-900 uppercase">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5 ">
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
                <NavLink to="/">
                  <button className="text-xl duration-300  opacity-0 group-hover:opacity-100 inline-block text-white font-bold py-3 px-5 rounded-full bg-gradient-to-r from-gradientStart to-gradientEnd border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">
                    Join Us
                  </button>
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
                <NavLink to="/donate">
                  <button className="text-xl duration-300  opacity-0 group-hover:opacity-100 inline-block text-white font-bold py-3 px-5 rounded-full bg-gradient-to-r from-gradientStart to-gradientEnd border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">
                    Support Us
                  </button>
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
        <h3 className="font-semibold text-2xl pb-2 font-montserrat text-slate-800">
          {name}
        </h3>
        <h3 className="font-medium text-xl pb-2">{role}</h3>
        <a className="flex justify-center " href={profile}>
          <FaLinkedin size={25} />
        </a>
      </div>
    </div>
  );
};

export default About;

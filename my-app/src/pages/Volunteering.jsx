import React from "react";
import PageLayout from "../components/PageLayout";
import ContactUs from "../components/ContactUs";
import Mens1 from "../images/mens1.jpg";
import Testi1 from "../images/Sahdan.jpg";
import Testi2 from "../images/Aarushi.jpg";
import Testi3 from "../images/Saumya.jpg";
import Testi4 from "../images/Testimonials/testi4.jpg";
import { NavLink } from "react-router-dom";

const Volunteering = () => {
  return (
    <PageLayout>
      <div className="px-5 sm:px-10 lg:px-20">
        {/* SHARE STRUGGLES SECTION STARTS HERE */}
        <div className="flex flex-col lg:flex-row items-center justify-center py-10">
          {/* Text section Starts Here */}
          <div className="lg:w-1/2 lg:mr-10 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-pink-500 mb-5 lg:mb-10">
              Join our community of passionate volunteers and make a lasting
              impact
            </h1>
            <div className="">
              <p className="text-lg lg:text-xl mb-5">
                Join our passionate community of volunteers and make a
                difference today! We believe in the power of collective action
                to bring about positive change in our society. By becoming a
                volunteer, you'll have the opportunity to contribute your
                skills, meet like-minded individuals, and make a lasting impact
                in the lives of those in need.
              </p>
            </div>
            <NavLink to="/">
              <button className="bg-DonateGreen rounded-full px-6 py-1 sm:px-7 sm:py-4 text-base sm:text-xl text-black font-semibold">
                Join Muskan
              </button>
            </NavLink>
          </div>
          {/* Text section Ends Here */}

          {/* Image section */}
          <div className="lg:w-1/2">
            <img
              src={Mens1}
              alt="StruggleWoman"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* TESTIMONIAL SECTION STARTS HERE */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial 01 */}
            <div className="flex flex-col items-center">
              <img
                className="w-80 h-80 object-cover rounded-full shadow-md mb-5"
                src={Testi1}
                alt="Sadhan Singla"
              />
              <h3 className="text-xl font-semibold mb-2">
              Sadhan Singla, Chief Executive Officer
              </h3>
              <p className="text-center text-gray-700">
                Volunteering here has been an incredibly rewarding experience.
                I've had the opportunity to connect with so many amazing
                individuals and make a tangible impact in our community. The
                sense of fulfillment I get from seeing the positive changes
                we've made together is indescribable.
              </p>
            </div>
            {/* Testimonial 02 */}
            <div className="flex flex-col items-center">
              <img
                className="w-80 h-80 object-cover rounded-full shadow-md mb-5"
                src={Testi2}
                alt="Aarushi Juneja"
              />
              <h3 className="text-xl font-semibold mb-2">
              Aarushi Juneja, Chief Operating Officer
              </h3>
              <p className="text-center text-gray-700">
                Being part of this volunteer program has been one of the best
                decisions of my life. Organizing events that bring people
                together and support those in need has been both challenging and
                immensely satisfying. The camaraderie among volunteers and the
                appreciation from the community make it all worthwhile.
              </p>
            </div>
            {/* Testimonial 03 */}
            <div className="flex flex-col items-center">
              <img
                className="w-80 h-80 object-cover rounded-full shadow-md mb-5"
                src={Testi3}
                alt="Saumya Katiyar"
              />
              <h3 className="text-xl font-semibold mb-2">
              Saumya Katiyar, Media Head
              </h3>
              <p className="text-center text-gray-700">
                As a volunteer administrative assistant, I've gained valuable
                skills and experiences that I wouldn't have found anywhere else.
                The supportive environment and the passion of my fellow
                volunteers have been truly inspiring. I feel proud to contribute
                to such meaningful work every day.
              </p>
            </div>
            {/* Testimonial 04 */}
            <div className="flex flex-col items-center">
              <img
                className="w-80 h-80 object-cover rounded-full shadow-md mb-5"
                src={Testi4}
                alt="Michael Brown"
              />
              <h3 className="text-xl font-semibold mb-2">
                Michael Brown, Volunteer Mentor
              </h3>
              <p className="text-center text-gray-700">
                Mentoring new volunteers and guiding them through their journey
                has been a highlight of my volunteering experience. Seeing their
                growth and enthusiasm reminds me of why I started volunteering
                in the first place. This program has given me a sense of purpose
                and a community that feels like family.
              </p>
            </div>
          </div>
        </div>
        {/* TESTIMONIAL SECTION ENDS HERE */}

        {/* OPPORTUNITIES SECTION STARTS HERE */}
        <div className="mt-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Volunteer Opportunities</h2>
          </div>
          <div className="space-y-10">
            {/* Opportunity 01 */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">
                Event Coordination
              </h3>
              <p className="mb-2">
                Help us organize and run community events that bring people
                together and support our cause.
              </p>
              <p className="text-gray-600">
                <strong>Requirements:</strong> Good organizational skills,
                experience in event planning is a plus.
              </p>
            </div>
            {/* Opportunity 02 */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">
                Community Outreach
              </h3>
              <p className="mb-2">
                Engage with the community to spread awareness about our programs
                and recruit new volunteers.
              </p>
              <p className="text-gray-600">
                <strong>Requirements:</strong> Excellent communication skills, a
                passion for community service.
              </p>
            </div>
            {/* Opportunity 03 */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">
                Administrative Support
              </h3>
              <p className="mb-2">
                Assist with administrative tasks such as data entry, scheduling,
                and volunteer coordination.
              </p>
              <p className="text-gray-600">
                <strong>Requirements:</strong> Attention to detail, proficiency
                with office software.
              </p>
            </div>
            {/* Opportunity 04 */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">
                Mentorship Programs
              </h3>
              <p className="mb-2">
                Guide and support new volunteers, helping them integrate and
                thrive in their roles.
              </p>
              <p className="text-gray-600">
                <strong>Requirements:</strong> Experience in a similar role,
                strong leadership and interpersonal skills.
              </p>
            </div>
          </div>
        </div>
        {/* OPPORTUNITIES SECTION ENDS HERE */}

        {/* contact us or become a volunteer sections starts here */}
        <div>
          <div className="text-center mt-20">
            <h2 className="text-4xl font-bold">Connect With Us</h2>
          </div>
          <ContactUs></ContactUs>
        </div>
        {/* contact us or become a volunteer sections ends here */}
      </div>
    </PageLayout>
  );
};

export default Volunteering;

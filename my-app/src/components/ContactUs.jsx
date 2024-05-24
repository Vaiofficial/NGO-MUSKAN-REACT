import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Mens3 from "../images/mens3.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "../images/User3.png"

const notify = () => {
  toast.success("Message Sent ♥", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const ContactUs = () => {
  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      toast.error("Please fill out all fields!");
      return;
    }

    console.log("Form submitted:", form.current);
    emailjs
      .sendForm("service_coxtn19", "template_hmn7yvn", form.current, {
        publicKey: "2MhevjZbpRmDh29sF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Reset the form after successful submission
          form.current.reset();
          console.log("form is cleared");
          notify();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-wrap sm:mt-20 ">
      {/* Left side form */}
      <div className="w-full md:w-1/2 sm:p-4">
        <form
          ref={form}
          onSubmit={handleFormSubmit}
          className="max-w-md mx-auto border border-gray-300 rounded-lg px-8 pt-6 pb-8 mb-4 shadow-lg"
        >
          <div className="text-center mb-8">
            <h1 className="font-bold text-2xl sm:text-2xl mb-4 text-slate-800 font-montserrat">
              Become a Volunteer
            </h1>
            <img
              src={User}
              alt=""
              className="hidden md:block mx-auto rounded-full w-20 h-20"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 font-roboto" htmlFor="user_name">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 font-montserrat" htmlFor="user_email">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 font-montserrat" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-montserrat"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-3 md:px-4 py-1 md:py-2 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-700"
            >
              Send
            </button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </form>
      </div>
      {/* Right side image */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src={Mens3}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactUs;

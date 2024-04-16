import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import EducationImage from "../images/education.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div className="flex flex-wrap mt-10 sm:mt-20">
      {/* Left side form */}
      <div className="w-full md:w-1/2 p-4">
        <form
          ref={form}
          onSubmit={handleFormSubmit}
          className="max-w-fit mx-auto rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="text-center mb-14">
            <h1 className="font-bold text-4xl">Become a Volunteer</h1>
            <img
              src={EducationImage}
              alt="Education"
              className="hidden md:block mx-auto mt-14 rounded-full w-32 h-32"
            />
          </div>
          <div className="mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </div>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </div>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </div>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
      <div className="w-full md:w-1/2">
        <img
          src={EducationImage}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ContactUs;

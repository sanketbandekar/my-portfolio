import React from "react";
import HorizSocialLinks from "./HorizSocialLinks";

const Contacts = () => {
  return (
    <div
      name="Contact"
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <form
            action="https://getform.io/f/04b20075-2f61-4c2f-90dd-2485f6ffa277"
            method="POST"
            className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter
                your name"
              className="p-2 bg-transparent border-2 rounded-md
                text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter
                your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md
                text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter Your Message Here"
              className="p-2 bg-transparent border-2 rounded-md
                text-white focus:outline-none"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 
                to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Lets's talk
            </button>
          </form>
          <div className="md:hidden">
            <HorizSocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

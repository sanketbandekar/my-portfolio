import React from "react";
import sanket from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full  bg-gradient-to-b from-slate-900 via-slate-900 to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full px-3">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Welcome To My <br />
            Personal Portfolio
          </h2>
          <p className="text-gray-500 py-4 max-w-lg text-lg">
            Aspiring Software Developer, focused on building user friendly
            application. Click on learn more to get more details.
          </p>
          <p className="text-gray-500 py-4 max-w-lg text-2xl font-bold">
            #open to work
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-full md:w-fit px-6 py-3 my-2 flex items-center justify-center rounded-3xl md:rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Learn More
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-20 md:mt-0">
          <img
            src={sanket}
            alt="My Profile"
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

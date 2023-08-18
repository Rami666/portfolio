import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black">
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row ">
        <div className="flex flex-col justify-center h-full pt-20">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">I'm a Full Stack Developer</h2>
          <p className="max-w-md py-4 text-gray-500">
            i have 8 years of experience building and desgining software.
            currently, i love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL
          </p>
          <div>
            <button className="flex items-center px-6 py-3 my-2 text-white rounded-md w-fit bg-gradient-to-r from-cyan-500 to-blue-500 group">
              Portfolio{" "}
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="">
            <img src={HeroImage} alt="my profile" className="pb-20 h-118 w-96" />
        </div>
      </div>
    </div>
  );
};

export default Home;

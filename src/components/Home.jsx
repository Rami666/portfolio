import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen pt-20 bg-gradient-to-b from-black to-gray-800 via-black">
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center h-full pt-12">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">I'm a Full Stack Developer</h2>
          <br />
          <p className="max-w-md text-gray-500">
          I am a highly motivated Jr. Web Developer with experience in both backend and frontend development. My goal is to create fast, reliable, and user-friendly web applications. Eager to deliver high-quality solutions that meet the needs of your clients and users.
          </p>
          <div>
            <br />
            <Link to="portfolio" smooth duration={500} className="flex items-center px-6 py-3 my-2 text-white rounded-md w-fit bg-gradient-to-r from-cyan-500 to-blue-500 group">
              Portfolio{" "}
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="">
            <img src={HeroImage} alt="my profile" className=" mt-9 h-118 w-96 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;

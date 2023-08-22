import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen pt-20 text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pt-20 mx-auto">
        <div className="pt-20">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="mt-5 text-xl">
        As a Junior Web Developer, I bring together a fusion of creative flair and technical expertise. My mission is straightforward: to craft web applications that excel in speed, reliability, and user-friendliness, ultimately leaving users delighted.
          <br />
          <br />
          Dedicated to delivering top-notch solutions that harmonize seamlessly with the requirements of both clients and end-users, I possess a well-rounded skill set encompassing both backend and frontend development. My proficiency in the MERN Stack serves as a strong foundation.
          <br />
          <br />
          Beyond my technical capabilities, I thrive on problem-solving and collaboration. I relish the challenge of finding innovative solutions to complex issues, and I'm eager to work alongside talented teams to bring digital visions to life. Through a journey marked by continual learning and growth, I've honed my abilities to confront intricate challenges in the dynamic landscape of web development.
        </p>
        <br />
        <p className="text-xl">
        Let's connect and turn ideas into digital reality.
        </p>
      </div>
    </div>
  );
}

export default About;

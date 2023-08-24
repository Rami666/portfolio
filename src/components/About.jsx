import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full text-white bg-gradient-to-b from-gray-800 to-black" 
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pt-20 mx-auto">
        <div className="pt-20">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="mt-5 text-xl">
        “I’m Rami Bahseer, a Full Stack Web Developer based in Berlin. I have solid problem-solving skills and proven experience in creating and designing software in a test-driven environment. I have completed a web programming and software development course at DCI - Digital Career Institute GmbH where I learned HTML, CSS, JavaScript, React Framework, advanced database development, software development, agile project management, and database management
          <br />
          <br />
          Dedicated to delivering top-notch solutions that harmonize seamlessly with the requirements of both clients and end-users, I possess a well-rounded skill set encompassing both backend and frontend development. My proficiency in the MERN Stack serves as a strong foundation.
          <br />
          
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

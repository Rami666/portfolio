import React from "react";
import quizapp from "../assets/portfolio/quizapp.jpg";
import gooddeed from "../assets/portfolio/good-deed.jpg";
import calculator from "../assets/portfolio/calculatorapp.jpg";
import chatapp from "../assets/portfolio/chatapp.png";
import excuseapp from "../assets/portfolio/excuseapp.png";
import weatherapp from "../assets/portfolio/weatherapp.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: quizapp,
      href: "https://danzekram-quiz-game.netlify.app/",
      href2: "https://github.com/ezekielbuzzi/quiz-app",
    },
    {
      id: 2,
      src: gooddeed,
      href2: "https://github.com/LalaChristl/GoodDeeds",
    },
    {
      id: 3,
      src: calculator,
      href: "https://eloquent-chebakia-b37ed1.netlify.app/",
      href2: "https://github.com/Rami666/calculator-",
    },
    {
      id: 4,
      src: chatapp,
      href2: "https://github.com/LalaChristl/ChatLHR",
    },
    {
      id: 5,
      src: excuseapp,
      href: "https://63a9a9bfb865f3200c51c80f--monumental-cupcake-31e134.netlify.app/",
      href2: "https://github.com/Rami666/Excuse",
    },
    {
      id: 6,
      src: weatherapp,
      href: "https://effervescent-bonbon-921d7e.netlify.app/",
      href2: "https://github.com/Rami666/weather-app",
    },
  ];
  const handleDemoClick = (href) => {
    if (href) {
      window.open(href);
    }
  };
  const handleCodeClick = (href2) => {
    if (href2) {
      window.open(href2);
    }
  };

  return (
    <div
      name="portfolio"
      className="w-full pt-20 pb-20 text-white bg-gradient-to-b from-black to-gray-800 md:h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pt-20 mx-auto">
        <div className="pt-20 pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid gap-10 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {portfolios.map(({ id, src, href, href2 }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="duration-200 rounded-md hover:scale-105"
              />
              <div className="flex justify-center item-center">
                <button
                  onClick={() => handleDemoClick(href)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeClick(href2)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

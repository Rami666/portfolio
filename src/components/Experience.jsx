import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import scss from "../assets/scss.png";

function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-500",
    },
    {
      id: 7,
      src: node,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: mongo,
      title: "Mongo DB",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-500",
    },
    {
        id: 11,
        src: scss,
        title: "SCSS",
        style: "shadow-pink-500",
        },
  ];
  return (
    <div
      name="experience"
      className="w-full h-screen pt-20 bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
        <div>
          <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

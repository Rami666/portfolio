import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">About</p>
        </div>
        <p className="mt-20 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          placeat hic, animi recusandae aspernatur quaerat voluptatem explicabo
          deleniti! Officiis blanditiis veritatis molestias dolorem totam vitae
          voluptatem error impedit. Nulla, labore.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit am et, consectetur adipisicing elit. Aliquid
          placeat hic, animi recusandae aspernatur quaerat voluptatem explicabo
          deleniti! Officiis blanditiis veritatis molestias dolorem totam vitae
          voluptatem error impedit. Nulla, labore.
        </p>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import about from "../data/About.json";
function About() {
  return (
    <div
      name="About"
      className="h-auto md:p-20 p-4 w-full bg-gradient-to-b from-blue-950  to-black"
    >
      <h1 className="text-3xl border-b-4 border-gray-400 pt-10 inline text-white">
        About
      </h1>
      <div className="pt-14 md:pl-4 md:text-xl text-gray-400">
        <p className="mt-4">
          {about.description}
        </p>
      </div>
    </div>
  );
}

export default About;

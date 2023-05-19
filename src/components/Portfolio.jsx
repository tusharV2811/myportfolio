import React from "react";
import temp from "../data/Portfolio";

function Portfolio() {
  return (
    <div
      name="Portfolio"
      className="md:pl-20 pl-4 pb-32 pt-20 relative bg-gradient-to-b from-black to-blue-950 w-full text-white h-auto"
    >
      <div className="mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-3xl border-b-4 border-gray-400 pt-10 inline text-white">
            Portfolio
          </p>
          <p className="py-6">Check out these !</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 justify-center px-12 gap-8">
          {temp.map((i) => (
            <div
              key={i.id}
              className="mt-8 border-white shadow-md shadow-slate-400 rounded-md p-2 justify-between hover:scale-110 duration-200"
            >
              <img src={i.img} alt="" className="w-fit " />
              <div className="mt-4 mb-1 text-gray-400 flex flex-row justify-center">
                <a
                  href="https://ankit5054.github.io/Todo_with_react/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className=" py-2 px-2 text-center w-fit rounded-md shadow-md hover:scale-110 duration-200 shadow-gray-500 mx-4">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/ankit5054/Todo_with_react"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className=" py-2 px-2 text-center w-fit rounded-md shadow-md hover:scale-110 duration-200 shadow-gray-500 mx-4">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

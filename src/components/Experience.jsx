import React from "react";

import { RxDownload } from "react-icons/rx";
import temp from '../data/Experience'


function Experience() {
  // let temp = [
  //   {
  //     id: 1,
  //     img: html,
  //     style: "shadow-red-500",
  //     title: "HTML",
  //   },
  //   {
  //     id: 2,
  //     img: css,
  //     style: "shadow-blue-500",
  //     title: "CSS",
  //   },
  //   {
  //     id: 3,
  //     img: javascript,
  //     style: "shadow-yellow-300",
  //     title: "JavaScript",
  //   },
  //   {
  //     id: 4,
  //     img: reactImage,
  //     style: "shadow-blue-600",
  //     title: "React",
  //   },
  //   // {
  //   //   id: 5,
  //   //   img: nextjs,
  //   //   style: "shadow-red-500",
  //   //   title: "NextJs",
  //   // },
  //   {
  //     id: 6,
  //     img: graphql,
  //     style: "shadow-pink-500",
  //     title: "GraphQL",
  //   },
  //   {
  //     id: 7,
  //     img: github,
  //     style: "shadow-gray-400",
  //     title: "Github",
  //   },
  //   {
  //     id: 8,
  //     img: tailwind,
  //     style: "shadow-sky-300",
  //     title: "Tailwind CSS",
  //   },
  //   {
  //     id: 9,
  //     img: node,
  //     style: "shadow-green-400",
  //     title: "NodeJS",
  //   },
  // ];
  return (
    <div
      name="Experience"
      className="md:pl-20 pl-4 pb-32 pt-16 relative bg-gradient-to-b from-blue-950 to-black w-full text-white h-auto"
    >
      <div>
        <div className="mx-auto flex flex-col w-full h-full">
          <div className="pb-4">
            <p className="text-3xl border-b-4 border-gray-400  inline text-white">
              Experience
            </p>
            <p className="py-6">Technologies that I've worked with</p>
          </div>
          {/* <div> */}
        </div>{" "}
        <div className="flex flex-row flex-wrap justify-evenly">
          {temp.map((i) => (
            <div
              key={i.id}
              className={`mt-12 flex flex-col border-white shadow-lg rounded-md p-2 items-center hover:scale-105 duration-200 ${i.style}`}
            >
              <img src={i.img} alt="" className="w-1/3" />
              <p className="pt-3">{i.title}</p>
            </div>
          ))}
          {/* </div> */}
        </div>
        <div className="mx-auto pt-8 font-semibold flex flex-col w-full h-full">
          <div className="pb-4">
            <p className="py-6">* Please refer resume for complete details.</p>
          </div>
          <div className="md:hidden">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1RUJ8f5x68dAGKd9MuMU-ZbffT22gfzMr/view?usp=share_link"
              download={true}
              className=""
            >
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                <div className="flex flex-row justify-evenly gap-5 ">
                  <div>Resume</div>
                  <div>
                    <RxDownload className="" size={25} />
                  </div>
                </div>
              </button>
            </a>
          </div>
          {/* <div> */}
        </div>{" "}
        {/* </div> */}
      </div>
    </div>
  );
}


export default Experience;

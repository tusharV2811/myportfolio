import React from "react";
import {  FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {GoFilePdf} from 'react-icons/go'
import be from "../assets/be.png";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/tushar-verma-5103081b2/",
    },
    {
      id: 2,
      child: (
        <>
          Behance <img src={be} alt="" />
        </>
      ),
      href: "https://www.behance.net/tush_97",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail  size={30} />
        </>
      ),
      href: "mailto:tusharverma159@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <GoFilePdf size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1WR4Ojl7gfB1Jv3-Vq05x_5A-QFYOtF8x/view?usp=share_link",
      download: true,
    },
  ];

  return (
    <div className="hidden md:flex flex-col top-[30%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className="flex justify-between items-center w-40 h-14  px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300"
          >
            <a
              rel="noreferrer"
              target="_blank"
              href={link.href}
              download={link.download}
              className="flex justify-between items-center w-full text-white"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;

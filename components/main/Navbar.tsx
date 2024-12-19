import Image from "next/image";
import React from "react";
import { Socials } from "../constants";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-max-[1284px] h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-[45px] flex flex-row items-center"
        >
          <Image
            src="/image.png"
            alt="logo"
            width={80}
            height={50}
            className="cursor-pointer hover:animate-slowspin rounded-full"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Otgonbaatar
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5 cursor-pointer">
          {Socials.map((social) => (
            <div key={social.name} className="group">
              <Image
                className="group-hover:brightness-125 transition duration-300"
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

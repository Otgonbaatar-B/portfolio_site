"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="md:flex items-center justify-center mt-40 w-full z-[20] flex-row gap-5 md:gap-0"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto items-center md:items-start text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-1 border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            the best
          </span>
          project experience
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full-Stack Developer with experience in Website, Mobile,
          and Software development. check out my projects and skills
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px]"
        >
          Learn more
        </motion.a>
        {/* <button
          type="submit"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 border-5 border-yellow-400 p-4 rounded-full overflow-hidden bg-blue-500 hover:bg-yellow-400 transition-all duration-500 cursor-pointer"
        >
          <i className="fa fa-paper-plane-o fa-2x absolute top-3 left-8 text-white transition-all duration-500"></i>
          <i className="fa fa-paper-plane-o fa-2x absolute top-20 left-8 text-gray-600 transition-all duration-500"></i>
          <p className="text-white uppercase text-center font-bold text-xl ml-8 transition-all duration-500 hover:text-gray-600">
            send
          </p>
        </button> */}
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-end items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={600}
          width={600}
        />
        {/* <div className="home_img w-96 h-96"></div> */}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

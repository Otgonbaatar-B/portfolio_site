import React from "react";
import HeroContent from "../sub/HeroContent";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full justify-center items-center">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-420px] left-0 z-[-1] w-full h-auto object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      <Contact />
    </div>
  );
};

export default Hero;

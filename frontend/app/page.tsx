"use client";
import React from "react";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/Contact";
import ProjectsSection from "@/components/main/Project";
import ScrollProgressBar from "@/components/sub/ScrollIndicator";
import FloatingChatBot from "@/components/main/ChatBot";
import Experience from "@/components/main/Experience";

export default function Home() {
  return (
    <>
      {/* <ScrollIndicator /> */}
      <ScrollProgressBar />
      <main className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col items-center justify-center w-max-[1280px] gap-52 px-5 md:px-0">
          <Hero />
          <Experience />
          <Skills />
          <ProjectsSection />
          <Contact />
        </div>
      </main>
      <FloatingChatBot />
    </>
  );
}

"use client";
import React from "react";
import Hero from "@/components/main/Hero";
import Experience from "@/components/main/Experience";
import Skills from "@/components/main/Skills";
import FloatingChatBot from "@/components/ChatBot";
import Contact from "@/components/main/Contact";
import ScrollProgressBar from "@/components/main/ScrollIndicator";
import ProjectsSection from "@/components/main/Project";

export default function Home() {
  return (
    <>
      {/* <ScrollIndicator /> */}
      <ScrollProgressBar />
      <main className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col items-center justify-center w-max-[1280px] gap-20 px-5 md:px-0">
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

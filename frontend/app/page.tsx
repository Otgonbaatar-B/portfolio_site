"use client";
import React from "react";
import Hero from "@/components/main/Hero";
import Experience from "@/components/main/Experience";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/Contact";
import ProjectsSection from "@/components/main/Project";
import ScrollProgressBar from "@/components/sub/ScrollIndicator";
import FloatingChatBot from "@/components/main/ChatBot";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <>
      {/* <ScrollIndicator /> */}
      <ScrollProgressBar />
      <main className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col items-center justify-center w-max-[1280px] gap-32 px-5 md:px-0">
          <Hero />
          <Experience />
          <Skills />
          <ProjectsSection />
          <Contact />
          <Footer />
        </div>
      </main>
      <FloatingChatBot />
    </>
  );
}

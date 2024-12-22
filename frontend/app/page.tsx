import Cursor from "@/components/Cursor";
import Contact from "@/components/main/Contact";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  return (
    <>
      {/* Animated Cursor */}
      {/* <AnimatedCursor /> */}
      {/* <Cursor /> */}
      {/* Main Content */}
      <main className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col items-center justify-center w-max-[1280px] gap-20 px-5 md:px-0">
          <Hero />
          <Experience />
          <Skills />
          <Contact />
          {/* <SocialIcons /> */}
        </div>
      </main>
    </>
  );
}

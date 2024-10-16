import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex flex-col items-center justify-center w-max-[1280px] gap-20 px-5 md:px-0">
        <Hero />
        <Experience />
      </div>
    </main>
  );
}

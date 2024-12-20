import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { workExperience } from "../constants";
import { Button } from "../ui/MovingBorders";

const Experience = () => {
  return (
    <div className="flex flex-col m-auto w-full my-40 justify-center items-center">
      <h1 className="font-bold text-4xl md:text-5xl text-center text-white">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          work experience
        </span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail} // Use Next.js Image component
                alt={card.title} // Use card.title for better alt text
                className="lg:w-32 md:w-20 w-16"
                width={128} // Specify width (appropriate size)
                height={128} // Specify height (appropriate size)
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-gray-300 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;

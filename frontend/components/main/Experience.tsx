import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { workExperience } from "../constants";
import { Button } from "../ui/MovingBorders";
import SectionTitle from "../sub/SectionTitle";
import { BrainCircuitIcon } from "lucide-react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col m-auto w-full justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title="Experience" icon={<BrainCircuitIcon />} />
      </motion.div>

      <div className="max-w-[1280px] mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <Button
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
                  src={card.thumbnail}
                  alt={card.title}
                  className="lg:w-32 md:w-20 w-16"
                  width={128}
                  height={128}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

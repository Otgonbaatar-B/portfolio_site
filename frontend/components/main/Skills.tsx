import React from "react";
import { motion } from "framer-motion";
import { Code2Icon } from "lucide-react";
import SectionTitle from "../sub/SectionTitle";
import SkillCard from "../sub/SkillCard";
import { skillsData } from "../constants";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col m-auto w-full justify-center items-center gap-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center"
      >
        <SectionTitle title="Skills" icon={<Code2Icon />} />
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-7xl">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            icon={skill.icon}
            items={skill.items}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

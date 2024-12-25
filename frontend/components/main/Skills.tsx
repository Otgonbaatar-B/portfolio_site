import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      icon: Code2,
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C++",
        "PHP",
        "Ruby",
        "Swift",
        "Go",
      ],
    },
    {
      title: "Frameworks & Technologies",
      icon: Wrench,
      items: [
        "React",
        "Next.js",
        "Vue",
        "Angular",
        "Node.js",
        "Django",
        "Laravel",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Databases & APIs",
      icon: Database,
      items: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "GraphQL",
        "REST",
        "Firebase",
        "Supabase",
        "AWS",
      ],
    },
  ];
  return (
    <div className="flex flex-col m-auto w-full my-20 justify-center items-center gap-8 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-bold text-4xl md:text-5xl text-center mb-8"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 animate-gradient">
          Technical Skills
        </span>
      </motion.h1>
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

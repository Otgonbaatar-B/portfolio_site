import React from "react";
import { motion } from "framer-motion";
import { Code2, Code2Icon, Database, Wrench } from "lucide-react";
import SkillCard from "./SkillCard";
import SectionTitle from "../sub/SectionTitle";

const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages & Deploymend Tools",
      icon: Code2,
      items: [
        "JavaScript",
        "TypeScript",
        "C#",
        "Git",
        "Render",
        "Vercel",
        "Cloudflare",
      ],
    },
    {
      title: "Frameworks & Technologies",
      icon: Wrench,
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Daisy UI",
        "Node.js",
        "Material UI",
        ".NET",
        "DevExpress",
      ],
    },
    {
      title: "Databases & APIs",
      icon: Database,
      items: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Express JS",
        "GraphQL",
        "REST",
        "Firebase",
        "Supabase",
        "AWS",
      ],
    },
  ];

  return (
    <div className="flex flex-col m-auto w-full justify-center items-center gap-8">
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

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../sub/SectionTitle";
import { Rocket, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../constants";
import ProjectCard from "../sub/ProjectsCard";

export type Project = {
  id: string;
  title: string;
  desc: string;
  thumbnail: string;
  tech: string[];
  link: string;
  color: string;
};

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="h-auto w-full bg-transparent relative overflow-hidden py-4"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/50 via-neutral-950/25 to-neutral-950/50 backdrop-blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <SectionTitle title="Projects" icon={<Rocket />} />
          </motion.div>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="sync">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredId === project.id}
                onHover={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 bg-gradient-to-r border border-[#2A0E61]/50 shadow-lg shadow-[#7042f861] backdrop-blur-md text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <span className="font-medium">
              {showAll ? "Show Less" : "View More Projects"}
            </span>
            {showAll ? (
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            )}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;

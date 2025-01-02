import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "../main/Project";

type ProjectCardProps = {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
};

const ProjectCard = ({
  project,
  index,
  isHovered,
  onHover,
  onHoverEnd,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onHoverStart={onHover}
      onHoverEnd={onHoverEnd}
      className="relative group"
    >
      <div className="relative h-[280px] rounded-xl overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay visible on both hover and mobile */}
        <div
          className={`
          absolute inset-0 
          bg-gradient-to-b from-transparent to-black/90
          opacity-100 md:opacity-0 md:group-hover:opacity-100 
          transition-opacity duration-300
        `}
        >
          <div className="absolute bottom-0 w-full p-4">
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-200 text-sm mb-3">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-white/10 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

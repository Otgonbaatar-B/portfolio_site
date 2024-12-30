import { Project } from "../main/Project";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({
  project,
  index,
  isHovered,
  onHover,
  onHoverEnd,
}: {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={onHover}
      onHoverEnd={onHoverEnd}
      className="relative group"
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-900"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-[320px] w-full">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-300`}
          />
        </div>

        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="text-gray-200 text-sm line-clamp-3"
            >
              {project.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all"
            >
              View Project
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300 -z-10" />
    </motion.div>
  );
};

export default ProjectCard;

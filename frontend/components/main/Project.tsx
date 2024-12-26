import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../sub/SectionTitle";
import { Rocket } from "lucide-react";

type Project = {
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

  const projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      desc: "MERN Stack ашиглан хийсэн бүрэн функционалтай онлайн худалдааны платформ. Redux, Stripe payment, админ хянах самбар",
      thumbnail: "/images/ecommerce-project.jpg", // Moved to public/images folder
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      color: "from-purple-600 to-blue-500",
    },
    {
      id: "2",
      title: "Social Media App",
      desc: "NextJS 14, Server Actions ашигласан орчин үеийн нийгмийн сүлжээний платформ. Real-time чат, пост, түүх оруулах боломжтой",
      thumbnail: "/images/social-project.jpg", // Moved to public/images folder
      tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
      link: "#",
      color: "from-pink-600 to-purple-500",
    },
    {
      id: "3",
      title: "Task Management",
      desc: "TypeScript, Zustand ашиглан хийсэн drag and drop боломжтой таск менежментийн систем. Dark/light theme, mobile responsive",
      thumbnail: "/images/task-project.jpg", // Moved to public/images folder
      tech: ["TypeScript", "React", "Zustand", "TailwindCSS"],
      link: "#",
      color: "from-orange-600 to-pink-500",
    },
    {
      id: "4",
      title: "AI Chat Application",
      desc: "OpenAI API ашиглан хийсэн AI чат апп. Voice recognition, чатын түүх хадгалах, файл хуваалцах боломжтой",
      thumbnail: "/images/ai-project.jpg", // Moved to public/images folder
      tech: ["Next.js", "OpenAI", "Firebase", "Tailwind"],
      link: "#",
      color: "from-green-600 to-teal-500",
    },
  ];

  return (
    <section className="min-h-screen max-w-[1280px] bg-transparent py-20 relative overflow-hidden">
      {/* Improved background gradient */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/50 via-neutral-950/25 to-neutral-950/50 backdrop-blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[1280px] mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <SectionTitle title="Project" icon={<Rocket />} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredId === project.id}
              onHover={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Separate ProjectCard component for better organization
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={onHover}
      onHoverEnd={onHoverEnd}
      className="relative group"
    >
      <motion.div
        className="relative rounded-xl overflow-hidden shadow-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-[300px] w-full">
          <Image
            src="/api/placeholder/400/300" // Using placeholder image API
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}
          />
        </div>

        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.h3 className="text-xl md:text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className="text-gray-100 text-sm mb-4"
          >
            {project.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {project.tech.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.a
            href={project.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg transform hover:scale-105 transition-transform"
          >
            View Project
          </motion.a>
        </div>
      </motion.div>

      {/* Enhanced decorative elements */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 -z-10" />
    </motion.div>
  );
};

export default ProjectsSection;

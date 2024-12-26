import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      desc: "MERN Stack ашиглан хийсэн бүрэн функционалтай онлайн худалдааны платформ. Redux, Stripe payment, админ хянах самбар",
      thumbnail:
        "https://media.istockphoto.com/id/1226413184/video/4k-programming-and-coding.jpg?s=640x640&k=20&c=-XQwf36UP7AxCaKXCoeCKfFxL5cF654455C0Yi6QX6k=",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      color: "from-purple-600 to-blue-500",
    },
    {
      id: "2",
      title: "Social Media App",
      desc: "NextJS 14, Server Actions ашигласан орчин үеийн нийгмийн сүлжээний платформ. Real-time чат, пост, түүх оруулах боломжтой",
      thumbnail: "./bg-software.jpg",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
      link: "#",
      color: "from-pink-600 to-purple-500",
    },
    {
      id: "3",
      title: "Task Management",
      desc: "TypeScript, Zustand ашиглан хийсэн drag and drop боломжтой таск менежментийн систем. Dark/light theme, mobile responsive",
      thumbnail: "./bg-software.jpg",
      tech: ["TypeScript", "React", "Zustand", "TailwindCSS"],
      link: "#",
      color: "from-orange-600 to-pink-500",
    },
    {
      id: "4",
      title: "AI Chat Application",
      desc: "OpenAI API ашиглан хийсэн AI чат апп. Voice recognition, чатын түүх хадгалах, файл хуваалцах боломжтой",
      thumbnail: "./bg-software.jpg",
      tech: ["Next.js", "OpenAI", "Firebase", "Tailwind"],
      link: "#",
      color: "from-green-600 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen max-w-[1280px] bg-transparent py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
              My Projects
            </h2>
            <div className="h-1 w-40 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
          >
            Өөрийн хийсэн төслүүд болон бүтээлүүд. Бүх төсл нь нээлттэй эх
            кодтой бөгөөд GitHub дээр байршуулсан.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group"
            >
              <motion.div
                className={`
                  relative rounded-xl overflow-hidden
                  before:absolute before:inset-0 
                  before:bg-gradient-to-r before:${project.color} before:opacity-0
                  before:transition-opacity before:duration-300
                  group-hover:before:opacity-90
                `}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-[300px] object-cover"
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                      y: hoveredId === project.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-100 text-sm mb-4"
                  >
                    {project.desc}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                      y: hoveredId === project.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.tech.map((tech, idx) => (
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
                      opacity: hoveredId === project.id ? 1 : 0,
                      y: hoveredId === project.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg transform hover:scale-105 transition-transform"
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;

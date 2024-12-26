import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";
const slideInFromTop = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};
const glowAnimation = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
}
const SectionTitle = ({
  title,
  icon = <SparklesIcon />,
}: SectionTitleProps) => {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="relative"
      >
        <motion.div
          variants={glowAnimation}
          className="py-2 px-6 border rounded-full bg-[#0F0F1A] border-[#7042f88b]
           shadow-[0_0_15px_rgba(112,66,248,0.25)] backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-6 text-[#b49bff]"
            >
              {icon}
            </motion.div>
            <h2
              className="text-sm sm:text-base font-medium tracking-wide
             text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              {title}
            </h2>
            <div className="flex gap-1 ml-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-1 h-1 rounded-full bg-[#b49bff]"
                />
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 -z-10 blur-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full"
        />
      </motion.div>
    </div>
  );
};
export default SectionTitle;

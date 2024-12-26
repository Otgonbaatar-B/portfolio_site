import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001,
  });

  const glowOpacity = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.3, 0.8, 0.3]
  );

  const barWidth = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["3px", "4px", "3px"]
  );

  // Always declare useTransform hooks unconditionally
  const indicatorPosition = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed left-4 top-[40%] -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -20,
      }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-52 flex justify-center items-center"
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-8 h-full rounded-full blur-xl"
          style={{
            background: "linear-gradient(to bottom, #4f46e5, #7c3aed, #2563eb)",
            opacity: glowOpacity,
          }}
        />
        <div className="w-0.5 h-full rounded-full bg-white/10 backdrop-blur-md" />
        <motion.div
          className="absolute bottom-0 -translate-x-1/2 rounded-full bg-gradient-to-t from-indigo-600 via-purple-500 to-blue-500"
          style={{
            width: barWidth,
            height: "100%",
            scaleY: smoothProgress,
            transformOrigin: "bottom",
            filter: "drop-shadow(0 0 8px rgba(124, 58, 237, 0.5))",
          }}
        />
        <motion.div
          className="absolute -translate-x-1/2 w-6 h-6"
          style={{
            top: indicatorPosition,
            y: "-50%",
          }}
        >
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 rounded-full border-2 border-cyan-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                delay: ring * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <motion.div
            className="absolute left-1/2 top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500"
            animate={{
              boxShadow: [
                "0 0 10px #22d3ee",
                "0 0 20px #22d3ee",
                "0 0 10px #22d3ee",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <div className="absolute -left-4 h-full flex flex-col justify-between py-2">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="w-2 h-0.5 bg-purple-300/50 rounded-full" />
              <div className="w-1 h-0.5 bg-purple-300/30 rounded-full" />
            </motion.div>
          ))}
        </div>
        {isHovered && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full"
            initial={{ scale: 0.5, opacity: 0.5 }}
            animate={{
              scale: 1.5,
              opacity: 0,
              transition: { repeat: Infinity, duration: 1.5 },
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)",
              top: indicatorPosition,
              y: "-50%",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default ScrollProgressBar;

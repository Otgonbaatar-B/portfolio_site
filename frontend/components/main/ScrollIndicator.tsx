import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Create a transformed value for the percentage
  const percentage = useTransform(scrollYProgress, (value) =>
    Math.round(value * 100)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      {/* Progress Bar Track */}
      <div className="w-1 h-40 rounded-full bg-gray-800/50 backdrop-blur-sm relative">
        {/* Animated progress bar */}
        <motion.div
          className={`absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-purple-500 to-cyan-500 ${
            isVisible ? "opacity-100" : "opacity-50"
          }`}
          style={{
            scaleY: scrollYProgress,
            transformOrigin: "bottom",
          }}
        />

        {/* Scroll percentage number */}
        <motion.div
          className="absolute -left-8 text-white font-light text-xs"
          style={{
            top: useTransform(
              scrollYProgress,
              (value) => `calc(${value * 100}% - 20px)`
            ),
          }}
        >
          {/* Using motion.div to subscribe to the MotionValue */}
          <motion.div>{percentage}</motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;

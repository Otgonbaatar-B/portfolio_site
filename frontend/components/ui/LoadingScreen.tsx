import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
  id: string;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  duration: number;
}

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    setIsLoading(true);

    // Create floating bubbles effect with unique IDs
    const createBubbles = () => {
      const newBubbles = [...Array(15)].map((_, index) => ({
        id: `bubble-${Date.now()}-${index}`, // Unique ID for each bubble
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 2 + 2,
      }));
      setBubbles(newBubbles);
    };

    createBubbles();
    const bubbleInterval = setInterval(createBubbles, 3000);

    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 0.5;
      });
    }, 20);

    // Cleanup
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (!hasVisited) {
        localStorage.setItem("hasVisited", "true");
      }
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      clearInterval(bubbleInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="sync">
      <motion.div
        key="loading-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        ref={containerRef}
      >
        {/* Dynamic background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,65,81,0.5)_0%,rgba(17,24,39,0.8)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1),rgba(147,51,234,0.1))]" />
        </div>

        {/* Animated bubbles with unique keys */}
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: bubble.scale,
              opacity: bubble.opacity,
              x: [bubble.x, -bubble.x, bubble.x],
              y: [bubble.y, -bubble.y, bubble.y],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-sm"
            style={{
              left: `${50 + bubble.x}%`,
              top: `${50 + bubble.y}%`,
            }}
          />
        ))}

        {/* Central loading element */}
        <motion.div
          key="loading-content"
          className="relative z-10 flex flex-col items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Rotating rings */}
          <div className="relative w-32 h-32 mb-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={`ring-${index}`}
                className={`absolute ${
                  index === 0 ? "inset-0" : index === 1 ? "inset-2" : "inset-4"
                } 
                           rounded-full border-2 border-transparent 
                           ${
                             index === 0
                               ? "border-t-blue-500 border-r-purple-500"
                               : index === 1
                               ? "border-t-purple-500 border-r-pink-500"
                               : "border-t-pink-500 border-r-blue-500"
                           }`}
                animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 3 - index * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Central progress text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                key="progress-text"
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {Math.round(progress)}%
              </motion.span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
            <motion.div
              key="progress-bar"
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              style={{ width: `${progress}%` }}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </motion.div>
          </div>

          {/* Loading text */}
          <motion.div
            key="loading-text"
            className="mt-4 text-sm text-gray-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading...
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default LoadingScreen;

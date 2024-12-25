import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Create a transformed value for the percentage
  const percentage = useTransform(scrollYProgress, (value) =>
    Math.round(value * 100)
  );
  console.log(isVisible);

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
          className="absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-purple-500 to-cyan-500"
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

// import { useScroll, motion, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";

// const ScrollProgressBar = () => {
//   const { scrollYProgress } = useScroll();
//   const [isVisible, setIsVisible] = useState(false);

//   // Create a transformed value for the percentage
//   const percentage = useTransform(scrollYProgress, (value) =>
//     Math.round(value * 100)
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
//       {/* Progress Bar Track */}
//       <div className="w-1 h-40 rounded-full bg-gray-800/50 backdrop-blur-sm relative overflow-hidden">
//         {/* Animated progress bar */}
//         <motion.div
//           className="absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-purple-500 to-cyan-500 shadow-lg"
//           style={{
//             scaleY: scrollYProgress,
//             transformOrigin: "bottom",
//             transition: "scale 0.2s ease-out",
//           }}
//         />

//         {/* Scroll percentage number */}
//         <motion.div
//           className="absolute -left-10 text-white font-semibold text-sm md:text-base"
//           style={{
//             top: useTransform(
//               scrollYProgress,
//               (value) => `calc(${value * 100}% - 30px)`
//             ),
//           }}
//         >
//           {/* Using motion.div to subscribe to the MotionValue */}
//           {/* <motion.div
//             className="text-xl md:text-2xl"
//             style={{
//               opacity: scrollYProgress,
//               transition: "opacity 0.2s ease-in-out",
//             }}
//           >
//             {percentage}
//           </motion.div> */}
//         </motion.div>

//         {/* Glowing Dot Indicator */}
//         <motion.div
//           className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-t from-purple-500 to-cyan-500 shadow-xl"
//           style={{
//             top: useTransform(
//               scrollYProgress,
//               (value) => `calc(${value * 100}% - 5px)`
//             ),
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ScrollProgressBar;

// import { useScroll, motion, useTransform, useSpring } from "framer-motion";
// import { useEffect, useState } from "react";

// const ScrollProgressBar = () => {
//   const { scrollYProgress } = useScroll();
//   const [isVisible, setIsVisible] = useState(false);

//   // Smooth spring animation for progress
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   // Create transformed values with smooth animations
//   const percentage = useTransform(smoothProgress, (value) =>
//     Math.round(value * 100)
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//       className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3"
//     >
//       {/* Progress Bar Container with Glow Effect */}
//       <div
//         className="relative w-1.5 h-48 rounded-full bg-gray-800/30 backdrop-blur-md shadow-lg overflow-hidden
//                     before:absolute before:inset-0 before:bg-gradient-to-t before:from-purple-500/20 before:to-cyan-500/20 before:animate-pulse"
//       >
//         {/* Animated progress bar */}
//         <motion.div
//           className="absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-purple-600 to-cyan-400"
//           style={{
//             scaleY: smoothProgress,
//             transformOrigin: "bottom",
//           }}
//         >
//           {/* Inner glow effect */}
//           <div className="absolute inset-0 bg-white/20 blur-sm" />
//         </motion.div>
//       </div>

//       {/* Progress Numbers Container */}
//       <motion.div
//         className="bg-gray-900/70 backdrop-blur-lg rounded-xl px-4 py-2 shadow-xl
//                    border border-gray-700/50 flex items-center gap-2"
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2 }}
//       >
//         {/* Current Progress */}
//         <motion.div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
//           {percentage}
//         </motion.div>
//         {/* Separator */}
//         <div className="text-gray-400 font-light">/</div>
//         {/* Total */}
//         <div className="text-2xl font-bold text-gray-400">100</div>
//       </motion.div>

//       {/* Animated Dot Indicator */}
//       <motion.div
//         className="absolute left-[3px] w-4 h-4 rounded-full"
//         style={{
//           top: useTransform(
//             smoothProgress,
//             (value) => `calc(${value * 192}px)`
//           ),
//         }}
//       >
//         {/* Outer glow */}
//         <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 blur-md opacity-70" />
//         {/* Inner dot */}
//         <div className="absolute inset-0.5 rounded-full bg-white shadow-lg" />

//         {/* Pulse effect */}
//         <motion.div
//           className="absolute inset-[-4px] rounded-full bg-white"
//           initial={{ opacity: 0.5, scale: 1 }}
//           animate={{ opacity: 0, scale: 2 }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ScrollProgressBar;

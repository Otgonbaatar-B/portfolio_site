"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Eye, X } from "lucide-react";
import { containerVariants, itemVariants, modalVariants } from "../constants";

const HeroContent = () => {
  const [showPreview, setShowPreview] = useState(false);
  const pdfPath = "/Otgonbaatar_CV.pdf";

  return (
    <div id="about-me" className="w-full relative h-auto">
      <motion.div
        className="relative z-10 container mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={itemVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8 hover:from-purple-500/20 hover:to-blue-500/20 transition-colors"
          >
            <span className="text-purple-400 text-sm">Available for Work</span>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg mb-8 max-w-xl"
          >
            Passionate Full-Stack Developer crafting seamless digital
            experiences through innovative solutions and cutting-edge
            technologies.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPreview(true)}
              className="group px-8 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg text-white font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all flex items-center justify-center gap-2 relative backdrop-blur-sm border border-white/10"
            >
              <ArrowDown className="w-5 h-5" />
              Download CV
              <Eye className="w-4 h-4 animate-pulse" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-[250px] h-[250px] relative p-5"
          variants={itemVariants}
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Animated Background Circles */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Main Image Container */}
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden backdrop-blur-sm border-2 border-white/10"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("./image.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -inset-4 rounded-full border border-purple-500/20"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute -inset-8 rounded-full border border-blue-500/20"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence mode="sync">
        {showPreview && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-900 rounded-xl w-full max-w-4xl h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-3 right-3 bg-red-500/80 backdrop-blur-sm rounded-full p-2 text-white hover:bg-red-600 transition-colors"
                onClick={() => setShowPreview(false)}
              >
                <X className="w-4 h-4" />
              </motion.button>
              <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                <iframe
                  src={pdfPath}
                  className="w-full h-full"
                  title="CV Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;

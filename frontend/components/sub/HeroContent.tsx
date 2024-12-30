"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Eye, X } from "lucide-react";

const HeroContent = () => {
  const [showPreview, setShowPreview] = useState(false);
  const pdfPath = "/Otgonbaatar_Resume.pdf"; // Updated PDF path
  console.log(pdfPath);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="w-full relative h-auto">
      <motion.div
        className="relative z-10 container mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={itemVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8"
          >
            <span className="text-purple-400 text-sm">Available for Work</span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Turning Ideas into </span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </motion.h1>
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
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              View Projects
            </motion.button>
            <motion.div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPreview(true)}
                className="group px-8 py-3 bg-white/10 rounded-lg text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2 relative"
              >
                <ArrowDown className="w-5 h-5" />
                Download CV
                <Eye className="w-4 h-4 animate-pulse flex items-center justify-center" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                ></motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Right content - 3D animated element */}
        <motion.div className="flex-1 relative" variants={itemVariants}>
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <motion.div
              animate={{
                rotateY: [0, 360],
                rotateX: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-3xl border border-white/10"
            />
            <div className="absolute inset-0 backdrop-blur-sm rounded-full border border-white/10" />
          </div>
        </motion.div>
      </motion.div>
      {/* PDF Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
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
                className="absolute -top-4 -right-4 bg-red-500 rounded-full p-2 text-white hover:bg-red-600 transition-colors"
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-8 right-8 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
                onClick={() => {
                  window.open(pdfPath, "_blank");
                }}
              >
                <ArrowDown className="w-4 h-4" />
                Download
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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

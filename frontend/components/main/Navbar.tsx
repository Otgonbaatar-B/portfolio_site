"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("about-me");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(
        (prevScrollPos > currentScrollPos || currentScrollPos < 10) &&
          !isMobileMenuOpen
      );
      setPrevScrollPos(currentScrollPos);
      const sections = ["about-me", "skills", "projects"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isMobileMenuOpen]);
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);
  const navItems = [
    { id: "about-me", label: "About me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];
  const socialLinks = [
    {
      Icon: Facebook,
      color: "#1877F2",
      href: "#",
      hoverBg: "hover:bg-[#1877F2]",
    },
    {
      Icon: Instagram,
      color: "#E4405F",
      href: "#",
      hoverBg:
        "hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
    },
    {
      Icon: Linkedin,
      color: "#0A66C2",
      href: "#",
      hoverBg: "hover:bg-[#0A66C2]",
    },
    {
      Icon: Github,
      color: "#333",
      href: "#",
      hoverBg: "hover:bg-[#333]",
    },
  ];
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40 px-5 md:px-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-[#0300147c] border border-[#2A0E61]/50 rounded-2xl mt-4 shadow-lg shadow-purple-500/20">
            <div className="h-16 flex items-center justify-between px-4 md:px-6">
              {/* Logo & Name */}
              <motion.a
                href="#about-me"
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-10 h-10">
                  <Image
                    src="/image.png"
                    alt="logo"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <span className="font-bold hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Otgonbaatar
                </span>
              </motion.a>
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center bg-[#0300145e] border border-[#7042f861] rounded-full px-3 py-1.5">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative px-4 py-1.5 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-[#2A0E61]/60 rounded-full -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
              {/* Desktop Social Links */}
              <div className="hidden md:flex items-center gap-2">
                {socialLinks.map(({ Icon, href, hoverBg }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all overflow-hidden group ${hoverBg}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon
                      size={18}
                      className="relative z-10 transition-colors duration-300 text-gray-300 group-hover:text-white"
                    />
                  </motion.a>
                ))}
              </div>
              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="text-white" size={24} />
                  ) : (
                    <Menu className="text-white" size={24} />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 mt-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full bg-[#030014] border-b border-[#2A0E61] py-20 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Mobile Navigation Items */}
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`text-2xl font-semibold ${
                        activeSection === item.id
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                          : "text-gray-400"
                      }`}
                      whileHover={{ x: 10 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
                {/* Mobile Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map(({ Icon, href, hoverBg }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/10 ${hoverBg}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon
                        size={24}
                        className="text-gray-300 group-hover:text-white"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
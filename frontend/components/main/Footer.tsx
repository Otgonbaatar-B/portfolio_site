// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     {
//       name: "GitHub",
//       icon: <Github className="w-5 h-5" />,
//       href: "https://github.com/yourusername",
//     },
//     {
//       name: "LinkedIn",
//       icon: <Linkedin className="w-5 h-5" />,
//       href: "https://linkedin.com/in/yourusername",
//     },
//     {
//       name: "Email",
//       icon: <Mail className="w-5 h-5" />,
//       href: "mailto:your.email@example.com",
//     },
//   ];

//   return (
//     <footer className="relative w-full overflow-hidden bg-transparent py-12">
//       {/* Animated background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-blue-500/10" />

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-grid-white/[0.02]">
//         <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl" />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative container mx-auto px-6"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand Column */}
//           <div className="space-y-4">
//             <motion.h3
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
//             >
//               Let's Connect
//             </motion.h3>
//             <p className="text-gray-400 max-w-xs">
//               Building the future of web development, one project at a time.
//             </p>
//           </div>

//           {/* Links Column */}
//           <div className="space-y-4">
//             <h4 className="text-white font-semibold">Quick Links</h4>
//             <ul className="space-y-2">
//               {["About-me", "Projects", "Skills", "Contact"].map((item) => (
//                 <motion.li
//                   key={item}
//                   whileHover={{ x: 5 }}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <a href={`#${item.toLowerCase()}`}>{item}</a>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div className="space-y-4">
//             <h4 className="text-white font-semibold">Social</h4>
//             <div className="flex flex-wrap gap-4">
//               {socialLinks.map((link) => (
//                 <motion.a
//                   key={link.name}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
//                 >
//                   {link.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Column */}
//           <div className="space-y-4">
//             <h4 className="text-white font-semibold">Get in Touch</h4>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-2"
//             >
//               Contact Me
//               <ExternalLink className="w-4 h-4" />
//             </motion.button>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
//         >
//           <p className="text-gray-400 text-sm">
//             © {currentYear} Your Name. All rights reserved.
//           </p>
//           <div className="flex gap-4 text-sm text-gray-400">
//             <a href="#" className="hover:text-white transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-white transition-colors">
//               Terms of Service
//             </a>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Animated particle effect */}
//       {[...Array(3)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -100, 0],
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             delay: i * 2,
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//     </footer>
//   );
// };

// export default Footer;

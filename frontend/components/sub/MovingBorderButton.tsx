import { motion } from "framer-motion";
import { ReactNode } from "react";

type MovingBorderButtonProps = {
  children: ReactNode;
  duration?: number;
  className?: string;
  [key: string]: any;
};

const MovingBorderButton = ({
  children,
  duration = 3000,
  className = "",
  ...props
}: MovingBorderButtonProps) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-200"
        animate={{
          background: [
            "linear-gradient(60deg, #4f46e5, #06b6d4)",
            "linear-gradient(120deg, #06b6d4, #4f46e5)",
            "linear-gradient(180deg, #4f46e5, #06b6d4)",
            "linear-gradient(240deg, #06b6d4, #4f46e5)",
            "linear-gradient(300deg, #4f46e5, #06b6d4)",
            "linear-gradient(360deg, #06b6d4, #4f46e5)",
          ],
        }}
        transition={{ duration, repeat: Infinity }}
      />
      <div
        className={`relative px-7 py-6 bg-[#030014] rounded-3xl leading-none ${className}`}
        {...props}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default MovingBorderButton;

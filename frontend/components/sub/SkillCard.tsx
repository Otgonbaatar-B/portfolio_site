import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { TECH_ICONS } from "../constants";

// Icon mapping object

type SkillCardProps = {
  title: string;
  icon: React.ElementType;
  items: string[];
};

const SkillCard: React.FC<SkillCardProps> = ({ title, icon: Icon, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="w-full p-6 text-white rounded-3xl bg-transparent border border-[#2A0E61]/50 shadow-lg shadow-[#7042f861] hover:bg-[#0c0c0c]/70 transition-all"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-[#2A0E61]">
          <Icon size={24} className="text-purple-500" />
        </div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {items.map((item, index) => {
          const ItemIcon = TECH_ICONS[item] || Code2;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="p-3 rounded-lg bg-transparent hover:bg-[#2A0E61] transition-all duration-300">
                <ItemIcon
                  size={24}
                  className="text-gray-400 group-hover:text-purple-500 transition-colors"
                />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white text-center transition-colors">
                {item}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SkillCard;

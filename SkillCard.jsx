import { motion } from 'framer-motion';

const SkillCard = ({ skill, index, categoryIndex }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        delay: categoryIndex * 0.1 + index * 0.05,
        type: "spring",
        damping: 15,
        stiffness: 150
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="glass-card group text-center p-4 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      
      {/* Skill Level Indicator - Neon */}
      <div className="relative w-16 h-16 mx-auto mb-3">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="4"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="url(#neonGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 176" }}
            whileInView={{ strokeDasharray: `${skill.level * 1.76} 176` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ filter: 'drop-shadow(0 0 6px rgba(0, 245, 255, 0.5))' }}
          />
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="50%" stopColor="#0066ff" />
              <stop offset="100%" stopColor="#b829dd" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-neon-cyan font-mono">{skill.level}%</span>
        </div>
      </div>
      
      <h4 className="font-medium group-hover:text-neon-cyan transition-colors font-mono text-sm">
        {skill.name}
      </h4>
      <p className="text-xs text-tech-muted mt-1">{skill.category}</p>
    </motion.div>
  );
};

export default SkillCard;
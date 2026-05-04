import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 text-cyan-400 ${centered ? 'justify-center' : ''}`}>
        <span className="w-4 h-px bg-cyan-400" />
        <span>{title.toUpperCase().split(' ').pop()}</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white font-syne">
        {title}
      </h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl text-base leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      
      <div className={`w-8 h-0.5 mt-4 mb-8 ${centered ? 'mx-auto' : ''}`} style={{ background: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }} />
    </motion.div>
  );
};

export default SectionHeader;
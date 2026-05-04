import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiLink, FiCheckCircle } from 'react-icons/fi';

const CertCard = ({ certification, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card group h-full flex flex-col"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl">
          {certification.icon}
        </div>
        <FiAward className="text-gray-500" size={18} />
      </div>

      <h3 className="font-syne font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors text-sm">
        {certification.title}
      </h3>
      <p className="text-xs text-gray-500 mb-3">{certification.issuer}</p>

      <div className="space-y-2 mb-4 flex-1">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <FiCalendar size={12} />
          <span>{certification.date}</span>
        </div>
        {certification.duration && (
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>⏱</span>
            <span>{certification.duration}</span>
          </div>
        )}
        {certification.credentialId && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <FiLink size={10} />
            <span className="truncate">{certification.credentialId}</span>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-white/5">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 border border-green-500/20 text-green-400">
          <FiCheckCircle size={12} />
          Verified
        </span>
      </div>
    </motion.div>
  );
};

export default CertCard;
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FiShield, FiMonitor, FiTool, FiHeadphones, FiPackage } from 'react-icons/fi';

const Business = () => {
  const { business } = portfolioData;

  const serviceIcons = {
    "CCTV Installation": <FiShield className="text-cyan-400" size={20} />,
    "DVR/NVR Setup": <FiMonitor className="text-blue-400" size={20} />,
    "Remote Monitoring": <FiTool className="text-purple-400" size={20} />,
    "Maintenance & Troubleshooting": <FiHeadphones className="text-green-400" size={20} />,
    "IT Accessories Sales": <FiPackage className="text-orange-400" size={20} />,
  };

  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="section-label justify-center">BUSINESS</div>
          <h2 className="section-title">{business.title}</h2>
          <div className="section-divider mx-auto" />
          <p className="text-gray-400 text-sm max-w-xl mx-auto">{business.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {business.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 3 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                {serviceIcons[service]}
                <span className="text-sm text-gray-300">{service}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {business.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-gray-400">
                {skill}
              </span>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary inline-flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {business.cta}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Business;
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-label">ABOUT</div>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card">
              <p className="text-gray-400 leading-relaxed text-sm">
                I'm a passionate <span className="text-cyan-400 font-medium">AI & Data Science student</span> dedicated to 
                transforming complex data into meaningful insights and intelligent solutions. 
                My journey combines technical expertise with creative problem-solving to 
                build applications that make a real impact.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4 text-sm">
                With hands-on experience in <span className="text-cyan-400">Python, Machine Learning, and Data Analysis</span>, 
                I thrive on tackling challenging problems and continuously expanding my skill set.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-white font-medium mb-4 text-sm">Personal Details</h3>
              <div className="space-y-3">
                {about.personalDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-gray-500 text-sm">{detail.label}</span>
                    <span className="text-gray-300 text-sm">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {about.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="glass-card group cursor-default"
              >
                <div className="text-2xl mb-2">{highlight.icon}</div>
                <h3 className="font-medium text-sm mb-1 text-white group-hover:text-cyan-400 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import CertCard from './CertCard';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Certifications" 
          subtitle="Recognitions and credentials validating my skills and dedication"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {certifications.map((cert, index) => (
            <CertCard
              key={cert.id}
              certification={cert}
              index={index}
            />
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "4+", label: "Certifications" },
            { value: "2", label: "Hackathons Won" },
            { value: "20h+", label: "Competition Time" },
            { value: "100%", label: "Completion Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card text-center p-4"
            >
              <div className="text-2xl font-syne font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 100 }
    }
  };

  const categoryColors = {
    coreLanguage: "text-cyan-400",
    dataScience: "text-blue-400",
    aiML: "text-purple-400",
    backend: "text-green-400",
    tools: "text-orange-400",
  };

  const categoryKey = Object.keys(skills);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label">SKILLS</div>
          <h2 className="section-title">Technical Stack</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categoryKey.map((key) => {
            const category = skills[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className={`category-label ${categoryColors[key] || 'text-gray-500'}`}>
                  {category.title}
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2.5"
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="skill-badge cursor-default"
                    >
                      <span className="dot" />
                      {skill.name}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
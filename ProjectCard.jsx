import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card group h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{project.emoji}</span>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-white/10 text-gray-500 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiGithub size={18} />
        </motion.a>
      </div>

      <h3 className="font-syne font-semibold text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-white/5">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          whileHover={{ x: 3 }}
        >
          View Source Code
          <FiExternalLink size={14} />
        </motion.a>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
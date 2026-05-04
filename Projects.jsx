import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section className="relative">
      // Projects section ke andar card design mein ye changes karein

<div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
  {/* GitHub Button */}
  <a href={repo.html_url || project.github} target="_blank" rel="noreferrer"
     style={{ flex: 1, padding: '8px', textAlign: 'center', background: '#1e293b', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', border: '1px solid #334155' }}>
     View Code
  </a>
  
  {/* Live Demo Button (Ye button project open karega) */}
  {project.demo && (
    <a href={project.demo} target="_blank" rel="noreferrer"
       style={{ flex: 1, padding: '8px', textAlign: 'center', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>
       Live Demo 🚀
    </a>
  )}
</div>

      <div className="absolute inset-0 bg-gradient-to-t from-gradient-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A selection of my recent work showcasing AI, data science, and problem-solving skills"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border-2 border-gradient-primary/50 hover:bg-gradient-primary/10 transition-all duration-300 hover:scale-105"
          >
            View More on GitHub
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiMessageCircle, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal, stats, social } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left Column - Text Content */}
        <div className="space-y-6 order-2 lg:order-1">
          {/* Status Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-green-500/10 border border-green-500/20 text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold leading-tight"
          >
            <span className="text-gray-400 font-normal block text-lg mb-2">Hello, I'm</span>
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-cyan-400 font-medium"
          >
            {personal.title}
          </motion.p>

          {/* Bio */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 leading-relaxed max-w-lg text-sm"
          >
            {personal.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-3 pt-2"
          >
            {/* View Projects */}
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <FiArrowRight size={16} />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl font-semibold border border-green-500/30 text-green-400 hover:bg-green-500/10 transition-all flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiMessageCircle size={16} />
              WhatsApp
            </motion.a>

            {/* Download CV */}
            <motion.a
              href={social.cv}
              download
              className="px-5 py-3 rounded-xl font-semibold border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-all flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiDownload size={16} />
              CV
            </motion.a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 pt-2"
          >
            <span className="text-xs text-gray-500">Connect:</span>
            
            <motion.a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub"
            >
              <FiGithub size={18} />
            </motion.a>
            
            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn"
            >
              <FiLinkedin size={18} />
            </motion.a>
            
            <motion.a
              href={social.email}
              className="p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Email"
            >
              <FiMail size={18} />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-8 pt-6 border-t border-white/5"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-syne font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Profile Image */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center order-1 lg:order-2"
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Outer Glow Ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-2xl animate-pulse" />
            
            {/* Rotating Border Ring */}
            <motion.div
              className="absolute -inset-2 rounded-full border border-cyan-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Profile Image Container */}
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-blue-500/20 bg-[#0f172a]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback Avatar */}
              <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <span className="text-6xl">👨‍💻</span>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-lg" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-purple-400/50 rounded-br-lg" />
            </motion.div>

            {/* Floating Tech Badges */}
            <motion.div
              className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-[#0f172a] border border-cyan-500/30 text-xs font-medium text-cyan-400 flex items-center gap-1.5"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Python
            </motion.div>
            
            <motion.div
              className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-lg bg-[#0f172a] border border-purple-500/30 text-xs font-medium text-purple-400 flex items-center gap-1.5"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              AI/ML
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-gray-600 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-cyan-400"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
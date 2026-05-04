import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiMessageCircle, 
  FiSend, 
  FiGithub, 
  FiLinkedin, 
  FiInstagram, 
  FiFacebook,
  FiCheck, 
  FiDownload, 
  FiExternalLink,
  FiGlobe,
  FiBriefcase,
  FiClock,
  FiMonitor,
  FiCoffee
} from 'react-icons/fi';

const Contact = () => {
  const { personal, social, contact } = portfolioData;

  const contactItems = [
    {
      icon: <FiMail size={20} />,
      label: "Email",
      value: personal.email,
      href: social.email,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
    {
      icon: <FiLinkedin size={20} />,
      label: "LinkedIn",
      value: "Muhammad Noman Shaikh",
      href: social.linkedin,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <FiFacebook size={20} />,
      label: "Facebook",
      value: "stohyd7017",
      href: social.facebook,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
    {
      icon: <FiMessageCircle size={20} />,
      label: "WhatsApp",
      value: personal.whatsapp,
      href: social.whatsapp,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <FiInstagram size={20} />,
      label: "Instagram",
      value: "@smarttechone7017",
      href: social.instagram,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
  ];

  const availabilityIcons = {
    "Remote": <FiGlobe size={14} className="text-cyan-400" />,
    "On-site": <FiMapPin size={14} className="text-blue-400" />,
    "Hybrid": <FiMonitor size={14} className="text-purple-400" />,
    "Internship": <FiBriefcase size={14} className="text-green-400" />,
    "Freelance": <FiCoffee size={14} className="text-yellow-400" />,
    "Contract": <FiClock size={14} className="text-orange-400" />,
    "Part-time": <FiClock size={14} className="text-pink-400" />,
  };

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-4 h-px bg-cyan-400" />
            CONTACT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-syne">
            Let's work together.
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8" />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl space-y-3"
        >
          <p className="text-gray-400 leading-relaxed text-sm">
            {contact.intro}
          </p>
          <p className="text-gray-500 text-sm">
            {contact.subtitle}
          </p>
          <p className="text-gray-400 text-sm">
            {contact.cta}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Items (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-3"
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="group relative flex items-center gap-4 p-4 rounded-xl bg-[#0f172a]/60 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5 uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm text-white group-hover:text-cyan-400 transition-colors truncate font-medium">
                    {item.value}
                  </p>
                </div>
                
                {/* Arrow Icon */}
                <FiExternalLink size={16} className="text-gray-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right - Availability (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6 h-full border border-blue-500/10 bg-[#0f172a]/80">
              <h3 className="text-white font-semibold mb-5 text-sm">Availability</h3>
              
              <div className="space-y-3 mb-6">
                {contact.availability.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 text-sm group"
                  >
                    <FiCheck size={14} className="text-green-500 flex-shrink-0" />
                    <span className="font-medium text-gray-300 flex items-center gap-2">
                      {availabilityIcons[item.type]}
                      {item.type}
                    </span>
                    <span className="text-gray-600">—</span>
                    <span className="text-gray-500 group-hover:text-gray-400 transition-colors">{item.status}</span>
                  </motion.div>
                ))}
              </div>

              {/* Download CV Button */}
              <motion.a
                href={social.cv}
                download
                className="group relative w-full py-3 px-4 rounded-xl border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <FiDownload size={16} className="text-purple-400 group-hover:text-purple-300 transition-colors relative z-10" />
                <span className="text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors relative z-10">
                  Download My Resume
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            Prefer a quick chat? I usually respond within 24 hours
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Currently available for new opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
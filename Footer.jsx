import { FiMail, FiMessageCircle, FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const { social } = portfolioData;

  const socialLinks = [
    { href: social.whatsapp, icon: <FiMessageCircle size={18} />, label: "WhatsApp", color: "hover:text-green-400" },
    { href: social.email, icon: <FiMail size={18} />, label: "Email", color: "hover:text-red-400" },
    { href: social.linkedin, icon: <FiLinkedin size={18} />, label: "LinkedIn", color: "hover:text-blue-400" },
    { href: social.facebook, icon: <FiFacebook size={18} />, label: "Facebook", color: "hover:text-blue-600" },
    { href: social.instagram, icon: <FiInstagram size={18} />, label: "Instagram", color: "hover:text-pink-400" },
  ];

  return (
    <footer className="border-t border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-lg font-syne font-bold gradient-text">MN</span>
            <p className="text-xs text-gray-600">© {new Date().getFullYear()} Muhammad Noman</p>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                className={`p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors ${link.color}`}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
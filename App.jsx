import { useState, useEffect } from 'react';

// ==========================================
// 📦 DATA CONFIGURATION
// ==========================================
const DATA = {
  personal: {
    name: "Muhammad Noman",
    title: "AI & Data Science Student | Aspiring Data Scientist",
    bio: "Passionate about leveraging artificial intelligence and data science to solve real-world problems. Experienced in Python, Machine Learning, and building data-driven applications.",
    email: "stohyd7017@gmail.com",
    whatsapp: "+92 331 6667017",
    profileImage: "/profile.jpg",
  },
  stats: [
    { value: "1+", label: "Live Project" },
    { value: "2", label: "Hackathons" },
    { value: "1+", label: "Yrs Experience" },
  ],
  about: {
    highlights: [
      { icon: "🤖", title: "AI/ML", desc: "Building intelligent systems with modern ML frameworks" },
      { icon: "📊", title: "Data Analysis", desc: "Transforming raw data into actionable insights" },
      { icon: "🏆", title: "Hackathons", desc: "Competitive problem-solving under pressure" },
      { icon: "💼", title: "Entrepreneur", desc: "Turning ideas into viable business solutions" },
    ]
  },
  skills: [
    { category: "CORE LANGUAGE", color: "#06b6d4", items: ["Python", "OOP", "Clean Code", "Data Structures"] },
    { category: "DATA SCIENCE", color: "#3b82f6", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Jupyter"] },
    { category: "AI / MACHINE LEARNING", color: "#8b5cf6", items: ["Scikit-learn", "TensorFlow", "NLP", "spaCy", "NLTK", "RAG", "Prompt Engineering"] },
    { category: "TOOLS & PLATFORMS", color: "#10b981", items: ["Git & GitHub", "VS Code", "Docker", "Linux", "Postman", "Hugging Face"] }
  ],
  projects: [
    { 
      title: "Data Dashboard (Coding Night)", 
      desc: "Sales and Employee data visualization dashboard with CSV upload feature for interactive analysis.",
      tech: ["Python", "Pandas", "Streamlit", "Seaborn", "Matplotlib"],
      github: "https://github.com/nomanshaikh98/Coding_Night_Hyderabad_2025",
      demo: "https://codingnighthyderabad2025-666g4fteewbq6pprkxetuk.streamlit.app"
    }
  ],
  certifications: [
    { 
      title: "AI Hackathon - Indus AI Week 2026", 
      issuer: "Tech Destination Pakistan / NIC", 
      date: "2026",
      image: "/certificates/ai-hackathon-2026.jpg",
      details: "Active participation in AI Hackathon during Indus AI Week 2026."
    },
    { 
      title: "Cisco Introduction to Modern AI", 
      issuer: "Cisco Networking Academy", 
      date: "Mar 08, 2026",
      image: "/certificates/cisco-modern-ai.jpg",
      details: "Student level credential covering AI/ML concepts and LLMs."
    },
    { 
      title: "Coding Night 2026 Hackathon", 
      issuer: "Saylani Mass Training Programme (SMIT)", 
      date: "2026 (8 Hours)",
      image: "/certificates/coding-night-2026.jpg",
      credentialNo: "SMIT/2026/Hackathon/403920",
      details: "Successfully participated in 8-hour hackathon."
    },
    { 
      title: "Coding Night 2025 Hackathon", 
      issuer: "Saylani Mass Training Programme (SMIT)", 
      date: "2025 (12 Hours)",
      image: "/certificates/coding-night-2025.jpg",
      credentialNo: "SMIT/2025/Hackathon/403920",
      details: "Successfully participated in 12-hour hackathon."
    }
  ],
  business: {
    title: "CCTV Sales & Surveillance Solutions",
    services: ["CCTV Installation", "DVR/NVR Setup", "Remote Monitoring", "Maintenance & Troubleshooting", "IT Accessories Sales"],
    cta: "Contact for Services"
  },
  contact: [
    { icon: "📧", label: "Email", value: "stohyd7017@gmail.com", href: "mailto:stohyd7017@gmail.com" },
    { icon: "💼", label: "LinkedIn", value: "Muhammad Noman Shaikh", href: "https://www.linkedin.com/in/muhammad-noman-shaikh-aa5372343" },
    { icon: "📘", label: "Facebook", value: "stohyd7017", href: "https://www.facebook.com/stohyd7017" },
    { icon: "💬", label: "WhatsApp", value: "+92 331 6667017", href: "https://wa.me/923316667017" },
    { icon: "📸", label: "Instagram", value: "@smarttechone7017", href: "https://www.instagram.com/smarttechone7017" }
  ],
  availability: [
    "Remote — Worldwide", "On-site — Open to relocation", "Hybrid — Flexible schedule",
    "Internship — Any duration", "Freelance — Project basis", "Contract — Short or long term", "Part-time — While studying"
  ]
};

// ==========================================
// 📱 RESPONSIVE HELPERS
// ==========================================
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

// ==========================================
// 🧩 REUSABLE COMPONENTS
// ==========================================
const SectionTitle = ({ label, title }) => (
  <div style={{ marginBottom: '40px' }}>
    <div style={{ fontSize: '11px', color: '#06b6d4', fontWeight: '600', letterSpacing: '2px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ width: '16px', height: '1px', background: '#06b6d4' }}></span>
      {label}
    </div>
    <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 'bold', margin: 0, color: 'white' }}>{title}</h2>
    <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #06b6d4, #3b82f6)', marginTop: '16px' }}></div>
  </div>
);

// ==========================================
// 🍔 NAVBAR WITH MOBILE MENU
// ==========================================
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: isMobile ? '12px 20px' : '16px 40px',
    background: scrolled ? 'rgba(10, 14, 26, 0.98)' : 'rgba(10, 14, 26, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: scrolled ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid transparent',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s ease'
  };

  const logoStyle = {
    fontSize: isMobile ? '18px' : '22px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <>
      <nav style={navStyle}>
        <a href="#home" style={{ ...logoStyle, textDecoration: 'none' }}>&lt;MN/&gt;</a>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', transition: '0.3s' }} onMouseEnter={e => e.target.style.color = '#06b6d4'} onMouseLeave={e => e.target.style.color = '#94a3b8'}>{link}</a>
            ))}
            <a href="/Muhammad_Noman_CV.pdf" download style={{ padding: '8px 16px', background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>📄 CV</a>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: '#06b6d4', fontSize: '24px', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(10, 14, 26, 0.98)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px'
        }}>
          {links.map((link, i) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setMenuOpen(false)}
              style={{ 
                color: '#e2e8f0', 
                textDecoration: 'none', 
                fontSize: '22px', 
                fontWeight: '600',
                padding: '12px 30px',
                borderRadius: '12px',
                transition: '0.3s',
                opacity: 0,
                animation: `fadeInUp 0.3s ease ${i * 0.1}s forwards`
              }}
              onMouseEnter={e => e.target.style.color = '#06b6d4'}
              onMouseLeave={e => e.target.style.color = '#e2e8f0'}
            >
              {link}
            </a>
          ))}
          <a 
            href="/Muhammad_Noman_CV.pdf" 
            download
            style={{ 
              marginTop: '20px',
              padding: '14px 30px', 
              background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', 
              color: 'white', 
              borderRadius: '10px', 
              textDecoration: 'none', 
              fontSize: '16px', 
              fontWeight: '600' 
            }}
          >
            📄 Download CV
          </a>
        </div>
      )}
    </>
  );
};

// ==========================================
// 🦸 HERO - MOBILE RESPONSIVE + NEW PROFILE DESIGN
// ==========================================
const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      padding: isMobile ? '80px 20px 40px' : '100px 40px', 
      background: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)' 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: isMobile ? 'flex' : 'grid',
        flexDirection: isMobile ? 'column' : 'row',
        gridTemplateColumns: '1fr 1fr',
        gap: isMobile ? '40px' : '60px', 
        alignItems: 'center', 
        width: '100%' 
      }}>
        {/* Text Content */}
        <div style={{ textAlign: isMobile ? 'center' : 'left', order: isMobile ? 2 : 1 }}>
          <div style={{ 
            display: 'inline-flex', 
            padding: '6px 14px', 
            background: 'rgba(34, 211, 238, 0.1)', 
            border: '1px solid rgba(34, 211, 238, 0.3)', 
            borderRadius: '20px', 
            fontSize: isMobile ? '12px' : '13px', 
            color: '#22d3ee', 
            marginBottom: '16px' 
          }}>👋 Available for opportunities</div>
          
          <h1 style={{ 
            fontSize: isMobile ? '32px' : '52px', 
            fontWeight: 'bold', 
            margin: '0 0 10px 0', 
            lineHeight: '1.1', 
            color: 'white' 
          }}>
            Hi, I'm <span style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{DATA.personal.name}</span>
          </h1>
          
          <p style={{ 
            fontSize: isMobile ? '14px' : '18px', 
            color: '#06b6d4', 
            margin: '0 0 12px 0',
            fontWeight: '500'
          }}>{DATA.personal.title}</p>
          
          <p style={{ 
            fontSize: isMobile ? '13px' : '15px', 
            color: '#94a3b8', 
            lineHeight: '1.6', 
            margin: '0 0 24px 0' 
          }}>{DATA.personal.bio}</p>
          
          {/* Action Buttons - Stack on mobile */}
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-start',
            marginBottom: isMobile ? '30px' : '0'
          }}>
            <a href="#projects" style={{ 
              padding: isMobile ? '12px 20px' : '12px 24px', 
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', 
              color: 'white', 
              borderRadius: '10px', 
              textDecoration: 'none', 
              fontWeight: '600', 
              fontSize: isMobile ? '14px' : '14px',
              minWidth: '120px',
              textAlign: 'center'
            }}>View Project →</a>
            <a href="#contact" style={{ 
              padding: isMobile ? '12px 20px' : '12px 24px', 
              background: 'transparent', 
              color: 'white', 
              border: '1px solid rgba(59, 130, 246, 0.5)', 
              borderRadius: '10px', 
              textDecoration: 'none', 
              fontWeight: '600', 
              fontSize: isMobile ? '14px' : '14px',
              minWidth: '120px',
              textAlign: 'center'
            }}>Contact Me</a>
          </div>

          {/* Stats - Horizontal scroll on mobile */}
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '20px' : '40px', 
            marginTop: isMobile ? '20px' : '40px', 
            paddingTop: isMobile ? '20px' : '30px', 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            justifyContent: isMobile ? 'center' : 'flex-start',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            overflowX: isMobile ? 'auto' : 'visible',
            paddingBottom: isMobile ? '10px' : '0'
          }}>
            {DATA.stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', minWidth: '80px' }}>
                <div style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 'bold', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* NEW PROFILE IMAGE DESIGN */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          order: isMobile ? 1 : 2,
          padding: isMobile ? '0' : '0 20px'
        }}>
          <div style={{ 
            position: 'relative',
            width: isMobile ? '220px' : '300px',
            height: isMobile ? '220px' : '300px'
          }}>
            {/* Outer Animated Hexagon Ring */}
            <div style={{
              position: 'absolute',
              inset: '-15px',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              border: '2px solid rgba(6, 182, 212, 0.3)',
              animation: 'morphRotate 8s ease-in-out infinite',
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.15), inset 0 0 30px rgba(6, 182, 212, 0.05)'
            }} />

            {/* Second Ring */}
            <div style={{
              position: 'absolute',
              inset: '-30px',
              borderRadius: '50%',
              border: '1px dashed rgba(139, 92, 246, 0.2)',
              animation: 'spinSlow 20s linear infinite'
            }} />

            {/* Glow Background */}
            <div style={{
              position: 'absolute',
              inset: '0',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(139, 92, 246, 0.15))',
              filter: 'blur(20px)',
              animation: 'pulseGlow 4s ease-in-out infinite'
            }} />

            {/* Main Image Container */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid rgba(6, 182, 212, 0.4)',
              boxShadow: '0 0 40px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(6, 182, 212, 0.1)',
              background: '#0f172a'
            }}>
              <img 
                src={DATA.personal.profileImage} 
                alt="Muhammad Noman" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                onError={e => { 
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'flex'; 
                }} 
              />
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: isMobile ? '60px' : '80px',
                background: 'linear-gradient(135deg, #1e293b, #0f172a)'
              }}>
                👨‍
              </div>
            </div>

            {/* Floating Badge - Bottom Right */}
            <div style={{
              position: 'absolute',
              bottom: '-5px',
              right: '-5px',
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              padding: '8px 14px',
              borderRadius: '20px',
              fontSize: isMobile ? '10px' : '12px',
              fontWeight: '700',
              color: 'white',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              animation: 'bounceFloat 3s ease-in-out infinite'
            }}>
              <span>⚡</span> {DATA.stats[2].value} Exp.
            </div>

            {/* Floating Badge - Top Left */}
            <div style={{
              position: 'absolute',
              top: '-5px',
              left: '-5px',
              background: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              padding: '6px 12px',
              borderRadius: '16px',
              fontSize: isMobile ? '10px' : '11px',
              color: '#a78bfa',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              animation: 'bounceFloat 3s ease-in-out infinite 1.5s'
            }}>
              🐍 Python Dev
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// ABOUT - MOBILE RESPONSIVE
// ==========================================
const About = () => {
  const isMobile = useIsMobile();
  return (
    <section id="about" style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: 'rgba(15, 23, 42, 0.4)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle label="ABOUT" title="About Me" />
        <div style={{ display: isMobile ? 'flex' : 'grid', flexDirection: isMobile ? 'column' : 'row', gridTemplateColumns: '1fr 1fr', gap: isMobile ? '30px' : '60px', alignItems: 'start' }}>
          <div>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: isMobile ? '14px' : '15px', margin: '0 0 16px 0' }}>I'm a passionate <span style={{ color: '#06b6d4', fontWeight: '600' }}>AI & Data Science student</span> dedicated to transforming complex data into meaningful insights.</p>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: isMobile ? '14px' : '15px', margin: 0 }}>With hands-on experience in Python, Machine Learning, and Data Analysis, I thrive on tackling challenging problems.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr', gap: isMobile ? '12px' : '20px' }}>
            {DATA.about.highlights.map((h, i) => (
              <div key={i} style={{ padding: isMobile ? '14px' : '20px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(59, 130, 246, 0.1)', borderRadius: '12px', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.1)'; }}>
                <div style={{ fontSize: isMobile ? '22px' : '28px', marginBottom: '8px' }}>{h.icon}</div>
                <h3 style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: '600', margin: '0 0 4px 0', color: 'white' }}>{h.title}</h3>
                <p style={{ fontSize: isMobile ? '11px' : '13px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SKILLS - MOBILE RESPONSIVE
// ==========================================
const Skills = () => {
  const isMobile = useIsMobile();
  return (
    <section id="skills" style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle label="SKILLS" title="Technical Stack" />
        <div style={{ display: 'grid', gap: isMobile ? '24px' : '40px' }}>
          {DATA.skills.map((cat, i) => (
            <div key={i}>
              <div style={{ fontSize: isMobile ? '11px' : '12px', fontWeight: '600', letterSpacing: '1px', color: cat.color, marginBottom: '12px' }}>{cat.category}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '8px' : '10px' }}>
                {cat.items.map((skill, si) => (
                  <div key={si} style={{ 
                    padding: isMobile ? '8px 12px' : '10px 16px', 
                    background: 'rgba(15, 23, 42, 0.8)', 
                    border: `1px solid ${cat.color}30`, 
                    borderRadius: '8px', 
                    fontSize: isMobile ? '12px' : '14px', 
                    color: '#94a3b8', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    transition: '0.2s' 
                  }} onMouseEnter={e => { e.target.style.borderColor = cat.color; e.target.style.color = 'white'; }} onMouseLeave={e => { e.target.style.borderColor = `${cat.color}30`; e.target.style.color = '#94a3b8'; }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: cat.color }}></span>{skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// PROJECTS - MOBILE RESPONSIVE
// ==========================================
const Projects = () => {
  const isMobile = useIsMobile();
  return (
    <section id="projects" style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: 'rgba(15, 23, 42, 0.4)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle label="PROJECTS" title="Featured Work" />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: isMobile ? '20px' : '30px' }}>
          {DATA.projects.map((project, i) => (
            <div 
              key={i}
              style={{ 
                padding: isMobile ? '20px' : '30px', 
                background: 'rgba(15, 23, 42, 0.8)', 
                border: '1px solid rgba(6, 182, 212, 0.3)', 
                borderRadius: '16px', 
                transition: 'all 0.3s ease',
                position: 'relative',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(6, 182, 212, 0.1)'
              }} 
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.6)'; e.currentTarget.style.transform = isMobile ? 'none' : 'translateY(-8px)'; }} 
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
            >
              <div style={{ position: 'absolute', top: '-10px', left: '20px', padding: '5px 14px', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', borderRadius: '20px', fontSize: isMobile ? '10px' : '12px', fontWeight: '600', color: 'white' }}>⭐ FEATURED</div>
              <div style={{ position: 'absolute', top: '16px', right: '16px', width: isMobile ? '30px' : '36px', height: isMobile ? '30px' : '36px', background: 'rgba(6, 182, 212, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isMobile ? '14px' : '18px', color: '#06b6d4' }}>↗</div>
              <h3 style={{ fontSize: isMobile ? '18px' : '22px', fontWeight: '700', margin: '8px 0 10px 0', color: 'white', paddingRight: isMobile ? '0' : '50px' }}>{project.title}</h3>
              <p style={{ fontSize: isMobile ? '13px' : '15px', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: '1.6' }}>{project.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {project.tech.map((t, ti) => (
                  <span key={ti} style={{ padding: '4px 10px', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '6px', fontSize: isMobile ? '10px' : '12px', color: '#22d3ee' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '10px', flexDirection: isMobile ? 'column' : 'row' }}>
                <button onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank', 'noopener,noreferrer'); }} style={{ flex: 1, padding: '10px', textAlign: 'center', background: 'rgba(30, 41, 59, 0.8)', color: 'white', borderRadius: '8px', fontSize: isMobile ? '12px' : '13px', fontWeight: '600', border: '1px solid #334155', cursor: 'pointer', minHeight: '44px' }}>🔗 View Code</button>
                <button onClick={(e) => { e.stopPropagation(); window.open(project.demo, '_blank', 'noopener,noreferrer'); }} style={{ flex: 1, padding: '10px', textAlign: 'center', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', color: 'white', borderRadius: '8px', fontSize: isMobile ? '12px' : '13px', fontWeight: '700', border: 'none', cursor: 'pointer', minHeight: '44px' }}>🚀 Live Demo</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: isMobile ? '30px' : '50px' }}>
          <p style={{ color: '#64748b', marginBottom: '12px', fontSize: isMobile ? '13px' : '14px' }}>Want to see more of my work?</p>
          <button onClick={() => window.open('https://github.com/nomanshaikh98', '_blank', 'noopener,noreferrer')} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: isMobile ? '12px 24px' : '12px 30px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '8px', color: '#06b6d4', cursor: 'pointer', fontWeight: '600', fontSize: isMobile ? '13px' : '14px', minHeight: '44px' }}>
            <span>View My GitHub Profile</span><span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// CERTIFICATIONS - MOBILE RESPONSIVE
// ==========================================
const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const isMobile = useIsMobile();

  return (
    <section style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle label="CERTIFICATIONS" title="Credentials" />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(240px, 1fr))', gap: isMobile ? '12px' : '20px' }}>
          {DATA.certifications.map((cert, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedCert(cert)}
              style={{ 
                padding: isMobile ? '16px 12px' : '25px 20px', 
                background: 'rgba(15, 23, 42, 0.6)', 
                border: '1px solid rgba(59, 130, 246, 0.15)', 
                borderRadius: '12px', 
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minHeight: isMobile ? 'auto' : '140px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)'; }}
            >
              <div style={{ fontSize: isMobile ? '24px' : '32px', marginBottom: '8px' }}>🏅</div>
              <h3 style={{ fontSize: isMobile ? '12px' : '14px', fontWeight: '600', margin: '0 0 6px 0', color: 'white', lineHeight: '1.3' }}>{cert.title}</h3>
              <p style={{ fontSize: isMobile ? '10px' : '12px', color: '#64748b', margin: '0 0 2px 0' }}>{cert.issuer}</p>
              <p style={{ fontSize: isMobile ? '10px' : '12px', color: '#06b6d4', margin: 0 }}>{cert.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedCert && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99999, padding: isMobile ? '10px' : '20px' }}
          onClick={() => setSelectedCert(null)}
        >
          <div 
            style={{ background: '#0f172a', borderRadius: '16px', maxWidth: isMobile ? '100%' : '900px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative', border: '2px solid rgba(6, 182, 212, 0.3)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCert(null)}
              style={{ position: 'absolute', top: '12px', right: '12px', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.8)', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
            >✕</button>
            <div style={{ padding: isMobile ? '20px' : '25px 30px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h2 style={{ fontSize: isMobile ? '16px' : '20px', fontWeight: '700', color: 'white', margin: '0 0 6px 0' }}>{selectedCert.title}</h2>
              <p style={{ fontSize: isMobile ? '12px' : '14px', color: '#94a3b8', margin: 0 }}>{selectedCert.issuer}</p>
              <p style={{ fontSize: isMobile ? '11px' : '13px', color: '#06b6d4', margin: '4px 0 0 0' }}>📅 {selectedCert.date}</p>
            </div>
            <div style={{ padding: isMobile ? '15px' : '20px', textAlign: 'center' }}>
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
              />
              <div style={{ display: 'none', padding: '40px 20px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '8px', color: '#64748b' }}>
                <p style={{ fontSize: '36px', margin: '0 0 10px 0' }}>📄</p>
                <p>Image not found: {selectedCert.image}</p>
              </div>
            </div>
            <div style={{ padding: isMobile ? '15px' : '20px 30px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              <a href={selectedCert.image} download style={{ padding: isMobile ? '10px 20px' : '10px 24px', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: isMobile ? '12px' : '14px' }}>⬇ Download Certificate</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// ==========================================
// BUSINESS - MOBILE RESPONSIVE
// ==========================================
const Business = () => {
  const isMobile = useIsMobile();
  return (
    <section id="business" style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: 'rgba(15, 23, 42, 0.4)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <SectionTitle label="BUSINESS" title={DATA.business.title} />
        <div style={{ padding: isMobile ? '20px' : '30px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(59, 130, 246, 0.1)', borderRadius: '12px', marginTop: '30px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))', gap: isMobile ? '10px' : '15px', marginBottom: '20px', textAlign: 'left' }}>
            {DATA.business.services.map((s, i) => (
              <div key={i} style={{ padding: isMobile ? '10px' : '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: isMobile ? '13px' : '14px', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#06b6d4' }}>✓</span> {s}
              </div>
            ))}
          </div>
          <a href="#contact" style={{ display: 'inline-block', padding: isMobile ? '12px 24px' : '12px 30px', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: isMobile ? '14px' : '14px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{DATA.business.cta} →</a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// CONTACT - MOBILE RESPONSIVE
// ==========================================
const Contact = () => {
  const isMobile = useIsMobile();
  return (
    <section id="contact" style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle label="CONTACT" title="Let's work together." />
        <div style={{ display: isMobile ? 'flex' : 'grid', flexDirection: isMobile ? 'column' : 'row', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '24px' : '50px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '10px' : '15px' }}>
            {DATA.contact.map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noreferrer" style={{ padding: isMobile ? '14px' : '18px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '15px', textDecoration: 'none', transition: '0.3s', minHeight: isMobile ? '60px' : 'auto' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.1)'; }}>
                <div style={{ fontSize: isMobile ? '18px' : '22px' }}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: isMobile ? '10px' : '12px', color: '#64748b', marginBottom: '2px' }}>{item.label}</div>
                  <div style={{ fontSize: isMobile ? '13px' : '14px', color: 'white', fontWeight: '500', wordBreak: 'break-all' }}>{item.value}</div>
                </div>
                <div style={{ color: '#475569' }}>→</div>
              </a>
            ))}
          </div>
          <div style={{ padding: isMobile ? '20px' : '30px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(59, 130, 246, 0.1)', borderRadius: '12px', height: 'fit-content' }}>
            <h3 style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: '600', margin: '0 0 20px 0', color: 'white' }}>Availability</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '10px' : '12px', marginBottom: '24px' }}>
              {DATA.availability.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: isMobile ? '12px' : '14px' }}>
                  <span style={{ color: '#10b981' }}>✓</span>
                  <span style={{ color: '#94a3b8', fontWeight: '500' }}>{a.split('—')[0]}</span>
                  <span style={{ color: '#475569' }}>—</span>
                  <span style={{ color: '#64748b' }}>{a.split('—')[1]}</span>
                </div>
              ))}
            </div>
            <a href="/Muhammad_Noman_CV.pdf" download style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: isMobile ? '12px' : '12px', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '8px', color: '#a78bfa', fontWeight: '600', textDecoration: 'none', fontSize: isMobile ? '13px' : '14px', minHeight: '44px' }}>⬇ Download My Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// FOOTER - MOBILE RESPONSIVE
// ==========================================
const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <footer style={{ padding: isMobile ? '24px 20px' : '30px 40px', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#0a0e1a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        <div style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 'bold', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>&lt;MN/&gt;</div>
        <div style={{ color: '#64748b', fontSize: isMobile ? '11px' : '13px', textAlign: 'center' }}>© 2026 Muhammad Noman. All rights reserved.</div>
        <div style={{ display: 'flex', gap: isMobile ? '12px' : '10px' }}>
          {['GH', 'LI', 'FB', 'IG'].map(s => <div key={s} style={{ width: isMobile ? '36px' : '34px', height: isMobile ? '36px' : '34px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isMobile ? '12px' : '11px', color: '#64748b', cursor: 'pointer' }}>{s}</div>)}
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// 🚀 MAIN APP COMPONENT
// ==========================================
function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => { 
    setTimeout(() => setLoading(false), 400); 
  }, []);

  if (loading) {
    return <div style={{ height: '100vh', background: '#0a0e1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>Loading Portfolio...</div>;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', color: '#e2e8f0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Global CSS Animations */}
      <style>{`
        @keyframes morphRotate {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; transform: rotate(180deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes bounceFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0e1a; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Business />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
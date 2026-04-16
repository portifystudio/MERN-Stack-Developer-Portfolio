import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, LayoutDashboard, Heart, Instagram } from 'lucide-react';

const Footer = () => {
  const links = {
    Navigation: [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' },
    ],
    Connect: [
      { label: 'GitHub', href: 'https://github.com/portifystudio' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/portifystudio' },
      { label: 'Email', href: 'mailto:sriramojumadhan12@gmail.com' },
      { label: 'Twitter', href: 'https://x.com/PortifyStudio.com' },
      { label: 'Instagram', href: 'https://www.instagram.com/portifystudio' },
    ]
  };

  const socials = [
    { icon: <Github size={20} />, href: 'https://github.com/portifystudio', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/portifystudio', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:sriramojumadhan12@gmail.com', label: 'Email' },
    { icon: <Twitter size={20} />, href: 'https://x.com/PortifyStudio.com' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/portifystudio' },

  ];

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Background glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary-purple/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-purple to-neon-blue rounded-xl flex items-center justify-center text-white">
                <LayoutDashboard size={22} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">PORTIFY.<span className="text-neon-blue">STUDIO</span></span>
            </a>
            <p className="text-sm text-text-dark-muted leading-relaxed max-w-xs">
              Building premium digital experiences with the MERN stack. Focused on performance, design, and scalability.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-6">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="p-2.5 glass rounded-xl border border-white/5 hover:border-neon-blue/40 text-text-dark-muted hover:text-neon-blue transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-5 text-text-dark-muted">{title}</h4>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="text-sm text-text-dark-muted hover:text-neon-blue transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-neon-blue transition-all duration-300"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-dark-muted">
          &copy; {new Date().getFullYear()} <span className="text-white font-bold">Portify Studio</span> All rights reserved.

        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["MERN Stack Developer", "Full Stack Developer", "UI/UX Enthusiast", "AI Integration Expert"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-purple/10 blur-[120px] -z-10 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 blur-[100px] -z-10 rounded-full"></div>

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-neon-blue/30">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-neon-blue">Available for Projects</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
            I'm <span className="text-primary-purple-light">Madhan</span>,<br />
            Elevating Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple-light to-neon-blue neon-text">Experiences.</span>
          </h1>

          <div className="text-xl md:text-2xl font-medium mb-8 flex items-center gap-3">
            <Terminal size={28} className="text-primary-purple" />
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-primary-purple-light"
            >
              {roles[roleIndex]}
            </motion.span>
          </div>

          <p className="text-lg text-text-dark-muted mb-10 max-w-lg leading-relaxed">
            I build highly performant, accessible, and stunning MERN stack applications
            that bridge the gap between complex logic and elegant design.
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary-purple to-neon-blue rounded-full text-white font-bold flex items-center gap-2"
            >
              Explore Portfolio <ArrowRight size={20} />
            </motion.a>

            <div className="flex gap-4 items-center pl-4">
              {[
                { icon: <Github size={24} />, href: "https://github.com/portifystudio" },
                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/company/portifystudio" },
                { icon: <Mail size={24} />, href: "mailto:sriramojumadhan12@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: '#0ea5e9' }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-dark-muted transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Profile / 3D Element Concept */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-2 border-dashed border-primary-purple/30 rounded-full absolute animate-spin-slow"></div>
          <div className="w-[250px] h-[250px] md:w-[380px] md:h-[380px] border-2 border-neon-blue/20 rounded-full absolute animate-spin-reverse-slow"></div>

          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
            alt="Professional Profile"
            className="w-[220px] h-[220px] md:w-[350px] md:h-[350px] rounded-full object-cover z-20 border-4 border-white/20 shadow-2xl relative"
          />

          {/* Floating Skill Badge */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 right-10 glass p-4 rounded-2xl flex items-center gap-3 backdrop-blur-xl border-primary-purple/30"
          >
            <div className="w-10 h-10 bg-primary-purple/20 rounded-lg flex items-center justify-center text-primary-purple">
              <span className="font-bold">M</span>
            </div>
            <div>
              <p className="text-xs text-text-dark-muted font-bold uppercase">Main Stack</p>
              <p className="text-sm font-bold">MERN Specialist</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Rocket, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+", icon: <Rocket size={20} /> },
    { label: "Projects Completed", value: "15+", icon: <Code2 size={20} /> },
    { label: "Happy Clients", value: "10+", icon: <Heart size={20} /> },
    { label: "Tech Proficiency", value: "98%", icon: <User size={20} /> }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/5">
      <div className="container">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-neon-blue">Me.</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-purple to-neon-blue rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-primary-purple-light">
              Crafting Digital Excellence with the MERN Stack.
            </h3>
            <p className="text-lg text-text-dark-muted mb-6 leading-relaxed">
              I am a results-driven **FullStack Developer** specializing in building modern, scalable, 
              and performant web applications. My philosophy centers on clean code, intuitive UX, 
              and cutting-edge tech integration.
            </p>
            <p className="text-lg text-text-dark-muted mb-8 italic">
              "Turning complex challenges into elegant digital solutions is what I do best."
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-white/5 hover:border-neon-blue/30 transition-all group">
                  <div className="text-primary-purple mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-xs uppercase tracking-widest text-text-dark-muted font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-blue/20 blur-[60px] rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-purple/20 blur-[60px] rounded-full"></div>
            
            <div className="glass p-8 rounded-3xl border-white/10 relative z-10">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-neon-blue/20 flex items-center justify-center text-neon-blue">?</span>
                Why Hire Me?
              </h4>
              <ul className="space-y-4">
                {[
                  "Full-stack expertise across React, Node, Express, & MongoDB.",
                  "Strong focus on UI/UX with modern design principles.",
                  "Efficient at building responsive & SEO-optimized apps.",
                  "Problem-solving mindset with a passion for learning new tech.",
                  "Excellent communication and teamwork in agile environments."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-text-dark-muted">
                    <span className="text-neon-blue font-bold">?</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Animated Shape Background */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-10 pointer-events-none"
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#0ea5e9" d="M44.7,-76.4C58.2,-69.2,70.1,-59,79.1,-46.3C88.1,-33.5,94.2,-18.2,93.6,-3.2C93,11.8,85.6,26.5,76.5,39.6C67.4,52.7,56.6,64.2,43.2,72.4C29.8,80.6,13.9,85.5,-1.9,88.7C-17.7,91.9,-35.4,93.4,-49.8,86.6C-64.2,79.8,-75.3,64.7,-82,49C-88.7,33.3,-91,17,-90.4,0.3C-89.8,-16.4,-86.3,-33.5,-77.8,-47.9C-69.3,-62.3,-55.8,-74,-41.2,-80.6C-26.6,-87.2,-10.8,-88.7,3.5,-94.7C17.8,-100.7,31.2,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Server, LayoutDashboard } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "IoT Agriculture Shield",
      category: "frontend",
      description: "An AI-powered dashboard for agriculture protection, utilizing Laser Diodes and GSM alerts for real-time field monitoring.",
      tech: ["React", "Express", "Arduino", "IoT"],
      image: "/images/project1.jpg",
      github: "https://github.com/portifystudio",
      demo: "#"
    },
    {
      id: 2,
      title: "Nexus Hotel System",
      category: "backend",
      description: "A robust Java-based backend with efficient file-based data storage and automated booking logic for high-traffic hotels.",
      tech: ["Java", "OOP", "File Handling", "CUI"],
      image: "/images/project2.jpg",
      github: "https://github.com/portifystudio",
      demo: "#"
    },
    {
      id: 3,
      title: "BakeSync GUI",
      category: "fullstack",
      description: "A centralized bakery management platform featuring live inventory updates, PDF export, and JDBC secure integration.",
      tech: ["Java Swing", "JDBC", "MySQL", "JasperReports"],
      image: "/images/project3.jpg",
      github: "https://github.com/portifystudio",
      demo: "#"
    },
    {
      id: 4,
      title: "MERN Cloud Storage",
      category: "fullstack",
      description: "A distributed cloud file storage solution with multi-factor authentication and real-time synchronization.",
      tech: ["MongoDB", "Express", "React", "Node"],
      image: "/images/project4.jpg",
      github: "https://github.com/portifystudio",
      demo: "#"
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-secondary-color text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-primary-purple">Projects.</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-neon-blue to-primary-purple rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {['all', 'frontend', 'backend', 'fullstack'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold capitalize transition-all border ${filter === cat
                ? 'bg-gradient-to-r from-primary-purple to-neon-blue text-white border-transparent shadow-[0_0_15px_rgba(109,40,217,0.4)]'
                : 'glass text-text-dark-muted border-white/5 hover:border-neon-blue/30'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group glass rounded-3xl overflow-hidden border-white/5 hover:border-neon-blue/30 transition-all flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {project.category === 'fullstack' && <LayoutDashboard size={18} className="text-neon-blue" />}
                    {project.category === 'frontend' && <Code2 size={18} className="text-accent-pink" />}
                    {project.category === 'backend' && <Server size={18} className="text-primary-purple" />}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                  <p className="text-text-dark-muted text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full border border-white/5 text-text-dark-muted">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:bg-neon-blue/20 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:bg-primary-purple/20 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

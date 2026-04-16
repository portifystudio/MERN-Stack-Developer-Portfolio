import React from 'react';
import { motion } from 'framer-motion';
import { Database, Globe, Server, Cpu, Box, Layers, Code, Wrench } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Globe className="text-neon-blue" />,
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Tailwind / SCSS", level: 92 },
        { name: "HTML5 / CSS3", level: 98 },
        { name: "Framer Motion", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-primary-purple" />,
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "MongoDB / Mongoose", level: 90 },
        { name: "Java / JDBC", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "RESTful APIs", level: 92 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="text-accent-pink" />,
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "Docker / Kubernetes", level: 75 },
        { name: "Vite / Webpack", level: 90 },
        { name: "AWS / Vercel", level: 85 },
        { name: "CI/CD Pipelines", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-bg-dark">
      <div className="container">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-primary-purple">Skills.</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-neon-blue to-primary-purple rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-primary-purple/30 group transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary-purple/20 transition-all">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-text-dark-muted">{skill.name}</span>
                      <span className="text-xs font-bold text-neon-blue">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary-purple to-neon-blue"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Icons Background */}
        <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-20 filter grayscale hover:grayscale-0 transition-all duration-700">
          {[<Code />, <Database />, <Layers />, <Box />, <Server />].map((icon, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              className="text-white hover:text-neon-blue cursor-pointer"
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

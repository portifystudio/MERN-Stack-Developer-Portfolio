import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Senior MERN Developer",
    company: "TechNova Solutions",
    period: "2024 - Present",
    desc: "Leading the development of high-scale SaaS platforms using React & Node.js. Optimizing MongoDB performance and implementing secure JWT-based authentication systems.",
    type: "work"
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "DevFlow Inc.",
    period: "2022 - 2024",
    desc: "Built and maintained multiple client-facing web applications. Focused on responsive UI/UX and integrated various third-party APIs for seamless data flow.",
    type: "work"
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "StartUp Hub",
    period: "2021 - 2022",
    desc: "Assisted in building frontend components with React and styling with Tailwind CSS. Collaborated on backend bug fixes and feature enhancements.",
    type: "work"
  },
  {
    id: 4,
    title: "Bachelor of Technology",
    company: "University of Tech",
    period: "2017 - 2021",
    desc: "Specialized in Computer Science & Engineering. Developed core programming skills in Java, Python, and Web Technologies.",
    type: "education"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-neon-blue">Journey.</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-neon-blue to-primary-purple rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Box */}
                <div className="w-full md:w-5/12">
                  <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary-purple/30 transition-all relative">
                    <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-widest text-primary-purple-light">
                      <Calendar size={14} /> {exp.period}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <h4 className="text-sm text-neon-blue font-semibold mb-4">{exp.company}</h4>
                    <p className="text-sm text-text-dark-muted leading-relaxed">
                      {exp.desc}
                    </p>
                    {/* Triangle pointer for desktop */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-glass-bg-dark border-t border-r border-white/5 rotate-45 ${i % 2 === 0 ? '-right-2' : '-left-2'}`}></div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 bg-bg-dark border border-primary-purple/30 rounded-full flex items-center justify-center text-neon-blue z-10 shadow-[0_0_15px_rgba(109,40,217,0.3)]">
                  {exp.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                </div>

                {/* Empty Space for layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

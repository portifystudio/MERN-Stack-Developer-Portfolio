import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2, Award, Zap, Briefcase } from 'lucide-react';

const ResumeSummary = () => {
  const highlights = [
    { text: "3+ Years Experience", icon: <Briefcase size={20} />, sub: "Professional Work" },
    { text: "15+ Projects", icon: <CheckCircle2 size={20} />, sub: "Shipped Successfully" },
    { text: "Certificated Expert", icon: <Award size={20} />, sub: "Full Stack MERN" },
    { text: "AI Specialist", icon: <Zap size={20} />, sub: "LLMs & Integration" }
  ];

  return (
    <section id="resume-summary" className="py-24 relative overflow-hidden">
      <div className="container max-w-6xl">
        <div className="glass p-12 md:p-20 rounded-[4rem] border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.6)] text-center relative overflow-hidden">
          
          {/* Subtle Dynamic Surface Glows */}
          <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-primary-purple/10 blur-[150px] -z-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-neon-blue/10 blur-[150px] -z-10 rounded-full"></div>

          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Quote Header */}
            <h2 className="text-3xl md:text-5xl font-extrabold italic leading-tight mb-8">
              "Building <span className="text-neon-blue">stunning interfaces</span> with <span className="text-primary-purple-light underline underline-offset-8 decoration-white/10">reliable architecture</span>."
            </h2>
            
            <p className="text-text-dark-muted text-lg md:text-xl mb-16 leading-relaxed max-w-2xl">
              Specializing in bridging the gap between high-end design and performant code. 
              Delivering scalable SaaS solutions and high-conversion experiences.
            </p>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.03)' }}
                  className="p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center group transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-purple/20 to-neon-blue/20 flex items-center justify-center text-neon-blue mb-4 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all">
                    {h.icon}
                  </div>
                  <h4 className="text-white font-black text-lg mb-1">{h.text}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-text-dark-muted font-bold">{h.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Final CTA Button */}
            <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 25px 60px rgba(109, 40, 217, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/sriramojumadhan-ops/Portfolio/blob/main/assets/Resume_for_placement%20(1)%20(1).pdf"
                target="_blank"
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-primary-purple to-neon-blue rounded-full text-white font-black text-xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all"
            >
              <span className="relative z-10">Download Full Resume</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Download size={24} />
              </motion.div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-x-0 top-0 h-full w-24 bg-white/10 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSummary;

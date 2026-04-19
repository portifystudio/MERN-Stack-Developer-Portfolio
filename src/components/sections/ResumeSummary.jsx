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
    <section id="resume-summary" className="py-16 md:py-24 relative overflow-hidden px-4 md:px-0">
      <div className="container max-w-6xl mx-auto">
        <div className="glass p-8 sm:p-12 md:p-20 rounded-[2rem] md:rounded-[4rem] border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.6)] text-center relative overflow-hidden">
          
          {/* Subtle Dynamic Surface Glows */}
          <div className="absolute top-0 -left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-purple/10 blur-[100px] md:blur-[150px] -z-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 -right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-neon-blue/10 blur-[100px] md:blur-[150px] -z-10 rounded-full"></div>

          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Quote Header */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold italic leading-tight mb-6 md:mb-8">
              "Building <span className="text-neon-blue">stunning interfaces</span> with <span className="text-primary-purple-light underline underline-offset-4 md:underline-offset-8 decoration-white/10">reliable architecture</span>."
            </h2>
            
            <p className="text-text-dark-muted text-base md:text-lg lg:text-xl mb-10 md:mb-16 leading-relaxed max-w-2xl px-2">
              Specializing in bridging the gap between high-end design and performant code. 
              Delivering scalable SaaS solutions and high-conversion experiences.
            </p>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mb-12 md:mb-16">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.03)' }}
                  className="p-5 md:p-6 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center group transition-all"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary-purple/20 to-neon-blue/20 flex items-center justify-center text-neon-blue mb-3 md:mb-4 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all">
                    {h.icon}
                  </div>
                  <h4 className="text-white font-black text-base md:text-lg mb-1">{h.text}</h4>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-dark-muted font-bold">{h.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Final CTA Button */}
            <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 25px 60px rgba(109, 40, 217, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/sriramojumadhan-ops/Portfolio/blob/main/assets/Resume_for_placement%20(1)%20(1).pdf"
                target="_blank"
                className="group relative inline-flex items-center justify-center gap-3 md:gap-4 px-6 py-4 sm:px-8 sm:py-4 md:px-12 md:py-6 bg-gradient-to-r from-primary-purple to-neon-blue rounded-full text-white font-black text-base sm:text-lg md:text-xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all w-full sm:w-auto"
            >
              <span className="relative z-10 whitespace-nowrap">Download Full Resume</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex-shrink-0"
              >
                <Download className="w-5 h-5 md:w-6 md:h-6" />
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

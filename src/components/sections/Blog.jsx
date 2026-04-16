import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const [activeTag, setActiveTag] = useState('all');

  const posts = [
    {
      id: 1,
      title: "Building Scalable REST APIs with Node.js & Express",
      excerpt: "Learn the best practices for building production-ready REST APIs — from authentication middleware to rate limiting and optimized MongoDB queries.",
      date: "March 15, 2026",
      readTime: "8 min read",
      tags: ["backend", "nodejs"],
      image: "/images/blog1.jpg"
    },
    {
      id: 2,
      title: "React 19 & the Future of Frontend Architecture",
      excerpt: "A deep dive into React 19's new compiler, Server Components revolution, and how they radically simplify state management and rendering patterns.",
      date: "February 28, 2026",
      readTime: "10 min read",
      tags: ["frontend", "react"],
      image: "/images/blog2.jpg"
    },
    {
      id: 3,
      title: "MongoDB vs PostgreSQL — Which Should You Choose?",
      excerpt: "A real-world comparison of MongoDB and PostgreSQL for MERN stack apps. Discover when to use document vs relational databases for your next project.",
      date: "January 20, 2026",
      readTime: "7 min read",
      tags: ["backend", "database"],
      image: "/images/blog3.jpg"
    },
    {
      id: 4,
      title: "Glassmorphism & the Rise of Premium UI Design",
      excerpt: "From flat design to neomorphism to glassmorphism — explore how modern web design is evolving and implement stunning glass effects in React.",
      date: "December 10, 2025",
      readTime: "6 min read",
      tags: ["frontend", "design"],
      image: "/images/blog4.jpg"
    },
    {
      id: 5,
      title: "Mastering JWT Authentication in Full-Stack Apps",
      excerpt: "A complete guide to implementing secure JWT authentication with refresh tokens, protected routes, and best security practices in MERN stacks.",
      date: "November 5, 2025",
      readTime: "9 min read",
      tags: ["backend", "security"],
      image: "/images/blog5.jpg"
    },
    {
      id: 6,
      title: "State Management in 2026: Redux vs Zustand vs Context",
      excerpt: "Which state management library wins in 2026? A performance-first comparison of Redux Toolkit, Zustand, and React Context for modern React apps.",
      date: "October 18, 2025",
      readTime: "11 min read",
      tags: ["frontend", "react"],
      image: "/images/blog6.jpg"
    }
  ];

  const allTags = ['all', 'frontend', 'backend', 'react', 'database', 'design', 'security'];

  const filtered = activeTag === 'all'
    ? posts
    : posts.filter(p => p.tags.includes(activeTag));

  const tagColors = {
    frontend: 'from-neon-blue/20 to-neon-blue/5 border-neon-blue/30 text-neon-blue',
    backend: 'from-primary-purple/20 to-primary-purple/5 border-primary-purple/30 text-primary-purple-light',
    react: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400',
    database: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400',
    design: 'from-accent-pink/20 to-accent-pink/5 border-accent-pink/30 text-pink-400',
    security: 'from-orange-500/20 to-orange-500/5 border-orange-500/30 text-orange-400',
  };

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-neon-blue/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="container">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <BookOpen size={32} className="text-neon-blue" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-primary-purple">Blog.</span>
            </h2>
          </motion.div>
          <div className="w-20 h-1.5 bg-gradient-to-r from-neon-blue to-primary-purple rounded-full"></div>
          <p className="mt-6 text-text-dark-muted max-w-xl text-center">
            Thoughts, tutorials, and deep-dives into full-stack development, modern architecture, and design systems.
          </p>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-all border ${
                activeTag === tag
                  ? 'bg-gradient-to-r from-primary-purple to-neon-blue text-white border-transparent'
                  : 'glass text-text-dark-muted border-white/5 hover:border-neon-blue/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((post) => (
              <motion.article
                layout
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-neon-blue/30 flex flex-col transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-70 z-10"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Tags overlay */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border bg-gradient-to-br ${tagColors[tag] || 'text-white border-white/10'}`}
                      >
                        <Tag size={8} className="inline mr-1" />{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-5 text-xs text-text-dark-muted mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-neon-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-dark-muted leading-relaxed flex-grow line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>

                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-bold text-neon-blue hover:gap-4 transition-all"
                  >
                    Read Article <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

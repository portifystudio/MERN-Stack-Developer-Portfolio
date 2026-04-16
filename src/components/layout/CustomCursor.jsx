import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // High-performance spring physics
  const springX = useSpring(0, { damping: 50, stiffness: 400 });
  const springY = useSpring(0, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const moveCursor = (e) => {
      springX.set(e.clientX);
      springY.set(e.clientY);

      const target = e.target;
      setIsPointer(!!target.closest('a, button, input, textarea, select, [data-cursor]'));
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [springX, springY]);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.5)]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPointer ? 80 : 30,
          height: isPointer ? 80 : 30,
          opacity: isHidden ? 0 : 1,
          backgroundColor: isPointer ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      {/* Inner Core Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-neon-blue"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPointer ? 10 : 6,
          height: isPointer ? 10 : 6,
          opacity: isHidden ? 0 : 1,
          scale: isPointer ? 0 : 1,
        }}
      />
      
      {/* View Tag */}
      {isPointer && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 px-3 py-1 bg-neon-blue rounded-full"
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '40px',
          }}
        >
          <span className="text-[10px] font-black uppercase text-white tracking-widest">View</span>
        </motion.div>
      )}
    </div>
  );
};

export default CustomCursor;

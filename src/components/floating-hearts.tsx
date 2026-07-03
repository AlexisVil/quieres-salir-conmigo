'use client';

import { motion } from 'framer-motion';

const hearts = ['💜', '❤️', '💕', '💖', '💘', '🐱'];

export function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      {Array.from({ length: 22 }).map((_, index) => {
        const left = 5 + ((index * 17) % 90);
        const delay = (index % 7) * 0.22;
        const duration = 3.6 + (index % 5) * 0.25;
        const size = 20 + (index % 4) * 8;

        return (
          <motion.span
            key={index}
            className="absolute bottom-[-40px] select-none"
            style={{ left: `${left}%`, fontSize: size }}
            initial={{ y: 0, opacity: 0, scale: 0.6, rotate: -12 }}
            animate={{
              y: ['0vh', '-105vh'],
              x: [0, index % 2 === 0 ? 28 : -28, 0],
              opacity: [0, 1, 1, 0],
              scale: [0.6, 1, 1.1],
              rotate: [0, index % 2 === 0 ? 16 : -16],
            }}
            transition={{ duration, delay, ease: 'easeOut' }}
          >
            {hearts[index % hearts.length]}
          </motion.span>
        );
      })}
    </div>
  );
}

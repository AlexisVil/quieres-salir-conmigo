'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  text: string;
  className?: string;
  speedMs?: number;
};

export function TypewriterLine({ text, className, speedMs = 42 }: Props) {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setValue(text.slice(0, index));
      if (index >= text.length) window.clearInterval(interval);
    }, speedMs);

    return () => window.clearInterval(interval);
  }, [speedMs, text]);

  return (
    <p className={className} aria-label={text}>
      <span>{value}</span>
      <motion.span
        aria-hidden
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      >
        |
      </motion.span>
    </p>
  );
}

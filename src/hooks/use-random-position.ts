'use client';

import { useCallback, useState } from 'react';

export function useRandomPosition(maxX = 220, maxY = 120) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const randomize = useCallback(() => {
    const x = Math.round((Math.random() - 0.5) * maxX);
    const y = Math.round((Math.random() - 0.5) * maxY);
    setPosition({ x, y });
  }, [maxX, maxY]);

  return { position, randomize };
}

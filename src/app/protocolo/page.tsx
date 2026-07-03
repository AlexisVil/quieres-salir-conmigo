'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { Card } from '@/components/card';
import { FloatingHearts } from '@/components/floating-hearts';
import { PetAvatar } from '@/components/pet-avatar';
import { PrimaryButton } from '@/components/primary-button';
import { ProgressDots } from '@/components/progress-dots';
import { Shell } from '@/components/shell';
import { TypewriterLine } from '@/components/typewriter-line';
import { useRandomPosition } from '@/hooks/use-random-position';

export default function ProtocolPage() {
  const router = useRouter();
  const [attempts, setAttempts] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const { position, randomize } = useRandomPosition();
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const noStillExists = attempts < 5;

  function acceptDate() {
    setAccepted(true);
    window.setTimeout(() => router.push('/cita'), 900);
  }

  function evadeNo() {
    setAttempts((value) => value + 1);
    randomize();
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!noButtonRef.current || !noStillExists) return;

    const rect = noButtonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt((e.clientX - centerX) ** 2 + (e.clientY - centerY) ** 2);

    if (distance < 80) evadeNo();
  }

  return (
    <Shell>
      {accepted && <FloatingHearts />}
      <ProgressDots step={2} />
      <PetAvatar variant="dog" />
      <Card className="text-center">
        <div className="mb-5 flex justify-center gap-4 text-5xl" aria-hidden>
          <span>🐶</span>
          <span>🌹</span>
          <span>🐕</span>
        </div>
        <h1 className="text-3xl font-black sm:text-5xl">¿Quieres tener una cita conmigo? 😍💕</h1>
        <TypewriterLine
          text="// validando respuesta: solo se aceptan respuestas bonitas..."
          className="mt-4 font-mono text-sm text-slate-500 dark:text-slate-300"
          speedMs={28}
        />
        <div onMouseMove={handleMouseMove} className="mt-8 grid gap-4 sm:grid-cols-2">
          <PrimaryButton onClick={acceptDate}>Sí 💜</PrimaryButton>
          {noStillExists ? (
            <motion.button
              ref={noButtonRef}
              type="button"
              onMouseEnter={evadeNo}
              onFocus={evadeNo}
              animate={{
                x: position.x,
                y: position.y,
                rotate: attempts % 2 === 0 ? -6 : 6,
                scale: Math.max(0.65, 1 - attempts * 0.08),
                opacity: Math.max(0.25, 1 - attempts * 0.16),
              }}
              transition={{ type: 'spring', stiffness: 420, damping: 18 }}
              className="min-h-14 rounded-2xl bg-slate-900 px-6 text-lg font-bold text-white transition hover:bg-slate-800 dark:bg-white/20"
            >
              {attempts < 1 ? 'No' : 'No, mañana'}
            </motion.button>
          ) : (
            <div className="rounded-2xl border border-dashed border-violet-300 p-4 font-mono text-sm text-violet-700 dark:text-violet-200">
             El “No” ya no es una opción para ti 🐱💜
            </div>
          )}
        </div>
      </Card>
    </Shell>
  );
}

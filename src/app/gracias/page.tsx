'use client';

import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import { Card } from '@/components/card';
import { FloatingHearts } from '@/components/floating-hearts';
import { PetAvatar } from '@/components/pet-avatar';
import { PrimaryButton } from '@/components/primary-button';
import { ProgressDots } from '@/components/progress-dots';
import { Shell } from '@/components/shell';

export default function ThanksPage() {
  useEffect(() => {
    confetti({ particleCount: 160, spread: 90, origin: { y: 0.65 } });
  }, []);

  return (
    <Shell>
      <FloatingHearts />
      <ProgressDots step={4} />
      <PetAvatar variant="party" />

      <Card className="text-center">
        <h1 className="text-4xl font-black text-violet-700 sm:text-6xl">
          ¡¡Perfecto!!
        </h1>

        <p className="mt-4 text-xl font-semibold">
          Ya quedó registrada la cita.
        </p>

        <p className="mt-8 text-slate-600 dark:text-slate-200">
          Te escribiré pronto ❤️
        </p>

        <div className="mx-auto mt-8 max-w-sm">
          <PrimaryButton href="/" className="w-full">
            Volver al inicio
          </PrimaryButton>
        </div>
      </Card>
    </Shell>
  );
}
import { Card } from '@/components/card';
import { PetAvatar } from '@/components/pet-avatar';
import { PrimaryButton } from '@/components/primary-button';
import { ProgressDots } from '@/components/progress-dots';
import { Shell } from '@/components/shell';
import { TypewriterLine } from '@/components/typewriter-line';

export default function HomePage() {
  return (
    <Shell>
      <ProgressDots step={1} />
      <PetAvatar />
      <h1 className="text-center text-4xl font-black tracking-tight text-violet-700 sm:text-6xl">
        ¿Saldrías conmigo?
      </h1>
      <TypewriterLine
        text="// ejecutando: peticion_romantica_final_en_mi_vida_v1.0.0"
        className="mt-3 font-mono text-sm text-slate-500 dark:text-slate-300"
      />
      <Card className="mt-10 text-center">
        <p className="mb-6 text-lg font-semibold text-slate-700 dark:text-slate-100">
          Antes de responder, inicia el protocolo romántico 😘
        </p>
        <PrimaryButton href="/protocolo">[ INICIAR PROTOCOLO → ]</PrimaryButton>
      </Card>
    </Shell>
  );
}

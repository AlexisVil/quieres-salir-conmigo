'use client';

import { useRouter } from 'next/navigation';
import { Card } from '@/components/card';
import { PetAvatar } from '@/components/pet-avatar';
import { PrimaryButton } from '@/components/primary-button';
import { ProgressDots } from '@/components/progress-dots';
import { Shell } from '@/components/shell';
import { WHATSAPP_PHONE } from '@/lib/constants';

export default function DatePage() {
  const router = useRouter();

  const message =
    'Confirmo la cita 💜 Te veo el Viernes 10 de Julio a las 7 pm';

  function confirmWhatsApp() {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
    router.push('/gracias');
  }

  return (
    <Shell>
      <ProgressDots step={3} />
      <PetAvatar variant="party" />

      <Card className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-500">
          Plan reservado
        </p>

        <h1 className="mt-4 text-3xl font-black sm:text-5xl">
          Te espero el Viernes 10 de Julio a las 7 pm 💜
        </h1>

        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Confirma por WhatsApp para dejarlo oficialmente aceptado.
        </p>

        <PrimaryButton onClick={confirmWhatsApp} className="mt-8 w-full">
          Confirmar por WhatsApp 💌
        </PrimaryButton>
      </Card>
    </Shell>
  );
}
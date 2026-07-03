'use client';

import confetti from 'canvas-confetti';
import { useEffect, useMemo, useState } from 'react';
import { Card } from '@/components/card';
import { FloatingHearts } from '@/components/floating-hearts';
import { PetAvatar } from '@/components/pet-avatar';
import { PrimaryButton } from '@/components/primary-button';
import { ProgressDots } from '@/components/progress-dots';
import { Shell } from '@/components/shell';
import { WHATSAPP_PHONE, datePlans } from '@/lib/constants';

type DateRequest = {
  date: string;
  time: string;
  plan: string;
  message?: string;
};


function buildWhatsAppUrl(request: DateRequest | null, planLabel: string) {
  const message = [
    'Holaaa 💜 ya acepté la cita:',
    `📅 Fecha: ${formatDate(request?.date)}`,
    `🕐 Hora: ${request?.time || 'Hora pendiente'}`,
    `✨ Plan: ${planLabel}`,
    request?.message ? `💌 Mensaje: ${request.message}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

function formatDate(value?: string) {
  if (!value) return 'Fecha pendiente';
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(year, month - 1, day));
}

export default function ThanksPage() {
  const [request, setRequest] = useState<DateRequest | null>(null);

  useEffect(() => {
    const savedRequest = sessionStorage.getItem('date-request');
    if (savedRequest) setRequest(JSON.parse(savedRequest) as DateRequest);
    confetti({ particleCount: 160, spread: 90, origin: { y: 0.65 } });
  }, []);

  const plan = useMemo(
    () => datePlans.find((item) => item.id === request?.plan),
    [request?.plan],
  );
  const planLabel = plan ? `${plan.emoji} ${plan.label}` : 'Plan sorpresa';
  const whatsappUrl = buildWhatsAppUrl(request, planLabel);

  return (
    <Shell>
      <FloatingHearts />
      <ProgressDots step={4} />
      <PetAvatar variant="party" />
      <Card className="text-center">
        <h1 className="text-4xl font-black text-violet-700 sm:text-6xl">¡¡Perfecto!!</h1>
        <p className="mt-4 text-xl font-semibold">Ya quedó registrada la cita.</p>

        <div className="mx-auto mt-8 max-w-xl rounded-[2rem] border border-violet-100 bg-violet-50/80 p-5 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-violet-600">Resumen de la cita</p>
          <dl className="mt-5 grid gap-3">
            <div className="rounded-2xl bg-white p-4 dark:bg-black/20">
              <dt className="text-sm text-slate-500">Fecha</dt>
              <dd className="font-bold capitalize">📅 {formatDate(request?.date)}</dd>
            </div>
            <div className="rounded-2xl bg-white p-4 dark:bg-black/20">
              <dt className="text-sm text-slate-500">Hora</dt>
              <dd className="font-bold">🕐 {request?.time || 'Hora pendiente'}</dd>
            </div>
            <div className="rounded-2xl bg-white p-4 dark:bg-black/20">
              <dt className="text-sm text-slate-500">Plan</dt>
              <dd className="font-bold">{planLabel}</dd>
            </div>
            {request?.message && (
              <div className="rounded-2xl bg-white p-4 dark:bg-black/20">
                <dt className="text-sm text-slate-500">Mensaje</dt>
                <dd className="font-semibold">💌 {request.message}</dd>
              </div>
            )}
          </dl>
        </div>

        <p className="mt-6 text-slate-600 dark:text-slate-200">Te escribiré pronto ❤️</p>
        <div className="mt-8">
          <div className="grid gap-3 sm:grid-cols-2">
            <PrimaryButton href={whatsappUrl}>Enviar resumen por WhatsApp 💬</PrimaryButton>
            <PrimaryButton href="/">Volver al inicio</PrimaryButton>
          </div>
        </div>
      </Card>
    </Shell>
  );
}

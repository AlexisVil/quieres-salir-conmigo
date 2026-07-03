'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Card } from '@/components/card';
import { PrimaryButton } from '@/components/primary-button';
import { ProgressDots } from '@/components/progress-dots';
import { Shell } from '@/components/shell';
import { datePlans, timeOptions } from '@/lib/constants';

const schema = z.object({
  date: z.string().min(1, 'Elige una fecha'),
  time: z.string().min(1, 'Elige una hora'),
  plan: z.string().min(1, 'Elige un plan'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function formatDate(value?: string) {
  if (!value) return 'Aún sin fecha';
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(year, month - 1, day));
}

export default function DatePage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const selectedDate = watch('date');
  const selectedTime = watch('time');
  const selectedPlanId = watch('plan');
  const selectedPlan = useMemo(
    () => datePlans.find((plan) => plan.id === selectedPlanId),
    [selectedPlanId],
  );

  const onSubmit = (data: FormData) => {
    sessionStorage.setItem('date-request', JSON.stringify(data));
    router.push('/gracias');
  };

  return (
    <Shell>
      <ProgressDots step={3} />
      <Card>
        <h1 className="text-center text-4xl font-black text-violet-700">Perfecto ❤️</h1>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-200">
          Ahora elige cuándo y qué plan se antoja.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <section className="rounded-[2rem] border border-violet-100 bg-violet-50/70 p-5 dark:border-white/10 dark:bg-white/10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">Resumen previo</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-black/20">
                <span className="text-2xl">📅</span>
                <p className="mt-2 text-sm font-semibold capitalize">{formatDate(selectedDate)}</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-black/20">
                <span className="text-2xl">🕐</span>
                <p className="mt-2 text-sm font-semibold">{selectedTime || 'Aún sin hora'}</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-black/20">
                <span className="text-2xl">{selectedPlan?.emoji ?? '✨'}</span>
                <p className="mt-2 text-sm font-semibold">{selectedPlan?.label ?? 'Aún sin plan'}</p>
              </div>
            </div>
          </section>

          <label className="block">
            <span className="font-bold">Fecha 📅</span>
            <input
              type="date"
              {...register('date')}
              className="mt-2 w-full rounded-2xl border border-violet-100 bg-white p-4 text-slate-950 shadow-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-200"
            />
            {errors.date && <small className="text-red-500">{errors.date.message}</small>}
          </label>

          <fieldset>
            <legend className="mb-3 font-bold">Hora 🕐</legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {timeOptions.map((time) => (
                <label
                  key={time}
                  className="heart-cursor rounded-2xl border border-slate-200 bg-white p-4 text-center font-bold text-slate-950 shadow-sm transition hover:border-violet-400 hover:shadow-md has-[:checked]:border-violet-500 has-[:checked]:bg-violet-100 has-[:checked]:text-violet-800"
                >
                  <input className="sr-only" type="radio" value={time} {...register('time')} />
                  {time}
                </label>
              ))}
            </div>
            {errors.time && <small className="text-red-500">{errors.time.message}</small>}
          </fieldset>

          <fieldset>
            <legend className="mb-3 font-bold">Plan</legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {datePlans.map((plan) => (
                <motion.label
                  whileHover={{ y: -3, scale: 1.02 }}
                  key={plan.id}
                  className="heart-cursor rounded-2xl border border-slate-200 bg-white p-4 text-center text-slate-950 shadow-sm transition hover:border-violet-400 hover:shadow-md has-[:checked]:border-violet-500 has-[:checked]:bg-violet-100 has-[:checked]:text-violet-800"
                >
                  <input className="sr-only" type="radio" value={plan.id} {...register('plan')} />
                  <span className="block text-3xl">{plan.emoji}</span>
                  <span className="font-semibold">{plan.label}</span>
                </motion.label>
              ))}
            </div>
            {errors.plan && <small className="text-red-500">{errors.plan.message}</small>}
          </fieldset>

          <label className="block">
            <span className="font-bold">Mensaje opcional 💌</span>
            <textarea
              rows={4}
              {...register('message')}
              placeholder="Escribe un mensaje..."
              className="mt-2 w-full resize-none rounded-2xl border border-violet-100 bg-white p-4 text-slate-950 shadow-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-200"
            />
          </label>

          <PrimaryButton type="submit">Confirmar cita ❤️</PrimaryButton>
        </form>
      </Card>
    </Shell>
  );
}

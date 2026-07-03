import { cn } from '@/lib/utils';

export function ProgressDots({ step }: { step: 1 | 2 | 3 | 4 }) {
  return (
    <div aria-label={`Paso ${step} de 4`} className="mb-8 flex gap-2">
      {[1, 2, 3, 4].map((item) => (
        <span key={item} className={cn('h-2.5 rounded-full transition-all', item <= step ? 'w-8 bg-violet-600' : 'w-2.5 bg-slate-300 dark:bg-white/30')} />
      ))}
    </div>
  );
}

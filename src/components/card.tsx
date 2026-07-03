import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('w-full rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-glow backdrop-blur dark:border-white/10 dark:bg-white/10 sm:p-8', className)}>
      {children}
    </div>
  );
}

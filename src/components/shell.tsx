import type { ReactNode } from 'react';

export function Shell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-dvh overflow-hidden bg-gradient-to-br from-white via-violet-50 to-pink-50 text-slate-950 dark:from-slate-950 dark:via-violet-950 dark:to-slate-900 dark:text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(236,72,153,.18),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,.20),transparent_26%)]" />
      <section className="relative mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-center justify-center px-5 py-12">
        {children}
      </section>
    </main>
  );
}

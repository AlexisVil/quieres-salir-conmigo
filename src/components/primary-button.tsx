import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
};

export function PrimaryButton({ children, href, type = 'button', className, onClick }: Props) {
  const classes = cn(
    'inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-violet-700 px-6 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02] hover:bg-violet-800 active:scale-[.99]',
    className,
  );

  if (href?.startsWith('http')) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  if (href) return <Link className={classes} href={href}>{children}</Link>;

  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}

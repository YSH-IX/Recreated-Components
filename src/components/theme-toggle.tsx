'use client';

import { cn } from '@/lib/utils';
import { CircleHalfIcon } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';
import { MouseEvent, useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = async (e: MouseEvent<HTMLButtonElement>) => {
    if (!mounted || !resolvedTheme) return;
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });
    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: ['inset(0 100% 0 0)', 'inset(0)'],
      },
      {
        pseudoElement: '::view-transition-new(root)',
        duration: 400,
        easing: 'ease-in-out',
      },
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'absolute right-10 bottom-10 z-100 cursor-pointer rounded-full border transition-transform duration-100 ease-out will-change-transform outline-none hover:scale-101 active:scale-98',
        'border-neutral-300 bg-neutral-100 text-neutral-800',
        'dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100',
      )}
    >
      <div className="relative p-3">
        <CircleHalfIcon
          weight="regular"
          size={18}
          color="currentColor"
          className="size-7"
        />
      </div>
    </button>
  );
};

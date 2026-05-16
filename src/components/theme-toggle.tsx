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
        "absolute right-10 bottom-10 cursor-pointer rounded-full border p-2 transition-transform duration-100 ease-out will-change-transform hover:scale-101 active:scale-98",
        "border-neutral-400 bg-neutral-100 text-neutral-600",
        "dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-200"
      )}
 
    >
      <CircleHalfIcon
        weight="regular"
        size={22}
        color="currentColor"
        className="size-7"
      />
    </button>
  );
};

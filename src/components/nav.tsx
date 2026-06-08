'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
export const Nav = () => {
  const navLinks = [
    { href: '#', title: 'Home' },
    { href: '#', title: 'About' },
    { href: '#', title: 'Services' },
    { href: '#', title: 'Contact' },
    { href: '#', title: 'Profile' },
  ];

  const [selected, setSelected] = useState<number | null>(0);
  return (
    <div className="div-center bg-primary h-dvh w-full p-2">
      {/* Skeumorphic version */}
      <nav
        className={cn(
          'font-inter flex w-fit items-center rounded-[18px] border p-1.5',
          'shadow-[inset_0_-2px_1px_0_rgba(255,255,255,0.2),inset_0_2px_1px_0_rgba(0,0,0,0.1)]',
          'dark:shadow-[inset_0_-2px_1px_0_rgba(200,200,200,0.2),inset_0_2px_1px_0_rgba(0,0,0,0.8)]',
          'border-neutral-300 dark:border-neutral-900',
          'bg-linear-to-b dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950/80',
          'from-neutral-50 via-neutral-50/90 to-neutral-50/80',
        )}
      >
        {navLinks.map((nav, idx) => (
          <Link
            onClick={() => setSelected(idx)}
            key={idx}
            href={nav.href}
            className="group relative text-center text-neutral-600 outline-none dark:text-neutral-500"
          >
            {selected === idx && (
              <motion.div
                layoutId={'hover'}
                className={cn(
                  'absolute inset-0 rounded-xl',
                  'bg-linear-to-b from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900',
                  'shadow-[inset_0_1.5px_1px_0_rgba(255,255,255,1),inset_0_-1px_1px_0_rgba(0,0,0,0.2)]',
                  'dark:shadow-[inset_0_1.5px_1px_0_rgba(200,200,200,0.2),inset_0_-1px_1px_0_rgba(0,0,0,0.4)]',
                )}
              ></motion.div>
            )}
            <div
              className={cn(
                'relative px-4 py-2 text-sm transition-colors duration-200 ease-out',
                selected === idx
                  ? 'text-neutral-800 dark:text-neutral-300'
                  : 'group-hover:text-neutral-800 dark:group-hover:text-neutral-200',
              )}
            >
              {nav.title}
            </div>
          </Link>
        ))}
      </nav>
      {/* Basic Navbar */}
      {/* <nav
        onMouseLeave={() => setHovered(null)}
        className="flex w-full max-w-md items-center rounded-full border border-neutral-600 bg-neutral-100 p-1"
      >
        {navLinks.map((nav, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            key={idx}
            href={nav.href}
            className="group relative w-full rounded-full text-center text-neutral-900"
          >
            {hovered === idx && (
              <motion.div
                layoutId={'hover'}
                className="absolute inset-0 size-full rounded-full bg-neutral-900"
              ></motion.div>
            )}
            <div className="relative rounded-full py-4 group-hover:text-neutral-700">
              {nav.title}
            </div>
          </Link>
        ))}
      </nav> */}
    </div>
  );
};

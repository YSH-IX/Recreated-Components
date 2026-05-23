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
    <div className="div-center min-h-screen w-full bg-gray-100 p-2 bg-primary">
      {/* Skeumorphic version */}
      <nav
        className={cn(
          'font-inter flex w-fit items-center rounded-[18px] border p-1.5 dark:border-neutral-900',
          'shadow-[inset_0_-2px_1px_0_rgba(200,200,200,0.2),inset_0_2px_1px_0_rgba(0,0,0,0.8)]',
          'dark:bg-linear-to-b from-neutral-950 via-neutral-950/90 to-neutral-950/80',
        )}
      >
        {navLinks.map((nav, idx) => (
          <Link
            onClick={() => setSelected(idx)}
            key={idx}
            href={nav.href}
            className="group relative  text-center outline-none dark:text-neutral-500"
          >
            {selected === idx && (
              <motion.div
                layoutId={'hover'}
                className={cn(
                  'absolute inset-0 rounded-xl',
                  'bg-linear-to-b from-neutral-800 to-neutral-900',
                  'shadow-[inset_0_1.5px_1px_0_rgba(200,200,200,0.2),inset_0_-1px_1px_0_rgba(0,0,0,0.4)]',
                )}
              ></motion.div>
            )}
            <div
              className={cn(
                'relative py-2 px-4 text-sm transition-colors duration-200 ease-out',
                selected === idx
                  ? 'dark:text-neutral-300'
                  : 'group-hover:text-neutral-300',
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

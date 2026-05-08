'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
export const Nav = () => {
  const navLinks = [
    { href: '/home', title: 'Home' },
    { href: '/about', title: 'About' },
    { href: '/services', title: 'Services' },
    { href: '/contact', title: 'Contact' },
    { href: '/profile', title: 'Profile' },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="div-center min-h-screen w-full bg-gray-200 p-2">
      <nav
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
      </nav>
    </div>
  );
};

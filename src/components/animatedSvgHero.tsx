'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// const PATHS = [
//   {
//     d: 'M 0 0 L 0 404.609',
//     transform: 'translate(370 0)',
//   },
//   {
//     d: 'M 0 205 L 0 83.557 L 98.814 0 L 164 0',
//     transform: 'translate(400 110)',
//   },
//   {
//     d: 'M 155 206 L 155 84.826 C 114.632 53.417 93.572 34.834 56.317 0 L 0 0',
//     transform: 'translate(181.152 110)',
//   },
//   {
//     d: 'M 295 81 L 295 0 L 0 0',
//     transform: 'translate(0 221)',
//   },
//   {
//     d: 'M 0 79 L 0 0 L 296 0',
//     transform: 'translate(438 221)',
//   },
//   {
//     d: 'M 0 0 L 295 0 L 295 81 L 295 184',
//     transform: 'translate(0 221)',
//   },
//   {
//     d: 'M 0 0 L 56.317 0 C 93.572 34.834 114.632 53.417 155 84.826 L 155 206 L 157.348 295',
//     transform: 'translate(181.152 110)',
//   },
//   {
//     d: 'M 0 467.5 L 0 0',
//     transform: 'translate(369 -63) rotate(180 0.5 233.75)',
//   },
//   {
//     d: 'M 164.152 0 L 98.966 0 L 0.152 83.557 L 0.152 205 L 0 295',
//     transform: 'translate(400 110)',
//   },
//   {
//     d: 'M 296 0 L 0 0 L 0 79 L 0 184',
//     transform: 'translate(438 221)',
//   },
//   {
//     d: 'M 0 0 L 295 0 L 295 81 L 295 184',
//     transform: 'translate(0 221)',
//   },
//   {
//     d: 'M 0 0 L 56.317 0 C 93.572 34.834 114.632 53.417 155 84.826 L 155 206 L 157.348 295',
//     transform: 'translate(181.152 110)',
//   },
//   {
//     d: 'M 0 467.5 L 0 0',
//     transform: 'translate(369 -63) rotate(180 0.5 233.75)',
//   },
//   {
//     d: 'M 164.152 0 L 98.966 0 L 0.152 83.557 L 0.152 205 L 0 295',
//     transform: 'translate(400 110)',
//   },
//   {
//     d: 'M 296 0 L 0 0 L 0 79 L 0 184',
//     transform: 'translate(438 221)',
//   },
// ] as const;

const PATHS = [
  { d: 'M 0 0 L 0 484.609', transform: 'translate(370 0)', dim: 20 },
  {
    d: 'M 164 0 L 98.814 0 L 0 83.557 L 0 205',
    transform: 'translate(400 110)',
  },
  {
    d: 'M 0 0 L 56.317 0 C 93.572 34.834 114.632 53.417 155 84.826 L 155 206 L 155 206',
    transform: 'translate(181.152 110)',
  },
  { d: 'M 0 0 L 295 0 L 295 81', transform: 'translate(0 221)' },
  { d: 'M 296 0 L 0 0 L 0 79', transform: 'translate(438 221)' },
] as const;

export const AnimatedSVGHero = () => {
  return (
    <div className="font-inter bg-primary relative flex h-dvh w-full items-start justify-center">
      <Image
        src="/landscape2.jpg"
        aria-hidden
        alt="hero"
        fill
        draggable={false}
        priority
        className="pointer-events-none absolute inset-0 z-0 size-full mask-linear-0 mask-linear-from-1% mask-linear-to-58% object-cover"
      />

      {/* HERO SECTION */}
      <div className="relative z-20 flex h-screen w-full flex-col items-center justify-start px-6 pt-24 pb-10 selection:bg-blue-200 selection:text-blue-500 sm:py-36">
        <span className="text-xxs mb-9 bg-blue-200 px-2 py-1.5 font-semibold tracking-wide text-blue-600 uppercase">
          Watch a 90 second demo
        </span>
        <h1 className="mx-auto mb-5 max-w-2xl text-center text-2xl/tight font-semibold tracking-tight text-neutral-900 sm:text-3xl/tight md:text-4xl/tight">
          AI that Finds High Intent Leads on LinkedIn &amp; Messages them Like
          You Would
        </h1>
        <p className="mb-12 max-w-3xl text-center text-base leading-relaxed text-neutral-600 sm:text-sm md:text-base/snug">
          The first LinkedIn automation platform for warm outreach. Capture
          signals, research leads, and book meetings - automatically. Loved by
          sales teams and GTM agencies.
        </p>
        <div className="flex w-full max-w-xl flex-col items-center gap-2 sm:flex-row sm:gap-0">
          <input
            type="email"
            className="w-full bg-white/80 px-4 py-2.5 text-base text-neutral-800 outline-none placeholder:text-neutral-400"
            placeholder="Enter your email here"
          />
          <button className="flex shrink-0 cursor-pointer bg-neutral-950 px-5 py-2.5 text-base text-white shadow-md transition duration-100 ease-out will-change-transform hover:bg-neutral-800 active:translate-y-px">
            Book a demo
          </button>
        </div>

        <AnimationContainer />
      </div>
    </div>
  );
};

const AnimationContainer = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 -bottom-60 mx-auto w-[800px]">
      <Tag className="top-0 left-1/2 -translate-1/2">company page visitors</Tag>
      <Tag className="top-24 left-10">linkedin followers</Tag>
      <Tag className="top-54 left-0">post commenters</Tag>
      <Tag className="top-24 right-10">post engagers</Tag>
      <Tag className="top-54 right-0">post visitors</Tag>
      <div className="rounded-[20px] w-fit border border-white/10 p-2 backdrop-blur-sm absolute -bottom-24 left-1/2 -translate-x-1/2 ">
        <div className="size-50 rounded-xl bg-white p-20"></div>
      </div>
      <svg viewBox="0 0 734 405" className="w-fill h-auto" fill="none">
        {PATHS.map((path, index) => (
          <AnimatedLine
            d={path.d}
            transform={path.transform}
            key={path.d + index}
          />
        ))}
      </svg>
    </div>
  );
};

const AnimatedLine = ({ d, transform }: { d: string; transform: string }) => {
  return (
    <g transform={transform}>
      <path
        d={d}
        stroke="color-mix(in srgb, var(--color-white) 10%, transparent)"
        strokeWidth={3}
      />
      <motion.path
        d={d}
        stroke={'white'}
        strokeWidth={1.5}
        strokeDasharray={'0.1 0.9'}
        pathLength={1}
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          repeatDelay: 0.2,
          duration: 2,
        }}
      />
    </g>
  );
};

const Tag = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return<div
    className={cn(
      'absolute uppercase flex shrink-0 border border-white bg-linear-to-tr from-white/40 to-transparent px-4 py-2.5 font-mono text-base text-neutral-100 backdrop-blur-sm',
      className,
    )}
  >
    {children}
  </div>;
};

'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export const SvgMorph = () => {
  const [playStatus, setPlayStatus] = useState(true);
  const PAUSE = {
    left: 'M5 5L9 5L9 19L5 19Z',
    right: 'M15 5L19 5L19 19L15 19Z',
  } as const;

  const PLAY = {
    left: 'M7 5L13 8.5L13 15.5L7 19Z',
    right: 'M13 8.5L19 12L19 12L13 15.5Z',
  } as const;
  const target = playStatus ? PAUSE : PLAY;
  const transition = {
    type: 'spring' as const,
    stiffness: 360,
    damping: 36,
  };

  return (
    <div className="bg-primary div-center h-dvh w-full">
      <svg
        onClick={() => setPlayStatus((prev) => !prev)}
        className="cursor-pointer text-neutral-100"
        viewBox="0 0 20 20"
        fill="currentColor"
        width={60}
        height={60}
        strokeWidth={1}
        stroke="currentColor"
      >
        <motion.path
          initial={false}
          animate={{
            d: target.left,
          }}
          transition={transition}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          initial={false}
          animate={{
            d: target.right,
          }}
          transition={transition}
        />
      </svg>
    </div>
  );
};

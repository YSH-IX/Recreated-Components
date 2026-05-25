'use client';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';

export const MagneticButton = () => {
  const STRENGTH = 2;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { width, top, height, left } = ref.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = (clientX - centerX) * STRENGTH;
    const y = (clientY - centerY) * STRENGTH;

    setPosition({ x, y });
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: 0, y: 0 });
  };
  const hasMoved = position.x !== 0 || position.y !== 0;
  return (
    <div className={cn('bg-primary div-center font-inter h-screen w-full')}>
      <div className="div-center h-80 w-full max-w-sm rounded-3xl bg-white shadow-sm shadow-black/20">
        <div
          className={cn(
            'rounded-[13px] border border-dashed transition-colors duration-150 ease-in',
            hasMoved ? 'border-sky-500' : 'border-transparent',
            hasMoved ? 'bg-sky-100' : 'bg-transparent',
          )}
        >
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{
              // duration: 0.1,
              type: 'spring',
              stiffness: 200,
              damping: 30,
              mass: 0.1,
            }}
          >
            <button className="cursor-pointer rounded-xl bg-linear-to-b from-blue-400 to-blue-600 px-6 py-2.5 font-medium text-neutral-100 transition-transform duration-150 ease-out outline-none active:scale-99">
              Mag Button
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

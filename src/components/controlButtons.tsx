'use client';

import { cn } from '@/lib/utils';
import {
  PauseIcon,
  PlayIcon,
  RewindIcon,
  FastForwardIcon,
  StopIcon,
  CircleIcon,
} from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { useState } from 'react';

export const ControlButtons = () => {
  const buttonList = [
    { icon: PauseIcon, variant: 'normal' },
    { icon: PlayIcon, variant: 'normal' },
    { icon: RewindIcon, variant: 'normal' },
    { icon: FastForwardIcon, variant: 'normal' },
    { icon: StopIcon, variant: 'normal' },
    { icon: CircleIcon, variant: 'red' },
  ];
  const [isPressed, setIsPressed] = useState<Number | null>();
  return (
    <div className="div-center min-h-100 w-full max-w-3xl rounded-2xl bg-slate-200 p-4 shadow-[0_1px_2px_0_rgba(18,18,18,0.2),0_2px_4px_0_rgba(18,18,18,0.2)]">
      {/* Buttons */}
      <div
        className={cn(
          'flex size-fit items-center gap-2 rounded-2xl p-2',
          'bg-linear-to-b from-zinc-900 to-zinc-800',
          'shadow-[inset_0_-2px_0.5px_0_rgba(240,240,240,0.2)]',
        )}
      >
        {buttonList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="relative flex flex-col items-center will-change-transform"
            >
              <motion.button
                initial={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{ scale: 0.99 }}
                transition={{
                  duration: 0.1,
                  ease: 'easeOut',
                }}
                onClick={() => {
                  if (idx === isPressed) {
                    setIsPressed(null);
                    return;
                  }
                  setIsPressed(idx);
                  console.log(isPressed);
                }}
                className={cn(
                  'appearance-none rounded-xl p-2 will-change-transform',
                  isPressed === idx
                    ? 'scale-99 shadow-[inset_0_-1px_2px_0_rgba(250,250,250,0.6)]'
                    : 'shadow-[inset_0_1px_2px_0_rgba(250,250,250,0.6)]',
                  item.variant === 'red'
                    ? 'red-gradient-outer'
                    : 'gray-gradient-outer',
                )}
              >
                <div
                  className={cn(
                    'flex items-center justify-center rounded-full p-8',
                    item.variant === 'red'
                      ? 'red-gradient-inner'
                      : 'gray-gradient-inner',
                  )}
                ></div>
              </motion.button>
              <span className="absolute right-1/2 -bottom-8 translate-x-1/2">
                <Icon
                  size={32}
                  weight="fill"
                  color="currentColor"
                  className={cn(
                    'mx-auto size-4',
                    item.variant === 'red' ? 'fill-red-500' : 'fill-zinc-800',
                  )}
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

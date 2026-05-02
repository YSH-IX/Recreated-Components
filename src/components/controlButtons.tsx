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
  const [isPressed, setIsPressed] = useState<number | null>();
  const [isClicked, setIsClicked] = useState<string | null>();
  const [isRountBtnClicked, setIsRountBtnClicked] = useState<string | null>();
  return (
    <div className="div-center min-h-80 w-full max-w-3xl flex-col gap-10 rounded-2xl bg-slate-200 p-10 shadow-[0_1px_2px_0_rgba(18,18,18,0.2),0_2px_4px_0_rgba(18,18,18,0.2)]">
      {/* Clickable Buttons with light*/}
      <div className="flex items-center gap-4 rounded-2xl p-1.5 shadow-[inset_1px_-1px_1px_0_rgba(250,250,250,0.4)] transition-all duration-200 ease-out">
        {[{ mode: 'dark' }, { mode: 'light' }].map((item, idx) => (
          <div
            key={idx}
            className={cn(
              'relative flex flex-col items-center rounded-full bg-linear-to-b from-neutral-400 via-neutral-300 to-neutral-400 p-2 will-change-transform',
              'after:absolute after:inset-1.5 after:-z-1 after:rounded-full after:bg-linear-to-b after:from-taupe-700 after:via-taupe-800 after:to-taupe-500 after:content-[""] ',
            )}
          >
            <button
              onClick={() => {
                if (item.mode === isRountBtnClicked) {
                  setIsRountBtnClicked(null);
                  return;
                }
                setIsRountBtnClicked(item.mode);
                console.log(idx);
              }}
              style={{
                willChange: "transform"
              }}
              className={cn(
                'cursor-pointer appearance-none rounded-full bg-linear-to-b p-2 transition-all duration-75   ease-out will-change-transform outline-none hover:shadow-[0_30px_10px_0_rgba(20,20,20,0.5)] active:shadow-[0_26px_10px_0_rgba(20,20,20,0.5)]',
                isRountBtnClicked === item.mode
                  ? 'shadow-[0_20px_10px_0_rgba(20,20,20,0.5)] hover:shadow-[0_20px_10px_0_rgba(20,20,20,0.5)]'
                  : 'shadow-[0_28px_10px_0_rgba(20,20,20,0.5)]',

                item.mode === 'light'
                  ? 'from-neutral-200 to-neutral-300'
                  : 'from-neutral-700 to-neutral-800',

                // shadow-[inset_1px_-1px_1px_0_rgba(25,25,25,0.2)
                // shadow-[inset_-1px_1px_1px_0_rgba(250,250,250,0.2)]
              )}
            >
              {/* Inner 3d Effect */}
              <div
                className={cn(
                  'relative z-4 flex items-center justify-center rounded-full p-10',
                  'bg-linear-to-b',
                  item.mode === 'light'
                    ? 'from-neutral-300 to-neutral-200'
                    : 'from-neutral-800 to-neutral-700',
                )}
              >
                {/* The Light switch */}
                <div
                  className={cn(
                    'absolute top-2 right-1/2 translate-x-1/2 rounded-full px-0.5 py-2 shadow-[inset_-1px_1px_2px_0_rgba(200,200,200,0.2)]',
                    isRountBtnClicked === item.mode
                      ? 'bg-teal-600 shadow-[0_0_8px_2px_rgba(0,185,175,1),inset_-1px_1px_2px_0_rgba(200,200,200,0.4)]'
                      : 'bg-neutral-950 shadow-[0_0_10px_1px_rgba(10,10,10,0.1),inset_-1px_1px_2px_0_rgba(200,200,200,0.2)]',
                  )}
                ></div>
              </div>
            </button>
            {/* <span className="px-auto absolute -bottom-7 text-sm font-medium text-zinc-600 text-shadow-xs">
              <p>{item.mode}</p>
            </span> */}
          </div>
        ))}
      </div>
      {/* Buttons with Light */}
      <div className="flex items-center gap-1.5 rounded-2xl bg-linear-to-b from-zinc-900 to-zinc-800 p-1.5 shadow-[inset_1px_-1px_1px_0_rgba(250,250,250,0.4)] transition-all duration-200 ease-out">
        {[
          { variant: 'normal', mode: 'Mono' },
          { variant: 'normal', mode: 'Stereo' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center will-change-transform"
          >
            <motion.button
              initial={{
                scale: 1,
              }}
              whileTap={{ scale: 0.99 }}
              transition={{
                duration: 0.1,
                ease: 'easeOut',
              }}
              onClick={() => {
                if (item.mode === isClicked) {
                  setIsClicked(null);
                  return;
                }
                setIsClicked(item.mode);
                console.log(idx);
              }}
              className={cn(
                'appearance-none rounded-xl bg-linear-to-bl from-neutral-500 to-neutral-600 p-2 transition-all duration-200 ease-out will-change-transform outline-none',
                isClicked === item.mode
                  ? 'scale-99 shadow-[inset_1px_-1px_1px_0_rgba(25,25,25,0.2)]'
                  : 'shadow-[inset_-1px_1px_1px_0_rgba(250,250,250,0.2)]',
              )}
            >
              {/* 3d Effect */}
              <div
                className={cn(
                  'flex items-center justify-center rounded-full p-6',
                  'bg-linear-to-bl from-neutral-600 to-neutral-500',
                )}
              >
                {/* The Light switch */}
                <div
                  className={cn(
                    'rounded-full p-1.5 shadow-[inset_-1px_1px_2px_0_rgba(200,200,200,0.2)]',
                    isClicked === item.mode
                      ? 'bg-teal-500 shadow-[0_0_10px_2px_rgba(0,185,175,1),inset_-1px_1px_2px_0_rgba(200,200,200,0.4)]'
                      : 'bg-neutral-600 shadow-[0_0_10px_1px_rgba(10,10,10,0.1),inset_-1px_1px_2px_0_rgba(200,200,200,0.2)]',
                  )}
                ></div>
              </div>
            </motion.button>
            <span className="px-auto absolute -bottom-7 text-xs font-medium text-zinc-800">
              <p>{item.mode}</p>
            </span>
          </div>
        ))}
      </div>

      {/* Radio Buttons */}
      <div
        className={cn(
          'flex size-fit items-center gap-1.5 rounded-2xl p-1.5',
          'bg-linear-to-b from-zinc-900 to-zinc-800',
          'shadow-[inset_0_-2px_0.5px_0_rgba(240,240,240,0.3)]',
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
                  'appearance-none rounded-xl p-2 transition-shadow duration-200 ease-out will-change-transform outline-none',
                  isPressed === idx
                    ? 'scale-99 shadow-[inset_1px_-1px_2px_0_rgba(250,250,250,0.6)]'
                    : 'shadow-[inset_-1px_1px_2px_0_rgba(250,250,250,0.6)]',
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

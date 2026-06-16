'use client';

import { cn } from '@/lib/utils';
import { CheckIcon, CopySimpleIcon, TrashIcon } from '@phosphor-icons/react';
import { motion, Variants, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export const Buttons = () => {
  const [copied, setCopied] = useState(false);

  const parentVariants: Variants = {
    initial: {
      scale: 1,
    },
    tap: {
      scale: 0.99,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
    },
  };

  const childVariants: Variants = {
    initial: {
      scale: 1,
      clipPath: 'inset(0% 100% 0% 0%)',
    },
    tap: {
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 2.5,
        ease: 'easeInOut',
      },
    },
  };

  async function resetState() {
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="div-center bg-primary min-h-screen w-full">
      {/* Buttons Container */}
      <div
        className={cn(
          'flex max-h-200 min-h-40 w-full max-w-md flex-col items-start gap-4 rounded-2xl bg-white p-10 text-base font-medium',
          'shadow-[0_0_1px_0_rgba(20,20,20,0.1),0_1px_4px_0_rgba(20,20,20,0.1)] [--lines:#111111]',
        )}
      >
        {/* Hold to delete Component  */}
        <div className="font-inter flex w-full items-center justify-center">
          <motion.button
            variants={parentVariants}
            initial="initial"
            whileTap="tap"
            className="relative flex cursor-pointer appearance-none items-center gap-1.5 overflow-hidden rounded-full bg-neutral-200 py-2.5 pr-6 pl-5 text-neutral-700 outline-none"
            style={{
              willChange: 'transform',
            }}
          >
            <TrashIcon
              size={28}
              weight="bold"
              color="currentColor"
              className="size-5.5 fill-neutral-700/90"
            />

            <span>Hold to delete</span>
            <motion.div
              variants={childVariants}
              className="absolute inset-0 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-200 px-5 py-3 text-[#e5484d]"
            >
              <TrashIcon
                size={28}
                weight="bold"
                color="currentColor"
                className="size-5.5"
              />

              <span>Hold to delete</span>
            </motion.div>
          </motion.button>
        </div>
        {/* Copy button */}
        {/* <div className="mx-auto flex w-full max-w-46 items-center justify-between rounded-2xl bg-neutral-200 p-2">
          <motion.button
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.99,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
              bounce: 1,
            }}
            className="copy flex cursor-pointer items-center gap-1 rounded-lg border border-neutral-600 bg-neutral-800 py-2 pr-2.5 pl-2 text-neutral-300 will-change-transform"
            onClick={resetState}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <CheckIcon
                    size={32}
                    weight="bold"
                    className="size-4.5 fill-neutral-300/70"
                    color="currentColor"
                  />
                </motion.span>
              ) : (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <CopySimpleIcon
                    size={32}
                    weight="fill"
                    className="size-4.5 fill-neutral-300/70"
                    color="currentColor"
                  />
                </motion.span>
              )}
            </AnimatePresence>

            <span className="text-sm">Copy</span>
          </motion.button>
          <motion.button
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.99,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
              bounce: 1,
            }}
            className="copy flex cursor-pointer items-center gap-1 rounded-lg border border-neutral-600 bg-neutral-800 p-2 text-neutral-300 will-change-transform"
            onClick={resetState}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  layoutId="icon"
                >
                  <CheckIcon
                    size={32}
                    weight="bold"
                    className="size-4.5 fill-neutral-300/70"
                    color="currentColor"
                  />
                </motion.span>
              ) : (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  layoutId="icon"
                >
                  <CopySimpleIcon
                    size={32}
                    weight="fill"
                    className="size-4.5 fill-neutral-300/70"
                    color="currentColor"
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div> */}
        <button className="font-geistMono relative mx-auto bg-[repeating-linear-gradient(135deg,rgba(20,20,20,0.2)_0,rgba(20,20,20,0.2)_1px,transparent_1px,transparent_6px)] px-5 py-2 bg-neutral-400">
          <AngularSVG className={"absolute top-0 left-0 rotate-90"} />
          <AngularSVG className={"absolute bottom-0 left-0 "} />
          <AngularSVG className={"absolute -top-1 -right-1 rotate-180"} />
          <AngularSVG className={"absolute -bottom-1 -right-1 rotate-270"} />
          <span className='text-sm text-neutral-950'>

          Motion+
          </span>
        </button>
      </div>
    </div>
  );
};

const AngularSVG = ({ className }: { className: string }) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0.5 0V12H12.5" stroke="currentColor" />
    </svg>
  );
};

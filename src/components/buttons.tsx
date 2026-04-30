'use client';

import { cn } from '@/lib/utils';
import { CheckIcon, CopySimpleIcon, TrashIcon } from '@phosphor-icons/react';
import { motion, Variants, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export const Buttons = () => {
  const [copied, setCopied] = useState<Boolean>(false);

  const parentVariants: Variants = {
    initial: {
      scale: 1,
    },
    tap: {
      scale: 0.99,
      transition: {
        duration: 0.2,
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
    <div className="div-center min-h-screen w-full bg-neutral-100 font-sans">
      {/* Buttons Container */}
      <div
        className={cn(
          'flex max-h-200 min-h-40 w-full max-w-md flex-col items-start gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-10 text-base font-medium',
          'shadow-[0_1px_2px_0_rgba(12,12,12,0.2),0_3px_6px_0_rgba(12,12,12,0.2)]',
        )}
      >
        {/* Hold to delete Component  */}
        <div className="flex w-full items-center justify-center">
          <motion.button
            variants={parentVariants}
            initial="initial"
            whileTap="tap"
            className="relative flex cursor-pointer appearance-none items-center gap-1.5 overflow-hidden rounded-full bg-neutral-200 px-5 py-2.5 text-neutral-700"
            style={{
              willChange: 'transform',
            }}
          >
            <TrashIcon
              size={32}
              weight="regular"
              color="currentColor"
              className="size-5.5"
            />

            <span>Hold to delete</span>
            <motion.div
              variants={childVariants}
              className="absolute inset-0 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-200 px-5 py-3 text-[#e5484d]"
            >
              <TrashIcon
                size={32}
                weight="regular"
                color="currentColor"
                className="size-5.5"
              />

              <span>Hold to delete</span>
            </motion.div>
          </motion.button>
        </div>
        {/* Copy button */}
        <div className="mx-auto flex w-full max-w-46 items-center justify-between rounded-2xl bg-neutral-200 p-2">
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
                  //   initial={{
                  //     scale: 0.8,
                  //     filter: 'blur(1px)',
                  //     opacity: 1,
                  //   }}
                  //   animate={{
                  //     scale: 1,
                  //     filter: 'blur(0px)',
                  //     opacity: 1,
                  //   }}
                  //   transition={{
                  //     duration: 10,
                  //     ease: 'easeOut',
                  //   }}
                  //   exit={{
                  //     scale: 0,
                  //     filter: 'blur(4px)',
                  //     opacity: 0.2,
                  //     // transition: {
                  //     //   duration: 0.1,
                  //     // },
                  //   }}
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
                  //   initial={{
                  //     scale: 0.8,
                  //     filter: 'blur(1px)',
                  //     opacity: 1,
                  //   }}
                  //   animate={{
                  //     scale: 1,
                  //     filter: 'blur(0px)',
                  //     opacity: 1,
                  //   }}
                  //   exit={{
                  //     scale: 0,
                  //     filter: 'blur(4px)',
                  //     opacity: 0.2,
                  //     // transition: {
                  //     //   duration: 0.1,
                  //     // },
                  //   }}
                  //   transition={{
                  //     duration: 10,
                  //     ease: 'easeOut',
                  //   }}
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
          </motion.button>
        </div>
      </div>
    </div>
  );
};

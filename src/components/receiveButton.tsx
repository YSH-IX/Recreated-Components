'use client';

import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { FingerprintIcon, XIcon } from '@phosphor-icons/react';

export const ReceiveButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="div-center font-inter relative h-screen w-full flex-col bg-gray-100 px-4 selection:bg-sky-100 selection:text-sky-500 dark:bg-neutral-900 dark:selection:bg-sky-200 dark:selection:text-sky-600">
      <LayoutGroup>
        <AnimatePresence mode="popLayout">
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={'overlay'}
              className={cn('div-center absolute inset-0')}
            >
              <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{
                  y: 100,
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  type: 'spring',
                  bounce: 0,
                  stiffness: 300,
                  damping: 40,
                }}
                className={cn(
                  'flex w-full max-w-sm flex-col gap-4 overflow-hidden rounded-4xl border border-neutral-300 bg-neutral-100 p-4 md:max-w-[524px]',
                  'dark:border-neutral-900 dark:bg-neutral-950',
                  'shadow-[0_2px_2px_2px_rgba(20,20,20,0.1),0_3px_4px_0_rgba(20,20,20,0.1),0_4px_10px_0_rgba(20,20,20,0.1)]',
                  //   'dark:shadow-[0_3px_4px_0_rgba(200,200,200,0.1),0_4px_10px_0_rgba(200,200,200,0.1)]',
                )}
              >
                {/* Top Bar */}
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-2xl bg-neutral-200 p-2 dark:bg-neutral-900">
                      <FingerprintIcon
                        weight="regular"
                        size={26}
                        color="currentColor"
                        className="fill-neutral-700 dark:fill-neutral-500"
                      />
                    </span>
                    <span className="text-lg text-neutral-800 dark:text-neutral-400">
                      Confirm
                    </span>
                  </div>
                  {/* Cross Icon */}
                  <span
                    onClick={() => setIsOpen(false)}
                    className="group cursor-pointer rounded-2xl p-2"
                  >
                    <XIcon
                      weight="regular"
                      size={22}
                      color="currentColor"
                      className="fill-neutral-600 transition-colors duration-100 ease-out group-hover:fill-neutral-800 dark:fill-neutral-400 group-hover:dark:fill-neutral-200"
                    />
                  </span>
                  {/* Dialog Message */}
                </div>
                <div className="mt-0.5 mb-1.5 w-full text-lg tracking-tight text-neutral-900 md:mt-1 md:mb-2 md:text-xl dark:text-neutral-300">
                  Are you sure you want to receieve hell load of money?
                </div>
                {/* Buttons */}
                <div className="grid w-full grid-cols-2 gap-4">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(false)}
                    className="col-span-1 h-12 cursor-pointer rounded-full bg-gray-200 text-base text-neutral-900 transition-colors duration-200 ease-out outline-none select-none dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    layoutId="receiveBtn"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      'col-span-1 h-12 cursor-pointer rounded-full text-base transition-colors duration-200 ease-out outline-none select-none',
                      'bg-sky-600 text-neutral-100',
                      'dark:bg-sky-700 dark:text-neutral-50',
                      'shadow-[inset_0_1px_0_0_rgba(250,250,250,0.2),inset_0_-1px_0_0_rgba(20,20,20,0.2)]',
                      'dark:bg-sky-700',
                    )}
                  >
                    Receive
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.button
              key={'trigger'}
              layoutId="receiveBtn"
              onClick={() => setIsOpen(true)}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'h-14 w-full max-w-xs cursor-pointer rounded-full bg-sky-600 text-lg text-neutral-100 outline-none md:max-w-sm md:text-xl',
                'dark:bg-sky-700 dark:text-neutral-50',
                'shadow-[inset_0_2px_0_0_rgba(250,250,250,0.2),inset_0_-2px_0_0_rgba(20,20,20,0.2),0_2px_2px_2px_rgba(20,20,20,0.1),0_3px_4px_0_rgba(20,20,20,0.1),0_4px_10px_0_rgba(20,20,20,0.1)]',
                // 'dark:shadow-[inset_0_2px_0_0_rgba(250,250,250,0.2),inset_0_-2px_0_0_rgba(200,200,200,0.2),0_2px_2px_2px_rgba(200,200,200,0.1),0_3px_4px_0_rgba(200,200,200,0.1),0_4px_10px_0_rgba(20,20,20,0.1)]',
                'relative select-none',
              )}
            >
              Receive
            </motion.button>
          )}
          {/* OnClick Dialog */}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};

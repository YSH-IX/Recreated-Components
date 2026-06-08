'use client';

import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { DotIcon } from '@phosphor-icons/react';

export const SubSelectToggle = () => {
  const [selected, setSelected] = useState<'free' | 'premium'>('free');
  const [subSelected, setSubSelected] = useState<'monthly' | 'annual'>(
    'monthly',
  );
  //   const selectorList = [
  //     {
  //       selectorName: 'Free',
  //       type: 'free',
  //     },
  //     {
  //       selectorName: 'Premium',
  //         type: 'premium',
  //         subSelector: {

  //       }
  //     },
  //   ];
  return (
    <div className="div-center bg-primary font-geist h-dvh w-full">
      {/* Container */}
      <div
        className={cn(
          'flex h-120 w-full max-w-md items-center rounded-2xl bg-white p-4',
          'shadow-[0_1px_2px_1px_rgba(10,10,10,0.1)]',
        )}
      >
        {/* Selector BAR */}
        <div
          className={cn(
            'my-auto grid w-full grid-cols-2 rounded-full bg-white p-1',
            'shadow-[0_0_4px_0_rgba(20,20,20,0.1),0_2px_8px_0_rgba(20,20,20,0.1)]',
          )}
        >
          {/* Free Selector */}
          <button
            onClick={() => {
              setSelected('free');
            }}
            className={cn(
              'relative col-span-1 flex h-14 w-full cursor-pointer items-center justify-center rounded-full text-lg font-medium outline-none',
              selected === 'free' ? 'text-neutral-50' : 'text-neutral-950',
            )}
          >
            <span className="relative z-10">Free</span>
            <AnimatePresence>
              {selected === 'free' && (
                <motion.div
                  layoutId="selected"
                  className={cn(
                    'absolute inset-0 size-full rounded-full',
                    'bg-black',
                  )}
                ></motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Premium Selector */}
          <button
            onClick={() => {
              setSelected('premium');
            }}
            className={cn(
              'div-center relative col-span-1 h-14 w-full cursor-pointer rounded-full p-1 text-lg font-medium outline-none',
              selected === 'premium'
                ? 'pointer-events-none text-neutral-50'
                : 'text-neutral-950',
            )}
          >
            <div
              className={cn(
                'div-center h-full w-full flex-col gap-0.5',
                selected === 'premium' && 'pointer-events-auto',
              )}
            >
              <AnimatePresence mode="popLayout">
                {selected !== 'premium' && (
                  <motion.span
                    initial={{ opacity: 1, y: 0, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      scale: 0,
                      filter: 'blur(10px)',
                    }}
                    className="relative z-10 leading-none"
                  >
                    Premium
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.div
                transition={{ type: 'spring', duration: 0.5, bounce: 1 }}
                className={cn(
                  'relative z-10 flex h-full items-center rounded-full text-xs font-normal transition-transform duration-150 ease-out',
                  selected === 'premium'
                    ? 'grid w-full grid-cols-2 text-neutral-300'
                    : 'text-neutral-500',
                )}
              >
                <div
                  className={cn(
                    'div-center relative col-span-1 h-full rounded-full',
                    selected === 'premium'
                      ? 'text-base font-medium'
                      : 'text-xs',
                  )}
                  onClick={() => setSubSelected('monthly')}
                >
                  <span
                    className={cn(
                      'relative z-4',
                      subSelected === 'monthly'
                        ? 'text-neutral-800'
                        : 'text-neutral-200',
                    )}
                  >
                    Monthly
                  </span>
                  {subSelected === 'monthly' && (
                    <motion.div
                      layoutId="subSelected"
                      className="absolute inset-0 size-full rounded-full bg-white"
                    ></motion.div>
                  )}
                </div>
                <AnimatePresence>
                  {selected !== 'premium' && (
                    <motion.div>
                      <DotIcon
                        weight="bold"
                        color="currentColor"
                        size={20}
                        // className={cn(
                        //   selected !== 'premium'
                        //     ? 'fill-neutral-200'
                        //     : 'fill-neutral-400',
                        // )}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  className={cn(
                    'div-center relative col-span-1 h-full rounded-full',
                    selected === 'premium'
                      ? 'text-base font-medium'
                      : 'text-xs',
                  )}
                  onClick={() => setSubSelected('annual')}
                >
                  <span
                    className={cn(
                      'relative z-4',
                      subSelected === 'annual'
                        ? 'text-neutral-800'
                        : 'text-neutral-200',
                    )}
                  >
                    Annual
                  </span>
                  {subSelected === 'annual' && (
                    <motion.div
                      layoutId="subSelected"
                      className="absolute inset-0 size-full rounded-full bg-white"
                    ></motion.div>
                  )}
                </div>
              </motion.div>
            </div>

            <AnimatePresence>
              {selected === 'premium' && (
                <motion.div
                  layoutId="selected"
                  className={cn(
                    'absolute inset-0 size-full rounded-full',
                    'bg-black',
                  )}
                ></motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </div>
  );
};

'use client';

import { cn } from '@/lib/utils';
import { motion, useAnimate } from 'motion/react';
import { useRef } from 'react';

export const MultiStepBtn = () => {
  const [scope, animate] = useAnimate();
  const isAnimating = useRef(false);

  async function animateStuff() {
    if (isAnimating.current) return;

    isAnimating.current = true;

    // hide text
    await animate(
      '.btn-txt',
      {
        opacity: 0,
        scale: 0.8,
        width: 0,
      },
      {
        duration: 0.15,
      },
    );

    // shrink button
    await animate(
      'button',
      {
        width: 54,
        paddingLeft: 0,
        paddingRight: 0,
        scale: 0.96,
      },
      {
        duration: 0.25,
      },
    );

    // bounce effect
    await animate(
      'button',
      {
        scale: [0.96, 1, 1.1, 1],
        borderRadius: '999px',
      },
      {
        duration: 0.35,
      },
    );

    // show check container
    await animate(
      '.check',
      {
        opacity: 1,
        scale: [0.5, 1],
      },
      {
        duration: 0.2,
      },
    );

    // draw checkmark
    await animate(
      '.check path',
      {
        pathLength: 1,
        opacity: 1,
      },
      {
        duration: 0.5,
        ease: 'easeInOut',
      },
    );

    isAnimating.current = false;
  }

  return (
    <div className="bg-background-100 div-center h-screen w-full p-2">
      <div
        ref={scope}
        className="div-center h-60 w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900 p-2 shadow-[0_1px_12px_2px_rgba(10,10,10,0.4)]"
      >
        <motion.button
          onClick={animateStuff}
          style={{
            width: 240,
            height: 54,
          }}
          className={cn(
            'div-center relative overflow-hidden',
            'cursor-pointer appearance-none gap-2',
            'rounded-2xl px-6 text-base text-neutral-100 outline-none',
            'bg-linear-to-br from-pink-500 via-purple-500 to-pink-400',
            'shadow-[inset_0_0_4px_1px_rgba(200,200,200,0.4)]',
            'will-change-transform',
          )}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="check fill-white"
            style={{
              opacity: 0,
            }}
          >
            <motion.path
              d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"
              style={{
                pathLength: 0,
                opacity: 0,
              }}
            />
          </motion.svg>

          <motion.span className="btn-txt whitespace-nowrap">
            Purchase now ($250)
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
};

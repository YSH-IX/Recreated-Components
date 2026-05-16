'use client';

import { AnimatePresence, motion, Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import { CaretRightIcon, GearIcon } from '@phosphor-icons/react';
import { useState } from 'react';

export const GooeyMenu = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  const ParentVariants: Variants = {
    hidden: {
      borderRadius: 14,

      width: '32px',
      height: '32px',
      y: 0,
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.25,
      },
    },
    visible: {
      borderRadius: 14,
      y: -48,
      width: '220px',
      height: '144px',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 40,
        mass: 0.75,
      },
    },
    exit: {
      width: '38px',
      height: '38px',
      borderRadius: 24,
      y: 0,
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 500,
        damping: 40,
      },
    },
  };
  return (
    <div className="div-center font-geist isolate h-screen w-full bg-neutral-900">
      <GooeySvgFilter id="gooey-filter" strength={4} />
      <div
        className={cn(
          'relative flex flex-col items-start justify-end gap-2 rounded-xl',
        )}
        style={{
          filter: 'url(#gooey-filter)',
        }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setHovered((val) => !val)}
          className="relative z-10 size-10 cursor-pointer rounded-full bg-neutral-950"
        >
          <NextjsIcon className="size-10 rounded-full border border-neutral-800 text-neutral-950 hover:text-neutral-900" />
        </div>
        <AnimatePresence mode="sync">
          {hovered && (
            <motion.div
              variants={ParentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={cn(
                'absolute flex flex-col items-start overflow-hidden rounded-[14px] bg-neutral-950 p-2 text-neutral-300 will-change-transform',
              )}
            >
              {[
                {
                  title: 'Route',
                  value: 'Static',
                },
                {
                  title: 'Bundler',
                  value: 'Turbopack',
                },
                {
                  title: 'Route Info',
                  value: '',
                  icon: CaretRightIcon,
                },
                {
                  title: 'Preferences',
                  value: '',
                  icon: GearIcon,
                },
              ].map((items, idx) => (
                <motion.div
                  className={cn(
                    'font-geist flex w-full cursor-pointer items-center justify-between rounded-md px-1.5 py-1.5 text-sm select-none hover:bg-neutral-900',
                    idx == 1 ? 'pointer-events-none' : '',
                  )}
                  key={items.title + idx}
                >
                  <span className="text-neutral-300">{items.title}</span>
                  <span className="text-neutral-400">
                    {items.icon ? (
                      <items.icon
                        weight="regular"
                        className="size-4"
                        size={20}
                        color="currentColor"
                      />
                    ) : (
                      items.value
                    )}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const NextjsIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-testid="geist-icon"
      height="16"
      width="16"
      color="currentColor"
      viewBox="0 0 16 16"
      strokeLinejoin="round"
      className={className}
    >
      <g clipPath="url(#clip0_53_108)">
        <circle
          cx="8"
          cy="8"
          r="7.375"
          fill="currentColor"
          stroke="var(--ds-gray-1000)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.63 11V5"
          stroke="url(#paint0_linear_53_108vsxrmxu21)"
          strokeWidth="1.25"
          strokeMiterlimit="1.41421"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z"
          fill="url(#paint1_linear_53_108vsxrmxu21)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_53_108vsxrmxu21"
          x1="11.13"
          y1="5"
          x2="11.13"
          y2="11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.609375" stopColor="white" stopOpacity="0.57" />
          <stop offset="0.796875" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_53_108vsxrmxu21"
          x1="9.9375"
          y1="9.0625"
          x2="13.5574"
          y2="13.3992"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_53_108">
          <rect width="16" height="16" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

const GooeySvgFilter = ({
  id = 'gooey-filter',
  strength = 10,
}: {
  id?: string;
  strength?: number;
}) => {
  return (
    <svg className="absolute hidden">
      <defs>
        <filter id={id}>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={strength}
            result="blur"
          />

          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
      1 0 0 0 0
      0 1 0 0 0
      0 0 1 0 0
      0 0 0 20 -8
    "
            result="goo"
          />

          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  );
};

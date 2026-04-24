'use client';

import { motion, AnimatePresence, Variants } from 'motion/react';
import {
  CaretDownIcon,
  CircleHalfIcon,
  GearIcon,
  PixLogoIcon,
  PlusIcon,
} from '@phosphor-icons/react';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export const ClerkCard = () => {
  const parentVariants: Variants = {
    initial: {
      opacity: 0.1,
      filter: 'blur(20px)',
      scale: 0.99,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      filter: 'blur(20px)',
      scale: 0.99,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
    hover: {},
  };
  const childrenVariants: Variants = {
    initial: {
      opacity: 0,
      filter: 'blur(10px)',
      scale: 0.99,
    },
    hover: {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1.01,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 50,
      },
    },
    exit: {
      opacity: 0,
      filter: 'blur(20px)',
      scale: 0.99,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  };
  const [open, setOpen] = useState(true);
  return (
    <div className="font-inter div-center min-h-screen w-full bg-gray-200 selection:bg-neutral-500 selection:text-neutral-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            variants={parentVariants}
            initial="initial"
            animate="visible"
            exit="exit"
            whileHover="hover"
            className={cn(
              'flex min-h-130 w-full max-w-[380px] flex-col gap-4 rounded-2xl bg-neutral-50 p-8',
              // 'shadow-[0_1px_0_0_rgba(0,0,0,0.1),0_4px_8px_1px_rgba(0,0,0,0.1),0_4px_100px_2px_rgba(0,0,0,0.1)]',
              'shadow-[0_0.5px_0_0_rgba(0,0,0,0.1),0_2px_4px_0_rgba(0,0,0,0.2),0_4px_4px_1px_rgba(0,0,0,0.1)]',
            )}
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-1 text-sm">
                <h2 className="font-medium text-neutral-900">
                  Organization UI Components
                </h2>
                <p className="font-medium text-neutral-800">
                  Clerk&apos;s UI components add turn-key simplicity to complex
                  Organization management tasks.
                </p>
              </div>
              <motion.button
                initial={{
                  opacity: 1,
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{
                  opacity: 0.99,
                  scale: 0.99,
                }}
                transition={{
                  duration: 0.15,
                  ease: 'easeOut',
                }}
                className="mx-auto flex cursor-pointer items-center gap-2 rounded-lg bg-neutral-50 px-2 py-1.5 text-xs font-semibold text-neutral-800 shadow-[0_0.5px_0_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2),0_2px_4px_1px_rgba(0,0,0,0.1)] will-change-transform"
                onClick={() => setOpen((val) => !val)}
              >
                <div className="flex items-center gap-1">
                  <ClerkIcon className="size-4" /> Clerk
                </div>
                <CaretDownIcon size={20} weight="bold" className="size-4" />
              </motion.button>
            </div>
            <div className="relative flex-1 rounded-lg border border-dashed border-neutral-300 bg-neutral-100">
              <motion.div
                variants={childrenVariants}
                className={cn(
                  'absolute inset-0 h-fit rounded-lg border border-neutral-200/80 bg-neutral-200',
                  'shadow-[0_0.5px_0_0_rgba(0,0,0,0.1),0_2px_4px_0_rgba(0,0,0,0.2),0_4px_4px_0_rgba(0,0,0,0.1)]',
                )}
              >
                <div
                  className={cn(
                    'divide-y divide-neutral-200/80 rounded-md bg-neutral-50',
                    'shadow-xs shadow-neutral-900/30',
                  )}
                >
                  {/* List 1 */}
                  <div className="flex items-center gap-2 p-3">
                    <div className="rounded-sm border border-neutral-100 bg-neutral-50 p-2 shadow-sm">
                      <CircleHalfIcon
                        size={20}
                        weight="regular"
                        color="currentColor"
                        className="size-6 fill-green-400"
                      />
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex flex-col items-start justify-between gap-1 text-xs font-medium">
                        <p className="text-neutral-800">Bluth company</p>
                        <p className="text-neutral-600">Mr. Manager</p>
                      </div>
                      <GearIcon
                        size={20}
                        weight="fill"
                        color="currentColor"
                        className="size-8 rounded-sm border border-neutral-100 fill-neutral-500 p-1.5 shadow-sm"
                      />
                    </div>
                  </div>
                  {/* List 2 */}
                  <div className="flex items-center gap-2 p-3">
                    <div className="rounded-sm border border-neutral-100 bg-neutral-50 p-2 shadow-sm">
                      <PixLogoIcon
                        size={20}
                        weight="fill"
                        color="currentColor"
                        className="size-6 fill-neutral-600"
                      />
                    </div>
                    <div className="flex w-full items-center justify-start">
                      <div className="flex flex-col items-start justify-between gap-1 text-xs font-medium">
                        <p className="text-neutral-800">Dunder Miffin</p>
                        <p className="text-neutral-600">
                          Asst. (to the) Regional Manager
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* List 3 */}
                  <div className="flex items-center gap-2 p-3">
                    <div className="rounded-sm border border-neutral-100 bg-neutral-50 p-0.5 shadow-sm">
                      <Image
                        src="/paul.jpg"
                        alt="Pfp"
                        height={45}
                        width={45}
                        className="rounded-xs object-cover"
                      />
                    </div>

                    <div className="flex w-full items-center justify-start">
                      <div className="flex flex-col items-start justify-center gap-1 text-xs font-medium">
                        <p className="text-neutral-800">Personal Account</p>
                      </div>
                    </div>
                  </div>
                  {/* List 4 */}
                  <div className="flex items-center gap-2 p-3">
                    <div className="rounded-sm p-[11px]">
                      <PlusIcon
                        size={20}
                        weight="bold"
                        color="currentColor"
                        className="size- rounded-full bg-neutral-300 fill-neutral-800 p-1"
                      />
                    </div>
                    <div className="flex w-full items-center justify-start">
                      <div className="flex flex-col items-start justify-center gap-1 text-xs font-medium">
                        <p className="text-neutral-800">Create organization</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div center py-4">
                  <div className="div-center mx-auto flex items-center text-sm text-neutral-600">
                    Secured by
                    <ClerkIcon className="ml-1 size-4" />
                    Clerk.
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{
              opacity: 0.2,
              scale: 0.95,
              filter: 'blur(20px)',
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              y: 0,
            }}
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{
              opacity: 0.99,
              scale: 0.99,
            }}
            transition={{
              duration: 0.15,
              ease: 'easeOut',
              delay: 0.1,
            }}
            className="mx-auto flex cursor-pointer items-center gap-2 rounded-lg bg-neutral-50 pl-2 pr-3 py-1.5 text-xs font-semibold text-neutral-800 shadow-[0_0.5px_0_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.2),0_2px_4px_1px_rgba(0,0,0,0.1)] will-change-transform"
            onClick={() => setOpen((val) => !val)}
          >
            <div className="flex items-center gap-1">
              <ClerkIcon className="size-4" /> Open Clerk
            </div>
            {/* <CaretDownIcon size={20} weight="bold" className="size-4" /> */}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

const ClerkIcon = ({
  className,
  ...rest
}: {
  className?: string;
  [key: string]: any;
}) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      id="Clerk--Streamline-Simple-Icons"
      height="24"
      width="24"
      className={className}
      {...rest}
    >
      <desc>Clerk Streamline Icon: https://streamlinehq.com</desc>
      <title>Clerk</title>
      <path
        d="m21.47 20.829 -2.881 -2.881a0.572 0.572 0 0 0 -0.7 -0.084 6.854 6.854 0 0 1 -7.081 0 0.576 0.576 0 0 0 -0.7 0.084l-2.881 2.881a0.576 0.576 0 0 0 -0.103 0.69 0.57 0.57 0 0 0 0.166 0.186 12 12 0 0 0 14.113 0 0.58 0.58 0 0 0 0.239 -0.423 0.576 0.576 0 0 0 -0.172 -0.453Zm0.002 -17.668 -2.88 2.88a0.569 0.569 0 0 1 -0.701 0.084A6.857 6.857 0 0 0 8.724 8.08a6.862 6.862 0 0 0 -1.222 3.692 6.86 6.86 0 0 0 0.978 3.764 0.573 0.573 0 0 1 -0.083 0.699l-2.881 2.88a0.567 0.567 0 0 1 -0.864 -0.063A11.993 11.993 0 0 1 6.771 2.7a11.99 11.99 0 0 1 14.637 -0.405 0.566 0.566 0 0 1 0.232 0.418 0.57 0.57 0 0 1 -0.168 0.448Zm-7.118 12.261a3.427 3.427 0 1 0 0 -6.854 3.427 3.427 0 0 0 0 6.854Z"
        fill="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
};

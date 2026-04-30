'use client';

import { cn } from '@/lib/utils';
import {
  CaretUpDownIcon,
  CircleHalfIcon,
  SignOutIcon,
  BellIcon,
  TranslateIcon,
  KeyboardIcon,
  GearFineIcon,
  HeadsetIcon,
} from '@phosphor-icons/react';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen w-full px-4 py-40 font-sans">
      <div className="relative flex items-center justify-center">
        {/* Profile Minimised */}
        <div
          className="relative z-10 flex w-full max-w-[230px] cursor-pointer items-center gap-2 rounded-2xl border border-neutral-300 bg-neutral-100 p-2 inset-shadow-[0_2px_1px_0_rgba(255,255,255,1),0_-2px_1px_0_rgba(255,255,255,1)] select-none"
          onClick={() => setOpen((val) => !val)}
        >
          {/* Image section */}
          <div className="min-h-10 min-w-10 overflow-hidden rounded-lg border border-neutral-300">
            <Image
              src={'/eren.jpg'}
              alt={'Eren Yeager PFP'}
              height={20}
              width={20}
              className="size-full object-cover"
              loading="eager"
              draggable={false}
            ></Image>
          </div>
          {/* User Section */}
          <div className="flex size-full items-center justify-between">
            {/* User Info */}
            <div className="flex size-full flex-col items-start">
              <h3 className="text-sm font-medium text-neutral-900">Eren</h3>
              <p className="text-xs font-medium text-neutral-700">
                ysh@example.com
              </p>
            </div>
            {/* Caret Icon */}
            <CaretUpDownIcon
              size={20}
              weight="regular"
              color="currentColor"
              className="size-5 fill-neutral-900"
            />
          </div>
        </div>

        <AnimatePresence>
          {/* Profile Maximised */}
          {open && (
            <motion.div
              initial={{
                opacity: 1,
                scale: 1,
                clipPath: 'inset(0% 0% 100% 0%)',
              }}
              animate={{
                scale: 1,
                opacity: 1,
                clipPath: 'inset(0% 0% 0% 0%)',
                filter: 'blur(0px)',
              }}
              transition={{
                duration: 0.1,
                ease: 'easeOut',
              }}
              exit={{
                scale: 1,
                opacity: 1,
                clipPath: 'inset(0% 0% 100% 0% )',
              }}
              className="absolute top-17 flex w-full max-w-[230px] flex-col items-start divide-y divide-neutral-300 rounded-2xl border border-neutral-300 bg-neutral-100 p-2 inset-shadow-[0_2px_1px_0_rgba(255,255,255,1),0_-2px_1px_0_rgba(255,255,255,1)] select-none"
            >
              {/* User profile */}
              <div className="flex w-full items-center gap-2 pb-2">
                {/* Image section */}
                <div className="min-h-10 min-w-10 overflow-hidden rounded-lg border border-neutral-300">
                  <Image
                    src={'/eren.jpg'}
                    alt={'Eren Yeager PFP'}
                    height={20}
                    width={20}
                    className="size-full object-cover"
                    loading="lazy"
                    draggable={false}
                  ></Image>
                </div>
                {/* User Section */}
                <div className="flex size-full items-center justify-between">
                  {/* User Info */}
                  <div className="flex size-full flex-col items-start">
                    <h3 className="text-sm font-medium text-neutral-900">
                      Eren
                    </h3>
                    <p className="text-xs font-medium text-neutral-700">
                      ysh@example.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full py-1 text-sm">
                {[
                  {
                    label: 'Settings',
                    icon: GearFineIcon,
                  },
                  {
                    label: 'Help & Support',
                    icon: HeadsetIcon,
                  },
                  {
                    label: 'Keyboard Shortcuts',
                    icon: KeyboardIcon,
                  },
                ].map((item, idx) => (
                  <div
                    key={item.label + idx}
                    className={cn(
                      'item-center flex w-full cursor-pointer justify-start gap-1.5 rounded-lg p-1.5 font-normal text-neutral-800 select-none',
                      'hover:bg-neutral-200 hover:text-neutral-900',
                      's active:bg-neutral-200 active:text-neutral-900',
                    )}
                  >
                    <span>
                      {item.icon && (
                        <item.icon
                          size={18}
                          weight="regular"
                          color="currentColor"
                        />
                      )}
                    </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="w-full py-1 text-sm">
                {[
                  {
                    label: 'Theme',
                    icon: CircleHalfIcon,
                  },
                  {
                    label: 'Language',
                    icon: TranslateIcon,
                  },
                  {
                    label: 'Notifications',
                    icon: BellIcon,
                  },
                ].map((item, idx) => (
                  <div
                    key={item.label + idx}
                    className={cn(
                      'item-center flex w-full cursor-pointer gap-1.5 rounded-lg p-1.5 font-normal text-neutral-800 select-none',
                      'hover:bg-neutral-200 hover:text-neutral-900',
                      's active:bg-neutral-200 active:text-neutral-900',
                    )}
                  >
                    <span>
                      {item.icon && (
                        <item.icon
                          size={18}
                          weight="regular"
                          color="currentColor"
                        />
                      )}
                    </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="w-full pt-1.5 text-sm">
                {[
                  {
                    label: 'Logout',
                    icon: SignOutIcon,
                  },
                ].map((item, idx) => (
                  <div
                    key={item.label + idx}
                    className={cn(
                      'item-center flex w-full cursor-pointer gap-1.5 rounded-lg p-1.5 font-normal text-red-400 select-none',
                      'hover:bg-red-100 hover:text-red-500',
                      's active:bg-red-100 active:text-red-500',
                    )}
                  >
                    <span>
                      {item.icon && (
                        <item.icon
                          size={18}
                          weight="regular"
                          color="currentColor"
                        />
                      )}
                    </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

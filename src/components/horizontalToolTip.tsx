'use client';
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Icon, ChatCircleIcon, TrayIcon, Circle } from '@phosphor-icons/react';

export const HorizonatialTooltip = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const iconRef = useRef<(HTMLDivElement | null)[]>([]);
  const rowRef = useRef<(HTMLDivElement | null)[]>([]);

  const iconList: Icon[] = [ChatCircleIcon, TrayIcon, Circle];

  const tooltipContent = [
    {
      value: 'Comment',
      shortcut: 'C',
    },
    {
      value: 'Inbox',
      shortcut: 'I',
    },
    {
      value: 'Record',
      shortcut: 'R',
    },
  ];

  const calculateCoordinates = (idx: number | null) => {
    if (idx === null) {
      return {
        translateX: 0,
        clipPath: ``,
      };
    }
    const row = rowRef.current[idx];
    const icon = iconRef.current[idx];

    if (row === null || icon === null) {
      return {
        translateX: 0,
        clipPath: ``,
      };
    }

    const rowRect = row.getBoundingClientRect();
    const iconRect = icon.getBoundingClientRect();

    const rowLeft = row.offsetLeft;
    const rowWidth = row.offsetWidth;
    const rowCenter = rowRect.left + rowRect.width / 2;

    const iconLeft = icon.offsetLeft;
    const iconWidth = icon.offsetWidth;
    const iconCenter = iconRect.left + iconRect.width / 2;

    const totalWidth = rowRef.current.reduce((acc, el) => {
      return acc + (el?.offsetWidth || 0);
    }, 0);
    const clipLeft = (rowLeft / totalWidth) * 100;
    const clipRight = 100 - ((rowLeft + rowWidth) / totalWidth) * 100;
    return {
      translateX: iconCenter - rowCenter,
      clipPath: `inset(0 ${clipRight}% 0 ${clipLeft}% round 16px)`,
    };
  };
  const coordinates = calculateCoordinates(hovered);
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#fafafa] text-neutral-400 dark:bg-[#010101]">
      <div className="relative" onMouseLeave={() => setHovered(null)}>
        {/* ANIMATED TOOLTIP LIST */}
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.1,
                  delay: 0,
                },
              }}
              transition={{
                delay: 0.2,
              }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-xl"
            >
              <motion.div
                animate={{
                  x: coordinates.translateX,
                  clipPath: coordinates.clipPath,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 40,
                }}
              >
                <div className="flex">
                  {tooltipContent.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex h-fit w-auto items-center gap-3 bg-neutral-900 px-2 py-2"
                    >
                      <span className="text-sm text-neutral-100">
                        {item.value}
                      </span>
                      <span className="rounded-md border border-neutral-600 px-1.5 py-1 text-xs font-medium">
                        {item.shortcut}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon Navbar */}
        <div className="flex items-center rounded-full bg-neutral-900 p-1 inset-shadow-[0_0_1px_1px_rgba(115,115,115,0.4)]">
          {iconList.map((Item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer rounded-full p-2 transition-colors duration-100 ease-out hover:bg-neutral-800"
              ref={(el) => {
                iconRef.current[idx] = el;
              }}
              onMouseEnter={() => setHovered(idx)}
            >
              {Item && (
                <Item
                  weight="regular"
                  color="currentColor"
                  size={22}
                  className="size-6 fill-neutral-500 group-hover:fill-neutral-300"
                />
              )}
            </div>
          ))}
        </div>

        {/* MEASUREMENT SECTION */}
        <div className="pointer-events-none absolute -top-12 left-1/2 flex -translate-x-1/2 rounded-2xl opacity-0">
          {tooltipContent.map((item, idx) => (
            <div
              className="flex h-fit w-auto items-center gap-3 bg-neutral-900 px-2 py-2"
              key={idx}
              ref={(el) => {
                rowRef.current[idx] = el;
              }}
            >
              <span className="text-sm text-neutral-100">{item.value}</span>
              <span className="rounded-md border border-neutral-600 px-1.5 py-1 text-xs font-medium">
                {item.shortcut}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

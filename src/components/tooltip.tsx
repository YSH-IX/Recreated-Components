'use client';

import { TrayIcon, ChatCircleIcon, Circle } from '@phosphor-icons/react';
import { Icon } from '@phosphor-icons/react';
import { AnimatePresence, motion, useMotionTemplate } from 'motion/react';
import { useRef, useState } from 'react';

export const Tooltip = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const rowRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconRef = useRef<(HTMLDivElement | null)[]>([]);
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
    if (idx === null)
      return {
        translateY: 0,
        clipPath: ``,
      };

    const row = rowRef.current[idx];
    const icon = iconRef.current[idx];
    if (row === null || icon === null)
      return {
        translateY: 0,
        clipPath: ``,
      };

    const rowTop = row.offsetTop;
    const rowHeight = row.offsetHeight;
    const rowCenter = rowTop + rowHeight / 2;

    const iconTop = icon.offsetTop;
    const iconHeight = icon.offsetHeight;
    const iconCenter = iconTop + iconHeight / 2;

    const totalHeight = rowRef.current.reduce((acc, el) => {
      return acc + (el?.offsetHeight || 0);
    }, 0);

    const clipTop = (rowTop / totalHeight) * 100;
    const clipBottom = 100 - ((rowTop + rowHeight) / totalHeight) * 100;
    return {
      translateY: iconCenter - rowCenter,
      clipPath: `inset(${clipTop}% 0 ${clipBottom}% 0 round 12px)`,
    };
  };
  const coordinates = calculateCoordinates(hovered);
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-200 text-neutral-200 dark:bg-[#0a0a0a] dark:text-neutral-400">
      <div className="relative" onMouseLeave={() => setHovered(null)}>
        {/* ANIMATED TOOLTIP LIST */}
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
              className="absolute top-0 left-[calc(100%+16px)] rounded-2xl"
            >
              <motion.div
                animate={{
                  y: coordinates.translateY,
                  clipPath: coordinates.clipPath,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 40,
                }}
              >
                <div className="flex flex-col">
                  {tooltipContent.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex h-12 w-40 items-center justify-between bg-neutral-100 px-4 dark:bg-neutral-900"
                    >
                      <span className="text-sm font-medium text-neutral-600 dark:text-neutral-200">
                        {item.value}
                      </span>
                      <span className="rounded-md border text-neutral-600  border-neutral-400 dark:border-neutral-600 px-1.5 py-1 text-xs font-medium">
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
        <div className="flex flex-col items-center gap-1 rounded-full bg-neutral-100 p-2 inset-shadow-[0_0_1px_1px_rgba(11,11,11,0.4)] dark:bg-neutral-900 dark:inset-shadow-[0_0_1px_1px_rgba(115,115,115,0.6)]">
          {iconList.map((Item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer rounded-full p-2 transition-colors duration-100 ease-out hover:bg-neutral-300 dark:hover:bg-neutral-800"
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
                  className="size-8 fill-neutral-500 group-hover:fill-neutral-800 dark:fill-neutral-500 group-hover:dark:fill-neutral-400"
                />
              )}
            </div>
          ))}
        </div>
        {/* MEASUREMENT SECTION */}
        <div className="pointer-events-none absolute top-0 left-0 opacity-0">
          {tooltipContent.map((item, idx) => (
            <div
              className="flex h-12 w-40 items-center justify-between px-2"
              key={idx}
              ref={(el) => {
                rowRef.current[idx] = el;
              }}
            >
              <span>{item.value}</span>
              <span>{item.shortcut}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, Variants } from 'motion/react';
import { useState } from 'react';
import { ArrowClockwiseIcon } from '@phosphor-icons/react';

export const Messages = () => {
  const [reload, setReload] = useState(0);
  const messageList = [
    {
      sentBy: 'anakin',
      message:
        'Do you ever feel like no matter what you do, the ending was already written?',
      dp: '/anakin.jpg',
      alt: 'anakin image',
    },
    {
      sentBy: 'paul',
      message:
        "Every day. I've seen it all. The hardest part is walking into it anyway.",
      dp: '/paul.jpg',
      alt: 'paul image',
    },
    {
      sentBy: 'me',
      message: "I didn't just walk into it. I ran.",
      dp: '/eren.jpg',
      alt: 'me image',
    },
    {
      sentBy: 'anakin',
      message:
        'I told myself it was for Padmé. But honestly... I was just angry.',
      dp: '/anakin.jpg',
      alt: 'anakin image',
    },
    {
      sentBy: 'paul',
      message: 'Rage is easier than grief. We all know that.',
      dp: '/paul.jpg',
      alt: 'paul image',
    },
    {
      sentBy: 'me',
      message: "They'll call us villains. Fine. At least it worked.",
      dp: '/eren.jpg',
      alt: 'me image',
    },
  ];

  const chatContainer: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const messageRow: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  const imgVariants: Variants = {
    hidden: {
      scale: 0.01,
      opacity: 0,
      filter: 'blur(10px)',
    },
    visible: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  const messageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -4,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };
  const meMessageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 4,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  const [rotation, setRotation] = useState(0);

  const handleTap = () => {
    setRotation((val) => val + 360);
  };
  return (
    <div className="relative h-fit w-fit rounded-2xl bg-background-100 p-14 shadow-md ring shadow-neutral-950 ring-neutral-800/50">
      <motion.button
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={{
          hover: { scale: 1.05 },
          tap: { scale: 0.95 },
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 15,
        }}
        onClick={() => {
          setReload((val) => val + 1);
        }}
        className={cn(
          'absolute top-4 right-4',
          'rounded-full p-2',
          'bg-neutral-900',
          'ring ring-neutral-800/50',
          'group cursor-pointer',
          'duration-100 ease-out will-change-transform hover:transition-all',
          'hover:shadow-md hover:shadow-neutral-950',
          'focus:none select-none',
        )}
      >
        <motion.div
          onTap={handleTap}
          animate={{
            rotate: rotation,
          }}
          transition={{
            duration: 0.25,
            ease: 'easeOut',
          }}
        >
          <ArrowClockwiseIcon
            size={20}
            weight="regular"
            color="currentColor"
            className={cn(
              'fill-neutral-400',
              'group-hover:fill-neutral-300',
              'transition-colors duration-100 ease-out',
            )}
          />
        </motion.div>
      </motion.button>
      <motion.div
        variants={chatContainer}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-md flex-col gap-3 p-2"
        key={reload}
      >
        {messageList.map((item, idx) => (
          <motion.div
            variants={messageRow}
            key={idx}
            className={cn(
              item.sentBy == 'me' ? 'flex-row-reverse' : '',
              'flex items-center gap-2 rounded-xl',
            )}
          >
            <motion.div
              variants={imgVariants}
              className="size-8 min-h-8 min-w-8 overflow-hidden rounded-full"
            >
              <Image
                src={item.dp}
                alt={item.alt}
                width={40}
                height={40}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </motion.div>
            <motion.div
              variants={
                item.sentBy == 'me' ? meMessageVariants : messageVariants
              }
              className="rounded-xl bg-neutral-900/90 px-3 py-2 text-sm tracking-normal whitespace-pre-line text-neutral-300 shadow-sm shadow-neutral-950/50"
            >
              {item.message}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

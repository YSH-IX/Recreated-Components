'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type HeroCard = {
  activeSrc: string;
  left: number;
  showIdleSwap?: boolean;
  className?: string;
};

const CARD_WIDTH = 160;
const CARD_HEIGHT = 480;
const CARD_SPACING = 32;
const SHIFT_DISTANCE = 60;

const HERO_CARDS: HeroCard[] = [
  {
    activeSrc: 'https://assets.aceternity.com/labs/1.webp',
    left: CARD_SPACING,
  },
  {
    activeSrc: 'https://assets.aceternity.com/labs/2.webp',
    left: CARD_SPACING * 2,
  },
  {
    activeSrc: 'https://assets.aceternity.com/labs/3.webp',
    left: CARD_SPACING * 3,
  },
  {
    activeSrc: 'https://assets.aceternity.com/labs/4.webp',
    left: CARD_SPACING * 4,
  },
  {
    activeSrc: 'https://assets.aceternity.com/labs/5.webp',
    left: CARD_SPACING * 5,
    showIdleSwap: false,
  },
];

const MAIN_IMAGE = 'https://assets.aceternity.com/labs/main.webp';
const IDLE_IMAGE = 'https://assets.aceternity.com/labs/idle.webp';

export const FeyHero = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="font-inter relative flex h-dvh w-full items-center justify-center  bg-black">
      {/* Heading */}
      <h1 className="absolute top-1/2 left-1/2 z-50 w-full shrink-0 -translate-1/2 text-center text-5xl font-bold tracking-tight text-white select-none">
        Inspired by the pros. Made for you.
      </h1>

      {/* Hero Container */}
      <div
        className="relative mask-b-from-10%"
        style={{
          width: HERO_CARDS[HERO_CARDS.length - 1].left + CARD_WIDTH,
          height: CARD_HEIGHT,
        }}
      >
        {/* Main Image */}
        <Image
          src={MAIN_IMAGE}
          alt="Hero"
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          priority
          draggable={false}
          className="absolute bottom-0 left-0 h-full w-40 object-contain"
        />

        {/* Cards */}
        {HERO_CARDS.map((card, index) => {
          const shouldShift = activeIndex !== null && index > activeIndex;

          return (
            <motion.div
              key={card.activeSrc}
              className="group absolute bottom-0 z-20 h-full w-40 select-none"
              style={{
                left: card.left,
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Only this wrapper moves */}
              <motion.div
                className="relative h-full w-full"
                animate={{
                  x: shouldShift ? SHIFT_DISTANCE : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 22,
                  duration: 0.5,
                }}
              >
                {card.showIdleSwap !== false ? (
                  <>
                    {/* Idle Image */}
                    <Image
                      src={IDLE_IMAGE}
                      alt=""
                      width={CARD_WIDTH}
                      height={CARD_HEIGHT}
                      draggable={false}
                      className={cn(
                        'absolute inset-0 h-full w-full object-contain transition-opacity duration-500 group-hover:opacity-0',
                        activeIndex === index && 'opacity-0',
                      )}
                    />

                    {/* Active Image */}
                    <Image
                      src={card.activeSrc}
                      alt=""
                      width={CARD_WIDTH}
                      height={CARD_HEIGHT}
                      draggable={false}
                      className={cn(
                        'absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                        activeIndex === index && 'opacity-100',
                        card.className,
                      )}
                    />
                  </>
                ) : (
                  <Image
                    src={card.activeSrc}
                    alt=""
                    width={CARD_WIDTH}
                    height={CARD_HEIGHT}
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                )}
              </motion.div>
              <div className="absolute top-5.5 left-5.5 h-full bg-black p-2 blur-lg"></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

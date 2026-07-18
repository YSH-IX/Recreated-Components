'use client';

import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

type ScrollCharProps = {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  WAVE_FACTOR: number;
};
type ScrollDemoProps = {
  COPY: string;
  WAVE_FACTOR: number;
};

export const ScrollDemo = ({ COPY, WAVE_FACTOR }: ScrollDemoProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const chars = [...COPY];
  const total = chars.length;

  return (
    <section
      className="bg-background font-inter h-[400vh] w-full"
      ref={sectionRef}
    >
      <h1 className="sticky inset-x-0 top-1/2 mx-auto w-full max-w-xl text-center text-3xl leading-9 font-semibold tracking-tight text-white select-none">
        {chars.map((char, index) => (
          <ScrollChar
            key={`${char}-${index}`}
            char={char}
            index={index}
            total={total}
            scrollYProgress={scrollYProgress}
            WAVE_FACTOR={WAVE_FACTOR}
          />
        ))}
      </h1>
    </section>
  );
};

const ScrollChar = ({
  char,
  index,
  total,
  scrollYProgress,
  WAVE_FACTOR,
}: ScrollCharProps) => {
  const start = index / Math.max(total, 1);
  const end = Math.min(start + WAVE_FACTOR, 1);

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  const y = useTransform(scrollYProgress, [start, end], [10, 0]);

  return (
    <motion.span style={{ opacity, y, display: 'inline-block' }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};

'use client';

import { cn } from '@/lib/utils';
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useSpring,
} from 'motion/react';
import Image from 'next/image';
import { ReactNode, useRef, useState } from 'react';

type featureProps = {
  icon: ReactNode;
  title: string;
  description: string;
  content: string;
};
export const MotionExample = () => {
  const features: featureProps[] = [
    {
      icon: (
        <div className="icon-shadow h-fit w-fit rounded-xl bg-linear-to-bl from-neutral-700 to-neutral-800 p-1.5">
          <div className="h-fit w-fit rounded-full bg-linear-to-bl from-neutral-800 to-neutral-700 p-3"></div>
        </div>
      ),
      title: 'Anakin Skywalker',
      description:
        'The Chosen One, once a heroic Jedi Knight, destined to bring balance to the Force before turning to the dark side.',
      content: '/anakin.jpg',
    },
    {
      icon: (
        <div className="icon-shadow h-fit w-fit rounded-xl bg-linear-to-bl from-[#4a5367] to-[#252525] p-1.5">
          <div className="h-fit w-fit rounded-full bg-linear-to-bl from-[#252525] to-[#4a5367] p-3"></div>
        </div>
      ),
      title: 'Paul Atreides',
      description:
        "Heir of House Atreides, Muad'Dib, destined to be the messiah of Arrakis and lead the Fremen with wisdom and strength.",
      content: '/paul.jpg',
    },
    {
      icon: (
        <div className="icon-shadow h-fit w-fit rounded-xl bg-linear-to-bl from-[#714545] to-[#252525] p-1.5">
          <div className="h-fit w-fit rounded-full bg-linear-to-bl from-[#252525] to-[#714545] p-3"></div>
        </div>
      ),
      title: 'Eren Yeager',
      description:
        'A passionate fighter for freedom, willing to challenge fate and reshape the world, no matter the cost.',
      content: '/eren.jpg',
    },
  ];

  const nameBackgrounds = ['#202020', '#fafafa', '#dee2e6'];

  const [backgroundClr, setBackgroundClr] = useState(nameBackgrounds[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const finalValue = Math.floor(latest * nameBackgrounds.length);
    setBackgroundClr(nameBackgrounds[finalValue]);
    console.log(finalValue);
  });
  return (
    <motion.div
      className={cn('div-center min-h-screen w-full bg-neutral-900')}
      ref={containerRef}
      animate={{
        background: backgroundClr,
      }}
      transition={{
        // duration: 100,
        ease: 'easeInOut',
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col justify-center gap-38 px-2 py-48">
        {features.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ item }: { item: featureProps }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const translateValue = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 200]),
    {
      damping: 30,
      stiffness: 100,
      mass: 1,
    },
  );

  const opacityValue = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scaleValue = useTransform(
    scrollYProgress,
    [0.2, 0.7, 1],
    [0.8, 1, 0.2],
  );
  const clipPathValue = useTransform(scrollYProgress, [0, 1], [400, -380]);
  const blurValue = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, 10]);
  //   const clipPath = useMotionTemplate`inset(0% 0% ${clipPathValue}% 0%)`;
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <div className={cn('grid grid-cols-2 gap-6 py-30')} ref={ref}>
      <motion.div
        style={{
          scale: scaleValue,
        }}
        className="flex h-full w-full flex-col items-start justify-center"
      >
        <span className="mb-4">{item.icon}</span>
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-200">
            {item.title}
          </h2>
          <p className="text-lg font-medium text-neutral-400">
            {item.description}
          </p>
        </div>
      </motion.div>
      <motion.div
        style={{
          y: translateValue,
          //   opacity: opacityValue,
          filter,
          //   clipPath,
        }}
        className="relative min-h-110 w-full max-w-lg overflow-hidden"
      >
        <Image
          src={item.content}
          className="rounded-xl"
          alt={item.title}
          fill={true}
        ></Image>
      </motion.div>
    </div>
  );
};

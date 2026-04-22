'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, Variants } from 'motion/react';

export const Testimonials = () => {
  const testimonialInfo = [
    {
      review:
        "Light and dark are two sides of the same blade. I chose power to protect those I love — I'd make that choice again.",
      name: 'Anakin Skywalker',
      position: 'Dark Lord of Sith',
      pfp: '/anakin.jfif',
      alt: 'Anakin Skywalker image',
    },
    {
      review:
        "I don't care if you call me a devil. As long as my people are free, I'll keep moving forward.",
      name: 'Eren Yeager',
      position: 'Devil of Paradise',
      pfp: '/eren.jfif',
      alt: 'Eren Yeager image',
    },
    {
      review:
        'I have walked futures no human was meant to see. The Golden Path is not glory — it is sacrifice.',
      name: 'Paul Atreides',
      position: 'Kwisatz Haderach',
      pfp: '/paul.jfif',
      alt: 'Paul Atreides image',
    },
    {
      review:
        'The only ones who should kill are those prepared to be killed. I will tear this world down and rebuild it worthy.',
      name: 'Lelouch Vi Britannia',
      position: 'Demon Emperor',
      pfp: '/lelouch.jfif',
      alt: 'Lelouch Vi Britannia image',
    },
  ];

  const containerVariants: Variants = {
    initial: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const parentVariants: Variants = {
    initial: {
      opacity: 0,
      y: -20,
      filter: 'blur(20px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    hover: {
      zIndex: 10,
    },
  };

  const childrenVariants: Variants = {
    initial: {
      rotate: 0,
      x: 0,
      y: 0,
    },
    hover: {
      rotate: 4,
      x: 30,
      y: 30,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      whileInView="visible"
      //   animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      initial="initial"
      className="bg-background-100 grid h-fit w-fit grid-cols-1 grid-rows-1 gap-1 rounded-4xl border border-neutral-800 p-1 md:grid-cols-2 md:grid-rows-2"
    >
      {testimonialInfo.map((item, idx) => (
        <motion.div
          variants={parentVariants}
          key={idx}
          whileHover="hover"
          className={cn(
            'relative col-span-1 row-span-1 rounded-[28px] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_1px,transparent_1px,transparent_4px)] inset-shadow-[0_0_0_1px] inset-shadow-neutral-800 will-change-transform',
          )}
        >
          <motion.div
            variants={childrenVariants}
            className={cn(
              'bg-background-100 flex h-full min-h-[180px] w-full max-w-sm flex-col items-start justify-between gap-4 rounded-[28px] border border-neutral-800 p-6 shadow-md shadow-neutral-950 transition ease-out sm:p-8',
            )}
          >
            <p className="text-base text-neutral-300">" {item.review} "</p>
            <div className="flex items-center gap-2">
              <div className="size-8 min-h-8 min-w-8 overflow-hidden rounded-full">
                <Image
                  src={item.pfp}
                  alt={item.alt}
                  height={40}
                  width={40}
                  className="h-full w-full object-cover"
                  draggable="false"
                  loading="eager"
                ></Image>
              </div>
              <div className="flex flex-col items-start justify-between">
                <p className="text-xs font-semibold text-neutral-300">
                  {item.name}
                </p>
                <p className="text-[10px] text-neutral-400">{item.position}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

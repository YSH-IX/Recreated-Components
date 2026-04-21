'use client';

import { cn } from '@/lib/utils';
import { ArrowClockwiseIcon } from '@phosphor-icons/react';
import { motion, Variants } from 'motion/react';
import { Fragment, useState } from 'react';

interface compProps {
  text: string;
}

export const TextGenerate = ({ text }: compProps) => {
  const para = `" ${text} "`;
  const convertedPara = para.split(' ');

  const containerVariants: Variants = {
    initial: {
      opacity: 1,
    },
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 1.5,
      filter: 'blur(20px)',
      display: 'inline-block',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const [reload, setReload] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleReload = () => {
    setReload((val) => val + 1);
  };
  const handleTap = () => {
    setRotation((val) => val + 360);
  };

  return (
    <div className="s relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-sm shadow-neutral-950">
      <motion.button
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.05 },
          tap: { scale: 0.99 },
        }}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        style={{
          willChange: 'tranform',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          duration: 0.2,
          damping: 40,
        }}
        onClick={handleReload}
        className="absolute right-3 bottom-3 cursor-pointer rounded-xl bg-neutral-900 ring ring-neutral-700 select-none hover:shadow-md hover:shadow-neutral-950/70 hover:transition-shadow hover:duration-200 hover:ease-out"
      >
        <motion.div
          onTap={handleTap}
          animate={{
            rotate: rotation,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="p-2 will-change-transform"
        >
          <ArrowClockwiseIcon
            size={22}
            weight="regular"
            color="currentColor"
            className="size-5 fill-neutral-400"
          />
        </motion.div>
      </motion.button>
      <div
        className={cn(
          'font-instrument flex h-fit w-full max-w-xl flex-col items-start gap-3 p-4',
        )}
      >
        <h1 className="text-4xl text-white">
          Paul Atreides / Dune{' '}
          <span className="font-instrument text-3xl tracking-tight text-neutral-400 italic">
            (the Litany Against Fear)
          </span>
        </h1>
        <motion.div
          className="text-2xl text-neutral-300"
          variants={containerVariants}
          initial="initial"
          animate="visible"
          style={{
            willChange: 'filter, opacity, transform',
          }}
          key={reload}
        >
          {convertedPara.map((item, idx) => (
            <Fragment key={idx}>
              <motion.span variants={itemVariants}>{item}</motion.span>{' '}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

'use client';
import { cn } from '@/lib/utils';
import { animate } from 'motion';
import { motion, useMotionValue, useTransform } from 'motion/react';
import Image from 'next/image';
import React, { useState } from 'react';

export const DragCards = () => {
  const INITIAL_STACK = [
    {
      label: 'iPhone 15 Pro',
      description: 'Beautiful and durable, by design.',
      img: '/img1.jpg',
    },
    {
      label: 'All-new camera',
      description: 'Pictures you love. Photos you can’t believe.',
      img: '/img2.jpg',
    },
    {
      label: 'A19 Pro chip',
      description: 'Fast that lasts.',
      img: '/img3.jpg',
    },
    {
      label: 'New Action button',
      description: 'The iPhone’s most customizable button ever.',
      img: '/img4.jpg',
    },
    {
      label: 'Durable and spill resistant',
      description: 'Designed with the Earth in mind.',
      img: '/img5.jpg',
    },
    {
      label: 'iOS 17',
      description: 'Your data. About where you want it.',
      img: '/img6.jpg',
    },
    {
      label: 'Privacy',
      description: 'Helpful features. Just for you.',
      img: '/img7.jpg',
    },
  ];
  const [stack, setStack] = useState(INITIAL_STACK);
  return (
    <div className="bg-primary div-center h-dvh w-full overflow-hidden">
      <div className="relative h-96 w-80 rounded-2xl">
        {stack.map((item, idx) => (
          <StackedCard
            className={'cursor-grab active:cursor-grabbing'}
            key={item.label}
            label={item.label}
            description={item.description}
            img={item.img}
            idx={idx}
            total={stack.length}
            onSendBack={() => {
              idx === 0 ? setStack((s) => [...s.slice(1), s[0]]) : undefined;
            }}
          />
        ))}
      </div>
    </div>
  );
};

const STACK_SPRING = {
  type: 'spring' as const,
  damping: 32,
  stiffness: 380,
};

interface CardProps {
  label: string;
  img: string;
  idx: number;
  description: string;
  className: string;
  total: number;
  onSendBack: () => void;
}
const StackedCard = ({
  label,
  img,
  description,
  idx,
  className,
  onSendBack,
  total,
}: CardProps) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-160, 160], [-12, 12]);
  const isFirst = idx === 0;
  return (
    <motion.div
      drag={isFirst ? 'x' : false}
      dragConstraints={{ left: -160, right: 160 }}
      dragElastic={0.08}
      onDragEnd={() => {
        if (!isFirst || !onSendBack) return;
        onSendBack();
        animate(x, 0, STACK_SPRING);
      }}
      className={cn(
        'absolute inset-0 rounded-2xl bg-neutral-950 ring-2 ring-neutral-100 select-none',
        className,
      )}
      style={{
        zIndex: total - idx,
        rotate: rotate,
        x,
      }}
      animate={{
        y: `${-idx * 5.2}%`,
        scale: 1 - idx * 0.05,
      }}
      transition={STACK_SPRING}
    >
      <div className="relative min-h-96 rounded-2xl bg-black/20">
        <Image
          fill
          key={label}
          src={img}
          alt={label}
          draggable={false}
          loading="eager"
          priority
          className="pointer-events-none absolute inset-0 rounded-2xl mask-b-from-50% mask-b-to-90% object-cover"
        />

        <div className="font-inter absolute bottom-0 left-0 flex flex-col items-start gap-1 p-4 text-neutral-100">
          <h2 className="relative z-10 text-2xl font-medium tracking-tight text-shadow-black/20 text-shadow-xs">
            {label}
          </h2>
          <p className="relative z-10 text-sm font-light text-shadow-black/20 text-shadow-xs">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

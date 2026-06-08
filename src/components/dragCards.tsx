'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
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
    <div className="bg-primary div-center h-dvh w-full">
      <div className="relative h-96 w-80 rounded-2xl">
        {stack.map((item, idx) => (
          <div
            className="absolute inset-0"
            style={{
              y: idx,
              scale: (100 - idx) * 0.01,
            }}
          >
            <div className="relative min-h-96 rounded-2xl bg-black/20">
              <Image
                fill
                key={item.label}
                src={item.img}
                alt={item.label}
                draggable={false}
                loading="eager"
                priority
                className="inset-0 rounded-2xl object-cover"
              />

              <div className="font-inter absolute bottom-10 left-4 flex flex-col items-start gap-1">
                <h2 className="relative z-10 text-xl font-medium">
                  {item.label}
                </h2>
                <p className="relative z-10 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

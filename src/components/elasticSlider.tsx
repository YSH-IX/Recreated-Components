'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import React from 'react';

export const ElasticSlider = () => {
  return (
      <div className="div-center bg-primary h-dvh w-full">
          <div className='bg-neutral-900 rounded-2xl border border-neutral-800 shadow-sm shadow-black/80 w-full max-w-sm h-100'>
              <input type="range"  />
          </div>
    </div>
  );
};

'use client';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import React from 'react';
import { PlusIcon } from '@phosphor-icons/react';

export const Popover = () => {
    return <div className='w-full h-screen div-center bg-gray-100 dark:bg-neutral-900'>
      
        <div className=''>
            <PlusIcon weight='regular' color='currentColor' size={24}/>
        </div>
  </div>;
};

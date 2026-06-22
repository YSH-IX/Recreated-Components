'use client';

import { cn } from '@/lib/utils';
import {
  ChatCircleIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  UserIcon,
  BellIcon,
  IconProps,
  NotePencilIcon,
} from '@phosphor-icons/react';
import { ForwardRefExoticComponent } from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';

type NavItem = {
  label: string;
  icon: ForwardRefExoticComponent<IconProps>;
};

export const FrostedNav = ({ navList }: { navList?: NavItem[] }) => {
  const DEMO_LIST: NavItem[] = [
    {
      label: 'Home',
      icon: HouseIcon,
    },
    {
      label: 'Search',
      icon: MagnifyingGlassIcon,
    },
    {
      label: 'Notifications',
      icon: BellIcon,
    },
    {
      label: 'Messages',
      icon: ChatCircleIcon,
    },
    {
      label: 'Profile',
      icon: UserIcon,
    },
  ];
  if (navList === undefined) {
    navList = DEMO_LIST;
  }
  const [selected, setSelected] = useState<string>('Home');
  return (
    <div
      className={cn(
        'flex justify-center',
        'font-inter relative h-dvh w-full items-end bg-neutral-800 px-4 py-12',
      )}
    >
      <div className="flex flex-col items-end justify-center">
        <div
          className={cn(
            'relative',
            'shadow-[inset_0_0_0.5px_0_rgba(255,255,255,0.1),inset_0.5px_0.5px_0.5px_0_rgba(255,255,255,0.2),inset_-0.5px_-0.5px_0.5px_0_rgba(255,255,255,0.2)]',
            'grid grid-cols-5 gap-0.5 rounded-full bg-white/5 p-1 backdrop-blur-lg',
          )}
        >
          {navList.map((navItem: NavItem) => {
            const { label, icon } = navItem;
            return (
              <Button
                key={label}
                icon={icon}
                label={label}
                selected={selected}
                onClick={() => setSelected(label)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

type ButtonProps = {
  label: string;
  icon: ForwardRefExoticComponent<IconProps>;
  onClick: () => void;
  selected: string;
};

const Button = ({ label, icon: Icon, onClick, selected }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative cursor-pointer appearance-none rounded-full px-3 pt-2 pb-1.5 transition-all duration-150 ease-out outline-none select-none sm:px-4 sm:py-2.5',
      )}
    >
      <div className="relative z-1 flex flex-col items-center gap-0.5 sm:gap-1">
        {Icon && (
          <Icon
            size={20}
            color="currentColor"
            weight={selected === label ? 'fill' : 'regular'}
            className={cn(
              'size-6 group-hover:fill-neutral-200',
              selected === label ? 'fill-neutral-100' : 'fill-neutral-400',
            )}
          />
        )}
      </div>
      {selected === label && (
        <motion.div
          layoutId="btn"
          className="absolute inset-0 size-full rounded-full bg-neutral-500/50"
        ></motion.div>
      )}
    </button>
  );
};

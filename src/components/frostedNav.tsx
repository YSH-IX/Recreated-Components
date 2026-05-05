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
import Image from 'next/image';
import { ForwardRefExoticComponent } from 'react';
import { useState } from 'react';

type NavItem = {
  label: string;
  icon: ForwardRefExoticComponent<IconProps>;
};

export const FrostedNav = () => {
  const navItems: NavItem[] = [
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
  const [selected, setSelected] = useState<string>('Home');
  const [create, setCreate] = useState<boolean>(false);
  return (
    <div
      className={cn(
        'flex justify-center',
        'font-inter relative h-full w-full items-end bg-neutral-800 p-4',
      )}
    >
      <Image
        src={'/anakin.jpg'}
        alt={'anakin.jpg'}
        fill
        className="absolute inset-2 object-contain"
      ></Image>
      <div className="flex flex-col items-end justify-center gap-4">
        <button
          onClick={() => {
            setCreate((val) => !val);
            setSelected(create ? 'Home' : '');
          }}
          className={cn(
            // Layout & positioning
            'rounded-full',
            'mr-4 appearance-none outline-none',
          )}
        >
          <div
            className={cn(
              'rounded-full',
              'bg-white/5 backdrop-blur-xl',
              'p-3.5 md:p-4',
              'hover:bg-neutral-500/50 active:bg-neutral-500/50',
              'shadow-[inset_0_0_0.5px_0_rgba(255,255,255,0.1),inset_1px_1px_1px_0_rgba(255,255,255,0.2),inset_-1px_-1px_1px_0_rgba(255,255,255,0.2)]',
              'transition-all duration-150 ease-out',
            )}
          >
            <NotePencilIcon
              size={20}
              weight={create ? 'fill' : 'regular'}
              color="currentColor"
              className="size-5.5 rounded-full fill-neutral-200"
            />
          </div>
        </button>
        <div
          className={cn(
            'relative',
            'shadow-[inset_0_0_0.5px_0_rgba(255,255,255,0.1),inset_0.5px_0.5px_0.5px_0_rgba(255,255,255,0.2),inset_-0.5px_-0.5px_0.5px_0_rgba(255,255,255,0.2)]',
            'grid grid-cols-5 rounded-full bg-white/5 p-1 backdrop-blur-lg',
          )}
        >
          {navItems.map((navItem: NavItem) => {
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
        'cursor-pointer appearance-none rounded-full px-3 pt-2 pb-1.5 transition-all duration-150 ease-out outline-none select-none hover:bg-neutral-500/50 active:bg-neutral-500/50 sm:px-4.5 sm:py-2.5',
        selected === label ? 'bg-neutral-500/50' : '',
      )}
    >
      <div className="flex flex-col items-center gap-0.5 sm:gap-1">
        {Icon && (
          <Icon
            size={20}
            color="currentColor"
            weight={selected === label ? 'fill' : 'regular'}
            className="size-6 fill-neutral-200"
          />
        )}
        <span className="text-xxs text-neutral-100 sm:text-xs">{label}</span>
      </div>
    </button>
  );
};

'use client';

import { cn } from '@/lib/utils';
import { CardsIcon, CubeIcon, ListDashesIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

interface ChipProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

interface CardProps {
  children?: ReactNode;
  className?: string;
}

const SharedMenu = () => {
  const toggleButtons = [
    {
      viewType: 'List View',
      icon: ListDashesIcon,
    },
    {
      viewType: 'Card View',
      icon: CardsIcon,
    },
    {
      viewType: 'Pack View',
      icon: CubeIcon,
    },
  ];

  const CardList = [
    {
      src: '/jn.jpg',
      title: 'Skilled Fingers Series',
      ethValue: '0.855',
      serial: '#209',
      alt: 'jn image',
    },
    {
      src: '/jgn.jpg',
      title: 'Vibrant Vibes Series',
      ethValue: '0.209',
      serial: '#808',
      alt: 'jgn image',
    },
  ];
  const [id, setId] = useState<String>('List View');

  return (
    <div
      className={cn(
        'overflow- relative flex h-fit w-full max-w-fit flex-col items-center justify-start divide-y divide-neutral-800 rounded-4xl border border-neutral-700/70 bg-neutral-900',
        "after:absolute after:-top-14 after:h-fit after:w-fit after:rounded-xl after:border after:border-neutral-700/80 after:bg-neutral-900 after:px-4 after:py-1.5 after:content-['Chips'] after:left-1/2 after:-translate-x-1/2",
      )}
    >
      {/* Chips */}
      <div className="flex w-full items-center justify-center gap-2 p-2 text-sm font-medium text-neutral-300">
        {toggleButtons.map((item, idx) => (
          <Chip
            key={idx}
            onClick={() => {
              setId(item.viewType);
            }}
            className={cn(
              'will-change-transform',
              id === item.viewType
                ? 'border-green-600 bg-green-600 text-neutral-50 shadow inset-shadow-[0_1px] shadow-neutral-950 inset-shadow-white/70'
                : '',
              'cursor-pointer select-none',
            )}
          >
            <item.icon
              weight="bold"
              size={20}
              className={cn(
                id === item.viewType ? 'fill-neutral-50' : 'fill-neutral-300',
              )}
            />
            <p>{item.viewType}</p>
          </Chip>
        ))}
      </div>
      {/* Cards */}
      {/* <div
        className={cn(
          'grid h-fit w-full max-w-md grid-cols-1 grid-rows-2 gap-2 bg-neutral-900',
          id == 'List View' ? 'grid-cols-1' : 'grid-cols-2',
        )}
      >
        {CardList.map((item, idx) => (
          <Card
            key={idx}
            className={cn(
              'col-span-1 row-span-1 w-full rounded-3xl border border-neutral-700 p-1.5',
              id == 'List View' ? '' : 'col-span-1 row-span-2 flex flex-col',
            )}
          >
            <CardImg>
              <Image
                src={item.src}
                alt={item.alt}
                width={80}
                height={80}
                className={cn('aspect-square rounded-2xl')}
              />
            </CardImg>
            <CardInfo>
              <p className={cn('text-base font-medium text-neutral-200')}>
                {item.title}
              </p>
              <div className="flex w-full items-center justify-between font-medium">
                <span className="text-sm text-neutral-200">
                  {item.ethValue}{' '}
                  <span className="text-sm text-neutral-500">ETH</span>
                </span>
                <span className="text-sm text-neutral-500">{item.serial}</span>
              </div>
            </CardInfo>
          </Card>
        ))}
      </div> */}
    </div>
  );
};

const Chip = ({ className, children, ...rest }: ChipProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-1 rounded-[100px] border border-neutral-700/90 py-2 pr-4 pl-3 shadow-neutral-950 transition-all duration-100 ease-out hover:shadow-sm',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn('flex h-fit items-start gap-2', className)}>
      {children}
    </div>
  );
};
const CardImg = ({ children, className }: CardProps) => {
  return <div className={cn('', className)}>{children}</div>;
};
const CardInfo = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-start justify-between gap-0',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SharedMenu;

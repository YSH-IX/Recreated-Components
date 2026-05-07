'use client';
import { cn } from '@/lib/utils';
import { CardsIcon, CubeIcon, ListDashesIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { useState } from 'react';
import { motion, LayoutGroup } from 'motion/react';

const SharedMenu = () => {
  const toggleButtons = [
    { viewType: 'List View', icon: ListDashesIcon, type: 'list' },
    { viewType: 'Card View', icon: CardsIcon, type: 'card' },
    { viewType: 'Pack View', icon: CubeIcon, type: 'pack' },
  ];

  type CardTypes = {
    src: string;
    title: string;
    ethValue: string;
    serial: string;
    alt: string;
  };
  const CardList: CardTypes[] = [
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

  const MotionImage = motion.create(Image);
  const [viewType, setViewType] = useState<string>('list');
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-background-100 min-h-screen w-full py-40">
      <div className="mx-auto flex w-full max-w-md flex-col gap-4 divide-y divide-neutral-700/40">
        <div className="py-4">
          <LayoutGroup>
            <div
              className="mx-auto flex w-fit items-center gap-2"
              onMouseLeave={() => setHovered(null)}
            >
              {toggleButtons.map((item, idx) => (
                <button
                  onClick={() => setViewType(item.type)}
                  onMouseEnter={() => setHovered(idx)}
                  key={item.type}
                  className={cn(
                    'relative isolate flex cursor-pointer appearance-none items-center gap-1 rounded-full py-2 pr-4 pl-3.5 text-sm text-neutral-200 outline-none select-none',
                    'shadow-[0_2px_4px_0_rgba(10,10,10,0.1)]',
                    item.type === viewType
                      ? 'bg-neutral-300 text-neutral-950 shadow-[inset_0_0_8px_0_rgba(10,10,10,0.6)]'
                      : 'bg-neutral-800',
                  )}
                >
                  {hovered === idx && (
                    <motion.div
                      layoutId={`hover`}
                      className="absolute inset-0 rounded-full bg-neutral-200/20"
                    ></motion.div>
                  )}
                  <item.icon size={20} />
                  <span>{item.viewType}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>
        <LayoutGroup>
          <div
            className={cn(
              'flex gap-4',
              viewType === 'list' ? 'flex-col' : 'relative flex-row',
            )}
          >
            {CardList.map((item, idx) => {
              if (viewType === 'list') {
                return (
                  <motion.div
                    layoutId={`card-${item.title}`}
                    key={idx}
                    className="flex items-start gap-2"
                  >
                    <MotionImage
                      layoutId={`card-image-${item.title}`}
                      loading="eager"
                      draggable={false}
                      src={item.src}
                      alt={item.alt}
                      height={100}
                      width={100}
                      className="aspect-square size-14 rounded-xl"
                    />
                    <motion.div
                      layoutId={`card-about-${item.title}`}
                      className="w-full"
                    >
                      <motion.p
                        layoutId={`card-title-${item.title}`}
                        className="text-base font-medium tracking-tight text-neutral-300"
                      >
                        {item.title}
                      </motion.p>
                      <div className="flex w-full items-center justify-between">
                        <motion.span
                          layoutId={`card-ethValue-${item.title}`}
                          className="text-base font-medium tracking-tight text-neutral-300"
                        >
                          {item.ethValue}{' '}
                          <span className="text-base tracking-tight text-neutral-500">
                            ETH
                          </span>
                        </motion.span>
                        <motion.span
                          layoutId={`card-serial-${item.title}`}
                          className="text-neutral-500"
                        >
                          {item.serial}
                        </motion.span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              }
              if (viewType === 'card') {
                return (
                  <motion.div
                    layoutId={`card-${item.title}`}
                    key={idx}
                    className="flex w-full flex-col items-center gap-2"
                  >
                    <MotionImage
                      layoutId={`card-image-${item.title}`}
                      loading="eager"
                      draggable={false}
                      src={item.src}
                      alt={item.alt}
                      height={120}
                      width={120}
                      className="aspect-square size-full rounded-xl"
                    />
                    <motion.div
                      layoutId={`card-about-${item.title}`}
                      className="w-full"
                    >
                      <motion.p
                        layoutId={`card-title-${item.title}`}
                        className="w-full text-base font-medium tracking-tight text-neutral-300"
                      >
                        {item.title}
                      </motion.p>
                      <div className="flex w-full items-center justify-between gap-2">
                        <motion.span
                          layoutId={`card-ethValue-${item.title}`}
                          className="text-base font-medium tracking-tight text-neutral-300"
                        >
                          {item.ethValue}{' '}
                          <span className="text-base tracking-tight text-neutral-500">
                            ETH
                          </span>
                        </motion.span>
                        <motion.span
                          layoutId={`card-serial-${item.title}`}
                          className="text-neutral-500"
                        >
                          {item.serial}
                        </motion.span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              }
              if (viewType === 'pack') {
                return (
                  <motion.div
                    layoutId={`card-${item.title}`}
                    key={idx}
                    className="absolute top-4 left-1/2 w-fit -translate-x-1/2"
                  >
                    <MotionImage
                      style={{
                        rotate: idx % 2 == 0 ? -8 : 8,
                      }}
                      layoutId={`card-image-${item.title}`}
                      loading="eager"
                      draggable={false}
                      src={item.src}
                      alt={item.alt}
                      height={120}
                      width={120}
                      className="linear aspect-square size-50 rounded-lg"
                    />
                  </motion.div>
                );
              }
            })}
            {viewType === 'pack' && (
              <motion.div
                initial={{
                  y: 10,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.2,
                  ease: 'easeOut',
                }}
                className="div-center teacking-tight absolute top-62 left-1/2 w-fit shrink-0 -translate-x-1/2 text-center text-base font-medium text-neutral-200"
              >
                {CardList.length} Collectibles
              </motion.div>
            )}
          </div>
        </LayoutGroup>
      </div>
    </div>
  );
};

export default SharedMenu;

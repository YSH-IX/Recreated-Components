'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const Expandables = () => {
  type heroProps = {
    title: string;
    desc: string;
    image: string;
    action: string;
    expanded: string;
  };

  const tragicHeroes: heroProps[] = [
    {
      title: 'Anakin Skywalker',
      desc: 'The Chosen One burdened by prophecy.',
      image: '/anakin.jpg',
      action: 'Learn',
      expanded: `Set in a galaxy embroiled in war, Anakin was a slave who rose to become a legendary Jedi Knight. His immense talent set him apart, but also isolated him from those around him. The Jedi Order placed heavy expectations on him, shaping his destiny. Throughout the galaxy, few could match his skills or the weight carried on his shoulders. He is defined by both hope and inner conflict.`,
    },
    {
      title: 'Paul Atreides',
      desc: 'Heir to a house swept into destiny.',
      image: '/paul.jpg',
      action: 'Learn',
      expanded: `In a universe ruled by great houses, Paul is swept into political intrigue and spiritual prophecy on the desert planet Arrakis. His journey mixes royal responsibility with mysterious forces beyond his control. The harsh sands of his new home test his will and vision. Legends swirl around him, blurring the lines between myth and reality. Paul's actions echo across cultures and generations.`,
    },
    {
      title: 'Eren Yeager',
      desc: 'A fighter seeking freedom above all.',
      image: '/eren.jpg',
      action: 'Learn',
      expanded: `Within the towering walls of a besieged city, Eren dreams of a world beyond confinement. Titans roam the land, shaping every aspect of human life. His determination drives both himself and his friends through harrowing battles. Eren lives in a world where hope and despair are tightly bound. His story probes what it truly means to seek liberation.`,
    },
    {
      title: 'Macbeth',
      desc: 'A general undone by ambition.',
      image: '/macbeth.jpg',
      action: 'Learn',
      expanded: `Amidst the mists and political shadows of medieval Scotland, Macbeth is a war hero lauded by his king and peers. Prophecies whispered by mysterious figures upend his sense of fate and morality. The halls of power hold both allure and danger for him. Shakespeare’s tale explores how personal desires clash with destiny and the cost such battles extract. Macbeth’s world teeters between honor and temptation.`,
    },
    {
      title: 'Walter White',
      desc: 'A brilliant mind under intense pressure.',
      image: '/walter.jpg',
      action: 'Learn',
      expanded: `In suburban America, Walter is an unassuming chemistry teacher confronted by life's harsh realities. Pressures mount, pushing him to choices that ripple across his family and community. The scientific world provides him control, but emotion and pride shape his path. His narrative is a study of reinvention and the unforeseen consequences of decisions. Walter stands as an icon of ambition mixed with unintended fallout.`,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<heroProps | null>(null);

  return (
    <div className="div-center h-screen w-full bg-neutral-900 px-2">
      <div className="font-inter bg-background-100 relative flex h-fit w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-neutral-800 px-3 md:py-16 py-8 shadow-[0_0_10px_1px_rgba(20,20,20,0.2),0_12px_10px_1px_rgba(20,20,20,0.4)]">
        <AnimatePresence>
          {expandedIndex && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              onClick={() => setExpandedIndex(null)}
              className="absolute inset-0 z-5 cursor-pointer bg-black/40 backdrop-blur-[2px]"
            ></motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {expandedIndex && (
            <motion.div
              layoutId={`card-${expandedIndex.title}`}
              key={expandedIndex.title}
              className="absolute inset-0 z-10 m-auto max-h-fit w-full max-w-xl rounded-3xl border border-neutral-800 bg-neutral-900 p-4"
            >
              <div className="flex w-full appearance-none flex-col items-center gap-3 outline-none">
                <div className="flex w-full items-center gap-4">
                  <motion.div
                    layoutId={`card-image-${expandedIndex.title}`}
                    className={cn(
                      'relative min-h-14 min-w-14 rounded-xl',
                      'before:absolute before:inset-0 before:z-7 before:rounded-xl before:shadow-[inset_-0.5px_0.5px_1px_0_rgba(200,200,200,0.4),inset_0.5px_-0.5px_1px_0_rgba(200,200,200,0.4)]',
                    )}
                  >
                    <Image
                      src={expandedIndex.image}
                      alt={expandedIndex.title}
                      priority
                      fill
                      loading={'eager'}
                      className={cn('rounded-xl object-cover')}
                    />
                  </motion.div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col items-start justify-between gap-1 py-1.5">
                      <motion.div
                        layoutId={`card-title-${expandedIndex.title}`}
                        className="text-sm font-medium text-neutral-200"
                      >
                        {expandedIndex.title}
                      </motion.div>
                      <motion.div
                        layoutId={`card-desc-${expandedIndex.title}`}
                        className="text-left text-sm tracking-tight text-neutral-400"
                      >
                        {expandedIndex.desc}
                      </motion.div>
                    </div>
                    <motion.span
                      layoutId={`card-action-${expandedIndex.title}`}
                      className="rounded-full bg-neutral-800 px-2 py-1 text-xs text-sky-500"
                    >
                      {expandedIndex.action}
                    </motion.span>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.1,
                      ease: 'easeOut',
                    },
                  }}
                  transition={{ duration: 0.2 }}
                  className="leading- text-left text-sm/6 text-neutral-400"
                >
                  {expandedIndex.expanded}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {tragicHeroes.map((hero, idx) => (
          <motion.div
            layoutId={`card-${hero.title}`}
            key={hero.title}
            className="mx-auto w-full max-w-md cursor-pointer rounded-2xl p-2"
            onClick={() => setExpandedIndex(hero)}
          >
            <div className="flex w-full appearance-none items-center gap-4 outline-none">
              <motion.div
                layoutId={`card-image-${hero.title}`}
                className={cn(
                  'relative isolate min-h-14 min-w-14 rounded-xl',
                  'before:absolute before:inset-0 before:z-7 before:rounded-xl before:shadow-[inset_-0.5px_0.5px_1px_0_rgba(200,200,200,0.4),inset_0.5px_-0.5px_1px_0_rgba(200,200,200,0.4)]',
                )}
              >
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  loading="eager"
                  priority
                  className={cn('rounded-xl')}
                />
              </motion.div>
              <div className="relative flex w-full items-center justify-between">
                <motion.div className="flex flex-col items-start justify-between gap-1 py-1.5">
                  <motion.div
                    layoutId={`card-title-${hero.title}`}
                    className="text-sm font-medium text-neutral-200"
                  >
                    {hero.title}
                  </motion.div>
                  <motion.div
                    layoutId={`card-desc-${hero.title}`}
                    className="text-left text-sm tracking-tight text-neutral-400"
                  >
                    {hero.desc}
                  </motion.div>
                </motion.div>
                <motion.span
                  layoutId={`card-action-${hero.title}`}
                  className="rounded-full bg-neutral-900 px-2 py-1 text-xs text-sky-600"
                >
                  {hero.action}
                </motion.span>
                <div
                  className={cn(
                    'absolute -bottom-2 h-px w-full -translate-y-1/2',
                    idx + 1 === tragicHeroes.length
                      ? 'bg-none'
                      : 'bg-neutral-800',
                  )}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

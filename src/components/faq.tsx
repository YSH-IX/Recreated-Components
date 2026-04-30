'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Faq = () => {
  const faqItems = [
    {
      icon: '💥',
      question: 'Destroyed the Marleyan Fleet',
      answer:
        'Eren used the power of the Attack Titan and the Founding Titan to decimate the Marleyan fleet during the raid on Liberio, demonstrating the sheer destructive force he could wield.',
    },
    {
      icon: '🦁',
      question: 'Led the Paradis Uprising',
      answer:
        'Eren defied orders and took initiative to infiltrate Marley, setting in motion a chain of events that shifted the world’s balance of power and forced Paradis to take destiny into its own hands.',
    },
    {
      icon: '🌪️',
      question: 'Unleashed the Rumbling',
      answer:
        'By awakening the Wall Titans with the Founding Titan, Eren unleashed the Rumbling—an earth-shattering march that threatened to destroy all life beyond Paradis Island.',
    },
    {
      icon: '🤯',
      question: 'Inherited Multiple Titans',
      answer:
        'Eren became one of the few to wield the power of multiple Titans: the Attack Titan, Founding Titan, and War Hammer Titan, giving him unparalleled versatility in battle.',
    },
    {
      icon: '🕊️',
      question: 'Challenged the World for Freedom',
      answer:
        'Driven by a desire for freedom for his people, Eren took on the entire world, sacrificing everything—even his own ideals—for the future of Paradis Island.',
    },
  ];
  const [open, setOpen] = useState<null | number>(null);
  function setVal({ idx }: { idx: number }) {
    if (open == idx) {
      setOpen(null);
    } else {
      setOpen(idx);
    }
  }
  return (
    <div className="div-center bg-background-100 size-full">
      <motion.div className="overflow-hdden div-center flex-col will-change-transform">
        {faqItems.map((item, idx) => {
          return (
            <motion.div
              initial={{
                scale: 1,
                opacity: 0.99,
              }}
              animate={{
                scale: open == idx ? 1.05 : 1,
                opacity: open == idx ? 1 : 0.99,
                borderRadius: open == idx ? 24 : 1,
                margin: open == idx ? '18px 0 ' : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 20,
              }}
              className="flex w-full max-w-[370px] cursor-pointer flex-col items-start gap-2 bg-neutral-900 p-4 will-change-transform select-none first:rounded-t-3xl last:rounded-b-3xl hover:bg-[#141414]"
              key={idx}
              onClick={() => setVal({ idx })}
            >
              {/* Visible Closed */}
              <div className="flex w-full items-start gap-3">
                {/* Icon */}
                <div
                  className={cn(
                    'rounded-xl border border-neutral-950 bg-[#161616] p-3',
                    'inset-shadow-[-0.5px_0.5px_2px_0_rgba(255,255,255,0.2)]',
                  )}
                >
                  {item.icon}
                </div>
                {/* Content */}
                <div className="flex flex-col items-start justify-between">
                  <p className="text-base text-neutral-300">{item.question}</p>
                  <AnimatePresence>
                    {open !== idx && (
                      <motion.p
                        initial={{
                          filter: 'blur(0px)',
                          opacity: 1,
                        }}
                        // animate={{
                        //   filter: 'blur(0px)',
                        //   opacity: 1,
                        // }}
                        exit={{
                          filter: 'blur(8px)',
                          opacity: 0,
                          transition: { duration: 0.1, ease: 'easeIn' },
                        }}
                        transition={{
                          duration: 0.1,
                          ease: 'easeOut',
                        }}
                        className="line-clamp-1 text-sm text-neutral-400"
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {/* Visible on Open */}
              <AnimatePresence>
                {open == idx && (
                  <motion.div
                    initial={{
                      // filter: 'blur(8px)',
                      // opacity: 0.5,
                      clipPath: 'inset 0% 0% 100% 0%'
                    }}
                    animate={{
                      filter: 'blur(0px)',
                      opacity: 1,
                    }}
                    exit={{
                      filter: 'blur(8px)',
                      opacity: 0.5,
                      // transition: { duration: 0.1 },
                    }}
                    transition={{
                      duration: 0.1,
                      ease: 'easeOut',
                    }}
                    className="w-full text-sm text-wrap text-neutral-400"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

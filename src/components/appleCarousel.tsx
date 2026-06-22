'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

type CarouselProps = {
  label: string;
  description: string;
  img: string;
};

export const AppleCarousel = ({
  CarouselList,
}: {
  CarouselList?: CarouselProps[];
}) => {
  const DEMO_LIST: CarouselProps[] = [
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
  if (CarouselList === undefined) {
    CarouselList = DEMO_LIST;
  }
  const startEndInset =
    'pl-[max(1rem,calc((100vw-64rem)/2))] ' +
    'pr-[max(1rem,calc((100vw-64rem)/2))] ' +
    'scroll-pl-[max(1rem,calc((100vw-64rem)/2))]';

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  const container = useRef<HTMLDivElement>(null);
  return (
    <section className="font-inter relative w-full bg-white">
      <AnimatePresence mode="sync">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xl"
          />
        )}

        {/* Modal */}
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 overflow-y-auto py-16 [&::-webkit-scrollbar]:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 8,
                transition: {
                  delay: 0.2,
                  duration: 0.4,
                  ease: 'easeIn',
                },
              }}
              transition={{
                delay: 0.2,
                type: 'spring',
                stiffness: 200,
                damping: 60,
              }}
              className="mx-auto w-full max-w-[1100px] px-4"
            >
              <div className="relative rounded-4xl bg-white p-4 shadow-[0_0_4px_2px_rgba(200,200,200,0.3),0_2px_4px_0_rgba(200,200,200,0.3)]">
                {/* Sticky Header */}
                <div className="sticky -top-12 z-50 mb-10 flex justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    className="div-center cursor-pointer rounded-full bg-black outline-none"
                  >
                    <CrossIcon />
                  </button>
                </div>
                <div className="px-20 pt-10 pb-20">
                  {/* Modal Header */}
                  <div className="mb-12 flex flex-col items-start gap-6 text-neutral-800">
                    <h1 className="text-base font-medium">Innovation</h1>

                    <p className="text-5xl font-semibold tracking-tight">
                      Beautiful and durable, by design.
                    </p>
                  </div>

                  {/* Modal Content */}
                  <div className="flex flex-col items-center gap-6">
                    {[
                      {
                        bold: 'Second to none.',
                        description:
                          'iPhone is known for its iconic design and advanced materials — like iPhone 17 Pro, which has a heat-forged aluminium unibody and is built to deliver exceptional performance. And our thinnest iPhone ever, iPhone Air. Hardware and software are designed in tandem — like Dynamic Island, Camera Control and the Action button.',
                        image: '/modal_img_1.jpg',
                      },
                      {
                        bold: 'Last phone standing.',
                        description:
                          'iPhone is protected by Ceramic Shield, which is tougher than any smartphone glass or glass ceramic. Our latest iPhone models have Ceramic Shield 2 on the front, with 3x better scratch resistance.1 iPhone 17 Pro and iPhone Air also have Ceramic Shield on the back for added durability. Little spill? No biggie — iPhone stands up to splashes from everyday liquids like water, coffee and soft drink.',
                        image: '/modal_img_2.jpg',
                      },
                      {
                        bold: 'Ease of use.',
                        description:
                          'We design our hardware and software together for a seamless experience. Want to share your contact info? Hold your iPhone close to theirs. New AirPods? It’s a one‑tap setup. And regular iOS updates keep your iPhone feeling new for years to come.',
                        image: '/modal_img_3.jpg',
                      },
                    ].map((item, idx) => (
                      <div
                        key={item.bold + idx}
                        className="w-full overflow-hidden rounded-3xl bg-[#f5f5f7]"
                      >
                        <div className="mx-auto w-full max-w-3xl px-6 pt-14 pb-8 text-2xl/snug font-medium tracking-tight text-neutral-600">
                          <span className="font-semibold text-neutral-900">
                            {item.bold}
                          </span>{' '}
                          <span>{item.description}</span>
                        </div>

                        <div className="relative h-140 w-full overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.bold + idx}
                            className="absolute inset-0 size-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Overlay */}

      {/* Main Content */}
      <div className="py-24">
        {/* Section Title */}
        <div className="mx-auto mb-12 w-full max-w-5xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
            className="text-5xl font-semibold tracking-tight text-neutral-900"
          >
            Get to know iPhone.
          </motion.h1>
        </div>

        {/* Carousel */}
        <motion.div ref={container}>
          <motion.div
            drag="x"
            dragConstraints={container}
            className={cn(
              `flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2 select-none [&::-webkit-scrollbar]:hidden`,
              startEndInset,
            )}
          >
            {CarouselList.map((item, idx) => (
              <motion.button
                key={idx}
                // onClick={() => setOpen(true)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.15 * idx,
                  duration: 0.6,
                  ease: 'easeInOut',
                  // type: 'spring',
                  // stiffness: 100,
                  // damping: 36,
                }}
                className="relative flex h-148 w-82 shrink-0 cursor-grab snap-start overflow-hidden rounded-4xl p-6 outline-none active:cursor-grabbing"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeOut',
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="size-full object-cover"
                    draggable={false}
                  />
                </motion.div>

                <div className="pointer-events-none relative z-10 flex flex-col items-start gap-2 font-medium">
                  <h2 className="text-base text-white">{item.label}</h2>

                  <p className="text-left text-2xl tracking-tight text-balance text-white">
                    {item.description}
                  </p>
                </div>

                <div className="div-center absolute right-4 bottom-4 z-10 rounded-full bg-white p-1">
                  <Icon />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Icon = () => {
  return (
    <svg
      className="size-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
    >
      <path d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z"></path>
    </svg>
  );
};

const CrossIcon = () => {
  return (
    <svg
      className="size-8 fill-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
    >
      <path d="m20.1211 18 3.4395-3.4395c.5859-.5854.5859-1.5356 0-2.1211-.5859-.5859-1.5352-.5859-2.1211 0l-3.4395 3.4395-3.4395-3.4395c-.5859-.5859-1.5352-.5859-2.1211 0-.5859.5854-.5859 1.5356 0 2.1211l3.4395 3.4395-3.4395 3.4395c-.5859.5854-.5859 1.5356 0 2.1211.293.293.6768.4395 1.0605.4395s.7676-.1465 1.0605-.4395l3.4395-3.4395 3.4395 3.4395c.293.293.6768.4395 1.0605.4395s.7676-.1465 1.0605-.4395c.5859-.5854.5859-1.5356 0-2.1211l-3.4395-3.4395z"></path>
    </svg>
  );
};

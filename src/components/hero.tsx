'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log(latest);
  });
  return (
    <div className="bg-gray-10 flex h-screen w-full flex-col" ref={ref}>
      <section className="relative isolate w-full">
        <div className="mx-auto flex h-screen w-full max-w-7xl flex-col justify-end border-x border-neutral-950/40 px-8 py-18 selection:bg-neutral-800">
          <div className="flex h-fit w-fit flex-col items-start justify-end gap-4 rounded-4xl border border-neutral-950/10 bg-white/5 p-4 backdrop-blur-lg">
            <span className="mb-2 rounded-full bg-neutral-300/80 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-900 select-none">
              + Copy
            </span>
            <h1 className="mb-0.5 max-w-3xl bg-linear-to-bl from-neutral-950 to-neutral-800 bg-clip-text text-2xl font-bold tracking-tighter text-transparent selection:text-neutral-200 md:text-5xl">
              Discover, Collect, and Sell Extraordinary Digital Collectibles
            </h1>
            <p className="max-w-xl text-base text-neutral-900 selection:text-neutral-100">
              The leading marketplace for unique crypto collectibles and
              non-fungible tokens (NFTs). Start your collection today.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2 font-medium text-neutral-100 shadow-[inset_-1px_1px_1px_0_rgba(200,200,200,0.4)] transition hover:bg-neutral-950">
                Explore
              </button>
              <button className="rounded-full border border-neutral-200/10 bg-neutral-100/40 px-5 py-2 font-semibold text-neutral-900 transition hover:bg-neutral-100">
                Create
              </button>
            </div>
          </div>
        </div>
        <Image
          src="/background.jpg"
          alt="Hero bg img"
          fill
          loading="eager"
          draggable={false}
          className="absolute inset-0 -z-1 object-cover select-none"
          priority
        />

        {/* <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)',
          }}
        ></div> */}
      </section>
      <section className="relative isolate w-full">
        <div className="mx-auto flex h-screen w-full max-w-7xl flex-col justify-end border-x border-neutral-950/40 px-8 py-18 selection:bg-neutral-800">
          <div className="flex h-fit w-fit flex-col items-start justify-end gap-4 rounded-4xl border border-neutral-950/10 bg-white/5 p-4 backdrop-blur-lg">
            <span className="mb-2 rounded-full bg-neutral-300/80 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-900 select-none">
              + Copy
            </span>
            <h1 className="mb-0.5 max-w-3xl bg-linear-to-bl from-neutral-950 to-neutral-800 bg-clip-text text-2xl font-bold tracking-tighter text-transparent selection:text-neutral-200 md:text-5xl">
              Discover, Collect, and Sell Extraordinary Digital Collectibles
            </h1>
            <p className="max-w-xl text-base text-neutral-900 selection:text-neutral-100">
              The leading marketplace for unique crypto collectibles and
              non-fungible tokens (NFTs). Start your collection today.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2 font-medium text-neutral-100 shadow-[inset_-1px_1px_1px_0_rgba(200,200,200,0.4)] transition hover:bg-neutral-950">
                Explore
              </button>
              <button className="rounded-full border border-neutral-200/10 bg-neutral-100/40 px-5 py-2 font-semibold text-neutral-900 transition hover:bg-neutral-100">
                Create
              </button>
            </div>
          </div>
        </div>

        {/* <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)',
          }}
        ></div> */}
      </section>
      <section className="relative isolate w-full">
        <div className="mx-auto flex h-screen w-full max-w-7xl flex-col justify-end border-x border-neutral-950/40 px-8 py-16 selection:bg-neutral-800">
          <div className="flex h-fit w-fit flex-col items-start justify-end gap-4 rounded-4xl border border-neutral-950/10 bg-white/5 p-4 backdrop-blur-lg">
            <span className="mb-2 rounded-full bg-neutral-300/80 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-900 select-none">
              + Copy
            </span>
            <h1 className="mb-0.5 max-w-3xl bg-linear-to-bl from-neutral-950 to-neutral-800 bg-clip-text text-2xl font-bold tracking-tighter text-transparent selection:text-neutral-200 md:text-5xl">
              Discover, Collect, and Sell Extraordinary Digital Collectibles
            </h1>
            <p className="max-w-xl text-base text-neutral-900 selection:text-neutral-100">
              The leading marketplace for unique crypto collectibles and
              non-fungible tokens (NFTs). Start your collection today.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2 font-medium text-neutral-100 shadow-[inset_-1px_1px_1px_0_rgba(200,200,200,0.4)] transition hover:bg-neutral-950">
                Explore
              </button>
              <button className="rounded-full border border-neutral-200/10 bg-neutral-100/40 px-5 py-2 font-semibold text-neutral-900 transition hover:bg-neutral-100">
                Create
              </button>
            </div>
          </div>
        </div>

        {/* <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)',
          }}
        ></div> */}
      </section>
    </div>
  );
};

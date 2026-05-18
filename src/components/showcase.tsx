'use client';

import React, { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { BookOpenIcon, LinkIcon } from '@phosphor-icons/react';

type ProjectItem = {
  label: string;
  image: string;
  description: string;
};

export const Showcase = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number>(0);

  const projects: ProjectItem[] = [
    {
      label: 'Skiper OSS 001',
      image: '/shoreel-4.png',
      description:
        'An open-source starter kit for modern SaaS web apps. Includes authentication, responsive UI, production-ready workflows, and beautiful design built with Next.js and Tailwind. Perfect for developers wanting to bootstrap new projects fast and at scale. Features fully-typed APIs, role-based access, and easy-to-use onboarding flows. Battle-tested with best practices for deployment, CI/CD, and DX.',
    },
    {
      label: 'NeonSync Pro',
      image: '/shoreel-9.png',
      description:
        'Sync files in real time across devices securely. Built for teams who want ultra-fast and reliable sync, with deep integrations for developer tools. End-to-end encryption ensures data safety, and activity logs make it easy to audit changes. Integrates seamlessly with popular IDEs, cloud providers, and collaboration platforms.',
    },
    {
      label: 'PixelForge Studio',
      image: '/shoreel-4.png',
      description:
        'A powerful online graphic editor and asset manager for teams collaborating on marketing and design materials. Offers robust version control, sharing, and export options for professional workflows. Includes template libraries, live commenting, and cross-team permissions. Boost productivity with AI-powered design suggestions.',
    },
    {
      label: 'TaskFlow Sonet',
      image: '/shoreel-8.png',
      description:
        'Intelligent task automation and workflow orchestrator. Connects your apps and coordinates tasks efficiently with a low-code approach. Visual drag-and-drop builder lets you design flows in minutes. Built-in analytics and alerts keep your operations running smoothly and scaling effortlessly.',
    },
    {
      label: 'CloudVibe Bruh',
      image: '/shoreel-5.png',
      description:
        'Personal cloud music server and visualizer. Stream, manage, and share your beats from anywhere, with friends or privately. Beautiful, responsive UI and real-time visualizations for the audiophile in you. Supports playlists, remote control, and integration with popular streaming APIs.',
    },
  ];

  const expanded = expandedIdx !== null ? projects[expandedIdx] : null;

  return (
    <div
      className={cn(
        'font-inter relative h-screen w-full bg-gray-100 px-6 py-12 selection:bg-neutral-900 selection:text-neutral-200',
        'dark:bg-neutral-900 dark:selection:bg-neutral-200 dark:selection:text-neutral-900',
      )}
    >
      {/* 
        FIX 1: Removed mode="wait" — layout animations need both elements in the DOM
        simultaneously to interpolate. mode="wait" kills shared element transitions.
      */}
      <AnimatePresence>
        {expanded !== null && expandedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 overflow-y-auto bg-gray-100 px-6 py-12 dark:bg-neutral-900 [&::-webkit-scrollbar]:hidden"
            onClick={() => setExpandedIdx(null)}
          >
            {/*
              FIX 2: layoutId now uses expandedIdx (frozen at click time), not hovered.
              hovered can drift after you click — expandedIdx is stable for the duration
              of the animation.
            */}
            <motion.div
              layoutId={`card-${expandedIdx}`}
              className={cn(
                'mx-auto flex w-full max-w-xl flex-col gap-4  bg-gray-100 py-12',
                'dark:bg-neutral-900',
              )}
            >
              <motion.h1
                layoutId={`card-title-${expandedIdx}`}
                className="mb-8 text-7xl font-medium tracking-tighter text-neutral-900 dark:text-neutral-100"
              >
                {expanded.label}
              </motion.h1>

              {/* FIX 3: layoutId uses expandedIdx, not hovered */}
              <motion.div
                layoutId={`card-image-${expandedIdx}`}
                className="relative my-2 aspect-video overflow-hidden rounded-4xl"
              >
                <Image
                  src={expanded.image}
                  alt={expanded.label}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="flex flex-col items-start gap-2">
                <h2 className="relative w-full py-1 text-xl font-medium text-neutral-700/90 dark:text-neutral-200">
                  <span className="relative z-2 bg-gray-100 pr-2 dark:bg-neutral-900">
                    Billion dollar Saas
                  </span>
                  <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-neutral-700/90 dark:bg-neutral-200" />
                </h2>
                <p className="text-sm/relaxed tracking-wide text-neutral-400">
                  {expanded.description}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-4 select-none">
                <Button
                  className="bg-neutral-200 font-medium text-neutral-950"
                  label="Live Preview"
                  Icon={
                    <LinkIcon weight="bold" size={16} color="currentColor" />
                  }
                />
                <Button
                  className="bg-neutral-950 font-medium text-neutral-200"
                  label="See source code"
                  Icon={
                    <BookOpenIcon
                      weight="bold"
                      size={16}
                      color="currentColor"
                    />
                  }
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*
        FIX 4: Removed layoutId="card" from this wrapper — it had no counterpart
        anywhere so Framer was doing useless layout tracking that polluted child animations.
      */}
      <div className="mx-auto flex h-full w-full items-stretch justify-between">
        {/* Image section */}
        <div className="w-80">
          {/*
            THE REAL FIX: When a project is expanded, its layoutId exists in the overlay.
            If the thumbnail also renders that same layoutId simultaneously, Framer has
            two elements with the same id in the DOM — it breaks.
            Solution: hide the thumbnail entirely while any project is expanded.
            Framer then has a clean single instance to animate from/to.
          */}
          {expandedIdx === null && (
            <motion.div
              key={hovered}
              layoutId={`card-image-${hovered}`}
              className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-900"
            >
              <Image
                src={projects[hovered].image}
                alt={projects[hovered].label}
                fill
                draggable={false}
                loading="eager"
                priority
                className="object-cover"
              />
            </motion.div>
          )}
        </div>

        {/* List of Projects */}
        <div className="flex items-end px-26 py-18 select-none">
          <div className="flex flex-col items-start overflow-hidden px-10">
            <div className="relative w-full py-1 text-sm/snug font-medium text-neutral-700/90 uppercase dark:text-neutral-500">
              <span className="relative z-2 bg-gray-100 pr-2 dark:bg-neutral-900">
                My projects
              </span>
              <div className="absolute top-1/2 h-px w-80 -translate-y-1/2 bg-neutral-700/90 dark:bg-neutral-500" />
            </div>

            {projects.map((item, idx) => (
              <motion.div
                layoutId={`card-title-${idx}`}
                onMouseEnter={() => setHovered(idx)}
                onClick={() => {
                  // FIX 6: Sync hovered to clicked index before expanding
                  // so the thumbnail layoutId matches the expanded layoutId at animation start.
                  setHovered(idx);
                  setExpandedIdx(idx);
                }}
                key={idx}
                className="group relative cursor-pointer py-1 text-4xl tracking-tighter text-neutral-600 transition-all duration-150 ease-out hover:text-neutral-800 dark:text-neutral-400 hover:dark:text-neutral-200"
              >
                {item.label}
                <div className="absolute top-1/2 -right-10 -translate-y-1/2 rounded-full bg-neutral-800 px-1.5 py-0.5 opacity-0 transition-all duration-150 ease-out group-hover:-right-4 group-hover:px-0.5 group-hover:opacity-100 dark:bg-neutral-200" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = ({
  label,
  Icon,
  className,
}: {
  label: string;
  className: string;
  Icon: ReactNode;
}) => {
  return (
    <button
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-sm transition-transform duration-150 ease-out will-change-transform hover:scale-101 active:scale-99',
        className,
      )}
    >
      {label}
      {Icon}
    </button>
  );
};

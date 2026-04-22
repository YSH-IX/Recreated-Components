'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

// Shared classnames for keyboard keys
const BASE_OUTER_CLASS =
  'cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none';

const BASE_INNER_CLASS =
  'flex h-12 w-12 flex-col items-center justify-center rounded-md bg-[#0a090d]';

const GAP2_INNER_CLASS = cn(BASE_INNER_CLASS, 'gap-2');
const GAP1_INNER_CLASS = cn(BASE_INNER_CLASS, 'gap-1');

const W18_H12_BOTTOM_LEFT =
  'flex h-12 w-18 items-end justify-start rounded-md bg-[#0a090d] pb-1 pl-2 shadow-[inset_0_-0.5px_2px_0_rgb(13,13,15),inset_-0.5px_0_2px_0_rgb(13,13,15)]';

const W18_H12_TAB =
  'flex h-12 w-18 flex-col items-start justify-end rounded-md bg-[#0a090d] pb-1 pl-1.5';

const W_FULL_H12_BOTTOM_LEFT =
  'flex h-12 w-full flex-col items-start justify-end rounded-md bg-[#0a090d] pb-1 pl-1.5';

const W_FULL_H12_BOTTOM_RIGHT =
  'flex h-12 w-full flex-col items-end justify-end rounded-md bg-[#0a090d] pr-1.5 pb-1';

const W22_H12_BOTTOM_LEFT =
  'flex h-12 w-22 flex-col items-start justify-end rounded-md bg-[#0a090d] pb-1 pl-1.5';

const H12_W20_BOTTOM_RIGHT =
  'flex h-12 w-20 flex-col items-end justify-end rounded-md bg-[#0a090d] pr-1.5 pb-1';

const H12_W12_NO_GAP =
  'flex h-12 w-12 flex-col items-center justify-center rounded-md bg-[#0a090d]';

const H12_W12_GAP1 =
  'flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]';

const CUSTOM_CLASSES = {
  'return': W_FULL_H12_BOTTOM_RIGHT,
  'shift-left': W_FULL_H12_BOTTOM_LEFT,
  'shift-right': W_FULL_H12_BOTTOM_RIGHT,
  'space': '', // handled in content
  'command-left': '', // handled in content
  'command-right': '', // handled in content
  'option-left': '', // handled in content
  'option-right': '', // handled in content
  'fn': '', // handled in content
  'control': '', // handled in content
  'fingerprint': '', // handled in content
  'navigation': '', // handled in content
};

const KEY_OUTER_CLASSES: Record<string, string> = {
  // Overwrite only keys which are different
  'esc': BASE_OUTER_CLASS,
  // Regular (default) key
  'default': BASE_OUTER_CLASS,
  'return': cn('w-full', BASE_OUTER_CLASS),
  'shift-left': cn('w-full', BASE_OUTER_CLASS),
  'shift-right': cn('w-full', BASE_OUTER_CLASS),
  'delete': BASE_OUTER_CLASS,
  'tab': BASE_OUTER_CLASS,
  'caps-lock': BASE_OUTER_CLASS,
  'space': cn('w-full', BASE_OUTER_CLASS),
  'command-left': cn('animate-scale-up', BASE_OUTER_CLASS),
  // Custom handled keys below
  'fn': BASE_OUTER_CLASS,
  'control': BASE_OUTER_CLASS,
  'option-left': BASE_OUTER_CLASS,
  'option-right': BASE_OUTER_CLASS,
  'command-right': BASE_OUTER_CLASS,
  'fingerprint': BASE_OUTER_CLASS,
};

const KEY_INNER_CLASSES: Record<string, string> = {
  'esc': W18_H12_BOTTOM_LEFT,
  'tab': W18_H12_TAB,
  'return': W_FULL_H12_BOTTOM_RIGHT,
  'shift-left': W_FULL_H12_BOTTOM_LEFT,
  'shift-right': W_FULL_H12_BOTTOM_RIGHT,
  'delete': H12_W20_BOTTOM_RIGHT,
  'caps-lock': W22_H12_BOTTOM_LEFT,
  // main 1u key
  'main-gap2': GAP2_INNER_CLASS,
  'main-gap1': GAP1_INNER_CLASS,
  'main': H12_W12_NO_GAP,
};

const keyboardRows = [
  // Row 1
  [
    {
      key: 'esc',
      content: 'esc',
      outerClass: KEY_OUTER_CLASSES['esc'],
      innerClass: KEY_INNER_CLASSES['esc'],
    },
    // F1–F12
    ...Array.from({ length: 12 }, (_, i) => {
      const k = `f${i + 1}`;
      const icons = [
        // SVGs as previously
        // F1
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M12 5l0 .01"></path>
            <path d="M17 7l0 .01"></path>
            <path d="M19 12l0 .01"></path>
            <path d="M17 17l0 .01"></path>
            <path d="M12 19l0 .01"></path>
            <path d="M7 17l0 .01"></path>
            <path d="M5 12l0 .01"></path>
            <path d="M7 7l0 .01"></path>
          </svg>
        </>,
        // F2
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M12 5l0 -2"></path>
            <path d="M17 7l1.4 -1.4"></path>
            <path d="M19 12l2 0"></path>
            <path d="M17 17l1.4 1.4"></path>
            <path d="M12 19l0 2"></path>
            <path d="M7 17l-1.4 1.4"></path>
            <path d="M6 12l-2 0"></path>
            <path d="M7 7l-1.4 -1.4"></path>
          </svg>
        </>,
        // F3
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
            <path d="M3 10h18"></path>
            <path d="M10 3v18"></path>
          </svg>
        </>,
        // F4
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </>,
        // F5
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
            <path d="M5 10a7 7 0 0 0 14 0"></path>
            <path d="M8 21l8 0"></path>
            <path d="M12 17l0 4"></path>
          </svg>
        </>,
        // F6
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
          </svg>
        </>,
        // F7
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M21 5v14l-8 -7z"></path>
            <path d="M10 5v14l-8 -7z"></path>
          </svg>
        </>,
        // F8
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M4 5v14l12 -7z"></path>
            <path d="M20 5l0 14"></path>
          </svg>
        </>,
        // F9
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M3 5v14l8 -7z"></path>
            <path d="M14 5v14l8 -7z"></path>
          </svg>
        </>,
        // F10
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
            <path d="M16 10l4 4m0 -4l-4 4"></path>
          </svg>
        </>,
        // F11
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M15 8a5 5 0 0 1 0 8"></path>
            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
          </svg>
        </>,
        // F12
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[12px] w-[12px]">
            <path d="M15 8a5 5 0 0 1 0 8"></path>
            <path d="M17.7 5a9 9 0 0 1 0 14"></path>
            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
          </svg>
        </>,
      ];
      return {
        key: k,
        content: <>
            {icons[i]} F{k.slice(1)}
          </>,
        outerClass: KEY_OUTER_CLASSES['default'],
        innerClass: GAP2_INNER_CLASS,
      };
    }),
    {
      key: 'fingerprint',
      content: (
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#0a090d] text-sm">
          <div className="relative h-1 w-1 rounded-full border-2 border-transparent bg-linear-to-b from-neutral-400/20 from-20% via-transparent to-neutral-400/20 to-80% bg-clip-border p-3.5">
            <div className="absolute top-1/2 left-1/2 h-9/10 w-9/10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#010101]"></div>
          </div>
        </div>
      ),
      outerClass: KEY_OUTER_CLASSES['fingerprint'],
      innerClass: '',
      isCustom: true,
    },
  ],
  // Row 2
  [
    {
      key: '`~',
      content: (
        <>
          <span>~</span>
          <span>`</span>
        </>
      ),
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: GAP2_INNER_CLASS,
    },
    ...['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'].map(
      (label, idx) => ({
        key: `num-${idx + 1}`,
        content: (
          <>
            <span>{label}</span>
            <span>
              {idx < 10
                ? (idx + 1) % 10
                : label === '_'
                  ? '-'
                  : label === '+'
                    ? '='
                    : ''}
            </span>
          </>
        ),
        outerClass: KEY_OUTER_CLASSES['default'],
        innerClass: GAP1_INNER_CLASS,
      }),
    ),
    {
      key: 'delete',
      content: 'delete',
      outerClass: KEY_OUTER_CLASSES['delete'],
      innerClass: H12_W20_BOTTOM_RIGHT,
    },
  ],
  // Row 3
  [
    {
      key: 'tab',
      content: 'tab',
      outerClass: KEY_OUTER_CLASSES['tab'],
      innerClass: W18_H12_TAB,
    },
    ...['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((ch) => ({
      key: ch,
      content: ch,
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: GAP2_INNER_CLASS,
    })),
    {
      key: '[{',
      content: (
        <>
          <span>{'{'}</span>
          <span>[</span>
        </>
      ),
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: GAP1_INNER_CLASS,
    },
    {
      key: ']}',
      content: (
        <>
          <span>{'}'}</span>
          <span>]</span>
        </>
      ),
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: GAP1_INNER_CLASS,
    },
    {
      key: '\\|',
      content: (
        <>
          <span>|</span>
          <span>\</span>
        </>
      ),
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: GAP1_INNER_CLASS,
    },
  ],
  // Row 4
  [
    {
      key: 'caps-lock',
      content: 'caps lock',
      outerClass: KEY_OUTER_CLASSES['caps-lock'],
      innerClass: W22_H12_BOTTOM_LEFT,
    },
    ...['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((ch) => ({
      key: ch,
      content: ch,
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: GAP2_INNER_CLASS,
    })),
    {
      key: ';:',
      content: (
        <>
          <span>:</span>
          <span>;</span>
        </>
      ),
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: H12_W12_NO_GAP,
    },
    {
      key: '\'"',
      content: (
        <>
          <span>"</span>
          <span>'</span>
        </>
      ),
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: H12_W12_NO_GAP,
    },
    {
      key: 'return',
      content: 'return',
      outerClass: KEY_OUTER_CLASSES['return'],
      innerClass: W_FULL_H12_BOTTOM_RIGHT,
    },
  ],
  // Row 5
  [
    {
      key: 'shift-left',
      content: 'shift',
      outerClass: KEY_OUTER_CLASSES['shift-left'],
      innerClass: W_FULL_H12_BOTTOM_LEFT,
    },
    ...['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((ch) => ({
      key: ch,
      content: ch,
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: GAP2_INNER_CLASS,
    })),
    {
      key: '<,',
      content: (
        <>
          <span>&lt;</span>
          <span>,</span>
        </>
      ),
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: H12_W12_NO_GAP,
    },
    {
      key: '>,',
      content: (
        <>
          <span>&gt;</span>
          <span>,</span>
        </>
      ),
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: H12_W12_NO_GAP,
    },
    {
      key: '?,',
      content: (
        <>
          <span>?</span>
          <span>,</span>
        </>
      ),
      outerClass: KEY_OUTER_CLASSES['default'],
      innerClass: H12_W12_NO_GAP,
    },
    {
      key: 'shift-right',
      content: 'shift',
      outerClass: KEY_OUTER_CLASSES['shift-right'],
      innerClass: W_FULL_H12_BOTTOM_RIGHT,
    },
  ],
  // Row 6 (spacebar + fn/ctrl/option/command navigation)
  [
    // fn key
    {
      key: 'fn',
      content: (
        <div className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-[#0a090d] pb-1 pl-1">
          <div className="flex w-full items-center justify-end px-1.5 pt-1 text-[10px]">
            fn
          </div>
          <span className="flex w-full items-center justify-start pl-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[14px] w-[14px]"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M3.6 9h16.8"></path>
              <path d="M3.6 15h16.8"></path>
              <path d="M11.5 3a17 17 0 0 0 0 18"></path>
              <path d="M12.5 3a17 17 0 0 1 0 18"></path>
            </svg>
          </span>
        </div>
      ),
      outerClass: KEY_OUTER_CLASSES['fn'],
      innerClass: '',
      isCustom: true,
    },
    // control key
    {
      key: 'control',
      content: (
        <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
          <span className="flex w-full items-center justify-end px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[12px] w-[12px]"
            >
              <path d="M6 15l6 -6l6 6"></path>
            </svg>
          </span>
          <span>control</span>
        </div>
      ),
      outerClass: KEY_OUTER_CLASSES['control'],
      innerClass: '',
      isCustom: true,
    },
    // option key (left)
    {
      key: 'option-left',
      content: (
        <div className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-[#0a090d]">
          <span className="flex w-full items-center justify-end px-2">
            <svg
              fill="none"
              version="1.1"
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-[10px] w-[10px]"
            >
              <rect
                stroke="currentColor"
                strokeWidth="2"
                x="18"
                y="5"
                width="10"
                height="2"
              ></rect>
              <polygon
                stroke="currentColor"
                strokeWidth="2"
                points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
              ></polygon>
              <rect
                id="_Transparent_Rectangle_"
                className="st0"
                width="32"
                height="32"
                stroke="none"
              ></rect>
            </svg>
          </span>
          <span>option</span>
        </div>
      ),
      outerClass: KEY_OUTER_CLASSES['option-left'],
      innerClass: '',
      isCustom: true,
    },
    // command key (left)
    {
      key: 'command-left',
      content: (
        <div className="animate-scale-up flex h-12 w-fit flex-col items-center justify-center gap-1.5 rounded-md bg-[#0a090d] p-2">
          <span className="flex w-full items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[12px] w-[12px]"
            >
              <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path>
            </svg>
          </span>
          <span>command</span>
        </div>
      ),
      outerClass: KEY_OUTER_CLASSES['command-left'],
      innerClass: '',
      isCustom: true,
    },
    // space
    {
      key: 'space',
      content: (
        <div className="flex h-12 w-full flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]"></div>
      ),
      outerClass: KEY_OUTER_CLASSES['space'],
      innerClass: '',
      isCustom: true,
    },
    // command key (right)
    {
      key: 'command-right',
      content: (
        <div className="flex h-12 w-fit flex-col items-center justify-center gap-1.5 rounded-md bg-[#0a090d] px-2">
          <span className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[12px] w-[12px]"
            >
              <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path>
            </svg>
          </span>
          <span>command</span>
        </div>
      ),
      outerClass: KEY_OUTER_CLASSES['command-right'],
      innerClass: '',
      isCustom: true,
    },
    // option key (right)
    {
      key: 'option-right',
      content: (
        <div className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-[#0a090d]">
          <span className="w-full px-2">
            <svg
              fill="none"
              version="1.1"
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-[10px] w-[10px]"
            >
              <rect
                stroke="currentColor"
                strokeWidth="2"
                x="18"
                y="5"
                width="10"
                height="2"
              ></rect>
              <polygon
                stroke="currentColor"
                strokeWidth="2"
                points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
              ></polygon>
              <rect
                id="_Transparent_Rectangle_"
                className="st0"
                width="32"
                height="32"
                stroke="none"
              ></rect>
            </svg>
          </span>
          <span>option</span>
        </div>
      ),
      outerClass: KEY_OUTER_CLASSES['option-right'],
      innerClass: '',
      isCustom: true,
    },
    // Navigation block
    {
      key: 'navigation',
      content: (
        <div className="flex h-12 w-fit flex-col items-end justify-center gap-0.5">
          {/* UPPER ROW */}
          <div className="flex w-full items-center justify-center">
            <div
              className={cn(
                BASE_OUTER_CLASS,
              )}
            >
              <div className="flex h-auto w-12 items-center justify-center gap-1 rounded-md bg-[#0a090d] py-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[12px] w-[12px]"
                >
                  <path
                    d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          {/* BOTTOM ROW ARROWS */}
          <div className="flex items-center justify-center gap-0.5">
            {/* Left button */}
            <div
              className={cn(
                BASE_OUTER_CLASS,
              )}
            >
              <div className="flex h-auto w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d] py-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[12px] w-[12px]"
                >
                  <path
                    d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>
              </div>
            </div>
            {/* Down Button */}
            <div
              className={cn(
                BASE_OUTER_CLASS,
              )}
            >
              <div className="flex h-auto w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d] py-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[12px] w-[12px]"
                >
                  <path
                    d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>
              </div>
            </div>
            {/* Right Button */}
            <div
              className={cn(
                BASE_OUTER_CLASS,
              )}
            >
              <div className="flex h-auto w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d] py-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[12px] w-[12px]"
                >
                  <path
                    d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 -.027l-.108 -.032l-.053 -.01l-.06 -.01l-.057 -.004l-.059 -.002l-.059 .002l-.058 .005l-.06 .009l-.052 .01l-.108 .032l-.067 .027l-.132 .07l-.09 .065l-.081 .073l-.083 .094l-.054 .077l-.054 .096l-.017 .036l-.027 .067l-.032 .108l-.01 .053l-.01 .06l-.004 .057l-.002 -12.059z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ),
      outerClass: KEY_OUTER_CLASSES['navigation'],
      innerClass: '',
      isCustom: true,
    },
  ],
];

export const Keyboard = () => {
  const [activeKeys, setActiveKeys] = useState(new Set());
  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      setActiveKeys((prev) => new Set(prev).add(e.code));
    };
    const onUp = (e: KeyboardEvent) => {
      setActiveKeys((prev) => {
        const updated = new Set(prev);
        updated.delete(e.code);
        return updated;
      });
    };
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);

    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, []);

  return (
    <>
      {/* This is the Keyboard */}
      <div
        className={cn(
          'rounded-2xl border border-neutral-200 bg-neutral-900 p-2 text-xs',
        )}
      >
        {keyboardRows.map((row, rowIdx) => (
          <div
            key={`row-${rowIdx}`}
            className={cn(
              'mb-1 flex h-fit w-full items-center justify-between gap-1',
            )}
          >
            {row.map((keyConfig, keyIdx) => {
              // custom content already includes inner block
              if ('isCustom' in keyConfig && keyConfig.isCustom) {
         
                return (
                  <React.Fragment key={keyConfig.key || keyIdx}>
                    <div className={cn(keyConfig.outerClass)}>
                      {keyConfig.content}
                    </div>
                  </React.Fragment>
                );
              }
              return (
                <div
                  key={keyConfig.key || keyIdx}
                  className={cn(keyConfig.outerClass)}
                >
                  <div className={cn(keyConfig.innerClass)}>
                    {keyConfig.content}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

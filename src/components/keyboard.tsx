'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const Keyboard = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      setPressedKeys((prev) => new Set(prev).add(e.code));
    };
    const onUp = (e: KeyboardEvent) => {
      setPressedKeys((prev) => {
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

  const base = 'transition-shadow duration-75';
  const pressed = 'scale-96 inset-shadow-gray-200 bg-gray-200 ';

  return (
    <div className="font-inter flex min-h-screen bg-neutral-800 w-full items-center justify-center">
      <div className="text-xxs flex flex-col gap-1.5 rounded-2xl border border-neutral-200 bg-neutral-100 p-2 font-medium text-neutral-600 shadow-xl shafow-neutral-500">
        {/* ── Row 1 ── */}
        <div className="flex h-fit w-fit items-center gap-1.5">
          <div
            className={cn(
              'key-shadow flex h-12 w-20 items-end justify-start rounded-md bg-gray-100 pb-1 pl-2 select-none',
              base,
              pressedKeys.has('Escape') && pressed,
            )}
          >
            esc
          </div>

          {[
            {
              label: 'F1',
              icon: (
                <>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M12 5l0 .01" />
                  <path d="M17 7l0 .01" />
                  <path d="M19 12l0 .01" />
                  <path d="M17 17l0 .01" />
                  <path d="M12 19l0 .01" />
                  <path d="M7 17l0 .01" />
                  <path d="M5 12l0 .01" />
                  <path d="M7 7l0 .01" />
                </>
              ),
            },
            {
              label: 'F2',
              icon: (
                <>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M12 5l0 -2" />
                  <path d="M17 7l1.4 -1.4" />
                  <path d="M19 12l2 0" />
                  <path d="M17 17l1.4 1.4" />
                  <path d="M12 19l0 2" />
                  <path d="M7 17l-1.4 1.4" />
                  <path d="M6 12l-2 0" />
                  <path d="M7 7l-1.4 -1.4" />
                </>
              ),
            },
            {
              label: 'F3',
              icon: (
                <>
                  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                  <path d="M3 10h18" />
                  <path d="M10 3v18" />
                </>
              ),
            },
            {
              label: 'F4',
              icon: (
                <>
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </>
              ),
            },
            {
              label: 'F5',
              icon: (
                <>
                  <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
                  <path d="M5 10a7 7 0 0 0 14 0" />
                  <path d="M8 21l8 0" />
                  <path d="M12 17l0 4" />
                </>
              ),
            },
            {
              label: 'F6',
              icon: (
                <>
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </>
              ),
            },
            {
              label: 'F7',
              icon: (
                <>
                  <path d="M21 5v14l-8 -7z" />
                  <path d="M10 5v14l-8 -7z" />
                </>
              ),
            },
            {
              label: 'F8',
              icon: (
                <>
                  <path d="M4 5v14l12 -7z" />
                  <path d="M20 5l0 14" />
                </>
              ),
            },
            {
              label: 'F9',
              icon: (
                <>
                  <path d="M3 5v14l8 -7z" />
                  <path d="M14 5v14l8 -7z" />
                </>
              ),
            },
            {
              label: 'F10',
              icon: (
                <>
                  <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                  <path d="M16 10l4 4m0 -4l-4 4" />
                </>
              ),
            },
            {
              label: 'F11',
              icon: (
                <>
                  <path d="M15 8a5 5 0 0 1 0 8" />
                  <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                </>
              ),
            },
            {
              label: 'F12',
              icon: (
                <>
                  <path d="M15 8a5 5 0 0 1 0 8" />
                  <path d="M17.7 5a9 9 0 0 1 0 14" />
                  <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                </>
              ),
            },
          ].map((key) => (
            <div
              key={key.label}
              className={cn(
                'key-shadow flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-gray-100 select-none',
                base,
                pressedKeys.has(key.label) && pressed,
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                {key.icon}
              </svg>
              {key.label}
            </div>
          ))}

          {/* Touch ID */}
          <div className="key-shadow flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
            <div className="relative h-1 w-1 rounded-full border border-transparent bg-linear-to-b from-neutral-400/40 via-gray-100 to-neutral-400/40 bg-clip-border p-4">
              <div className="absolute top-1/2 left-1/2 h-9/10 w-9/10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-100" />
            </div>
          </div>
        </div>

        {/* ── Row 2 — numbers ── */}
        <div className="flex h-fit w-fit items-center gap-1.5">
          {[
            { top: '~', bottom: '`', code: 'Backquote' },
            { top: '!', bottom: '1', code: 'Digit1' },
            { top: '@', bottom: '2', code: 'Digit2' },
            { top: '#', bottom: '3', code: 'Digit3' },
            { top: '$', bottom: '4', code: 'Digit4' },
            { top: '%', bottom: '5', code: 'Digit5' },
            { top: '^', bottom: '6', code: 'Digit6' },
            { top: '&', bottom: '7', code: 'Digit7' },
            { top: '*', bottom: '8', code: 'Digit8' },
            { top: '(', bottom: '9', code: 'Digit9' },
            { top: ')', bottom: '0', code: 'Digit0' },
            { top: '_', bottom: '-', code: 'Minus' },
            { top: '+', bottom: '=', code: 'Equal' },
          ].map((item) => (
            <div
              key={item.code}
              className={cn(
                'key-shadow flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-gray-100 select-none',
                base,
                pressedKeys.has(item.code) && pressed,
              )}
            >
              <span>{item.top}</span>
              <span>{item.bottom}</span>
            </div>
          ))}
          <div
            className={cn(
              'key-shadow flex h-12 w-20 flex-col items-end justify-end rounded-md bg-gray-100 pr-1.5 pb-1 select-none',
              base,
              pressedKeys.has('Backspace') && pressed,
            )}
          >
            delete
          </div>
        </div>

        {/* ── Row 3 — QWERTY ── */}
        <div className="flex h-fit w-fit items-center gap-1.5">
          <div
            className={cn(
              'key-shadow flex h-12 w-20 flex-col items-start justify-end rounded-md bg-gray-100 pb-1 pl-1.5 select-none',
              base,
              pressedKeys.has('Tab') && pressed,
            )}
          >
            tab
          </div>
          {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((c) => (
            <div
              key={c}
              className={cn(
                'key-shadow flex h-12 w-12 flex-col items-center justify-center rounded-md bg-gray-100 select-none',
                base,
                pressedKeys.has(`Key${c}`) && pressed,
              )}
            >
              {c}
            </div>
          ))}
          <div
            className={cn(
              'key-shadow flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('BracketLeft') && pressed,
            )}
          >
            <span>&#123;</span>
            <span>[</span>
          </div>
          <div
            className={cn(
              'key-shadow flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('BracketRight') && pressed,
            )}
          >
            <span>&#125;</span>
            <span>]</span>
          </div>
          <div
            className={cn(
              'key-shadow flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('Backslash') && pressed,
            )}
          >
            <span>|</span>
            <span>\</span>
          </div>
        </div>

        {/* ── Row 4 — ASDF ── */}
        <div className="flex h-fit w-fit shrink-0 items-center gap-1.5">
          <div
            className={cn(
              'key-shadow flex h-12 w-22 flex-col items-start justify-end rounded-md bg-gray-100 pb-1 pl-1.5 select-none',
              base,
              pressedKeys.has('CapsLock') && pressed,
            )}
          >
            caps lock
          </div>
          {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((c) => (
            <div
              key={c}
              className={cn(
                'key-shadow flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-gray-100 select-none',
                base,
                pressedKeys.has(`Key${c}`) && pressed,
              )}
            >
              {c}
            </div>
          ))}
          <div
            className={cn(
              'key-shadow flex h-12 w-12 flex-col items-center justify-center rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('Semicolon') && pressed,
            )}
          >
            <span>:</span>
            <span>;</span>
          </div>
          <div
            className={cn(
              'key-shadow flex h-12 w-12 flex-col items-center justify-center rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('Quote') && pressed,
            )}
          >
            <span>"</span>
            <span>'</span>
          </div>
          <div
            className={cn(
              'key-shadow flex h-12 w-23 flex-col items-end justify-end rounded-md bg-gray-100 pr-1.5 pb-1 select-none',
              base,
              pressedKeys.has('Enter') && pressed,
            )}
          >
            return
          </div>
        </div>

        {/* ── Row 5 — ZXCV ── */}
        <div className="flex h-fit w-fit shrink-0 items-center gap-1.5">
          <div
            className={cn(
              'key-shadow flex h-12 w-29 flex-col items-start justify-end rounded-md bg-gray-100 pb-1 pl-1.5 select-none',
              base,
              pressedKeys.has('ShiftLeft') && pressed,
            )}
          >
            shift
          </div>
          {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((c) => (
            <div
              key={c}
              className={cn(
                'key-shadow flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-gray-100 select-none',
                base,
                pressedKeys.has(`Key${c}`) && pressed,
              )}
            >
              {c}
            </div>
          ))}
          <div
            className={cn(
              'key-shadow flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('Comma') && pressed,
            )}
          >
            <span>&lt;</span>
            <span>,</span>
          </div>
          <div
            className={cn(
              'key-shadow flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('Period') && pressed,
            )}
          >
            <span>&gt;</span>
            <span>.</span>
          </div>
          <div
            className={cn(
              'key-shadow flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('Slash') && pressed,
            )}
          >
            <span>?</span>
            <span>/</span>
          </div>
          <div
            className={cn(
              'key-shadow flex h-12 w-29 flex-col items-end justify-end rounded-md bg-gray-100 pr-1.5 pb-1 select-none',
              base,
              pressedKeys.has('ShiftRight') && pressed,
            )}
          >
            shift
          </div>
        </div>

        {/* ── Row 6 — bottom ── */}
        <div className="text-xsm flex h-fit w-full shrink-0 items-center gap-1.5">
          {/* fn — no reliable e.code on Mac */}
          <div className="key-shadow flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 select-none">
            <div className="flex h-full w-full flex-col items-start justify-between p-1 pl-1.5">
              <span>fn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3a17 17 0 0 1 0 18" />
              </svg>
            </div>
          </div>

          {/* control */}
          <div
            className={cn(
              'key-shadow flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('ControlLeft') && pressed,
            )}
          >
            <div className="flex h-full w-full flex-col items-start justify-between p-1 pl-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M6 15l6 -6l6 6" />
              </svg>
              <span>control</span>
            </div>
          </div>

          {/* option left */}
          <div
            className={cn(
              'key-shadow flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('AltLeft') && pressed,
            )}
          >
            <div className="flex h-full w-full flex-col items-start justify-between p-1 pl-1.5">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-[12px] w-[12px]"
              >
                <rect
                  stroke="currentColor"
                  strokeWidth="2"
                  x="18"
                  y="5"
                  width="10"
                  height="2"
                />
                <polygon
                  stroke="currentColor"
                  strokeWidth="2"
                  points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25"
                />
              </svg>
              <span>option</span>
            </div>
          </div>

          {/* command left */}
          <div
            className={cn(
              'key-shadow flex h-12 w-13.5 items-center justify-center rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('MetaLeft') && pressed,
            )}
          >
            <div className="flex h-full w-full flex-col items-start justify-between p-1 pl-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
              </svg>
              <span>command</span>
            </div>
          </div>

          {/* spacebar */}
          <div
            className={cn(
              'key-shadow flex h-12 w-70 items-center justify-center rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('Space') && pressed,
            )}
          />

          {/* command right */}
          <div
            className={cn(
              'key-shadow flex h-12 w-13.5 items-center justify-center rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('MetaRight') && pressed,
            )}
          >
            <div className="flex h-full w-full flex-col items-start justify-between p-1 pl-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
              </svg>
              <span>command</span>
            </div>
          </div>

          {/* option right */}
          <div
            className={cn(
              'key-shadow flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 select-none',
              base,
              pressedKeys.has('AltRight') && pressed,
            )}
          >
            <div className="flex h-full w-full flex-col items-start justify-between p-1 pl-1.5">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-[12px] w-[12px]"
              >
                <rect
                  stroke="currentColor"
                  strokeWidth="2"
                  x="18"
                  y="5"
                  width="10"
                  height="2"
                />
                <polygon
                  stroke="currentColor"
                  strokeWidth="2"
                  points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25"
                />
              </svg>
              <span>option</span>
            </div>
          </div>

          {/* arrow cluster */}
          <div className="flex h-12 w-fit items-center gap-1.5">
            <div
              className={cn(
                'key-shadow flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 select-none',
                base,
                pressedKeys.has('ArrowLeft') && pressed,
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <div
                className={cn(
                  'key-shadow flex h-5.5 w-12 items-center justify-center rounded-md bg-gray-100 select-none',
                  base,
                  pressedKeys.has('ArrowUp') && pressed,
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
                  />
                </svg>
              </div>
              <div
                className={cn(
                  'key-shadow flex h-5.5 w-12 items-center justify-center rounded-md bg-gray-100 select-none',
                  base,
                  pressedKeys.has('ArrowDown') && pressed,
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
                  />
                </svg>
              </div>
            </div>
            <div
              className={cn(
                'key-shadow flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 select-none',
                base,
                pressedKeys.has('ArrowRight') && pressed,
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path
                  d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z"
                  fill="currentColor"
                  strokeWidth="0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

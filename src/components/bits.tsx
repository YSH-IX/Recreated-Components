'use client';

import { cn } from '@/lib/utils';
import { CheckIcon, CopySimpleIcon, XLogoIcon } from '@phosphor-icons/react';
import { useState } from 'react';

export const Bits = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const code = '@custom-variant dark (&:where(.dark, .dark *));';
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error('Failed to Copy !!', error);
    }
  };
  return (
    <div className="div-center min-h-screen w-full flex-col-reverse gap-8 bg-zinc-100">
      {/* Canvas */}
      <div
        className={cn(
          'div-center min-h-30 w-full max-w-sm flex-col gap-10 rounded-2xl bg-zinc-200',
          'shadow-[0_1px_1px_0_rgba(20,20,20,0.2),0_2px_4px_0_rgba(20,20,20,0.2)]',
        )}
      >
        <div
          className={cn(
            'w-fit rounded-full bg-neutral-400 p-4',
            'shadow-[inset_-8px_-26px_16px_0_#18181b,inset_0_0_6px_4px_#18181b,2px_2px_14px_2px_rgba(20,20,20,0.1)]',
          )}
        >
          <XLogoIcon
            size={20}
            weight="regular"
            color="currentColor"
            className="size-6 fill-zinc-100"
          />
        </div>
      </div>
      {/* Code Block */}
      <div
        className={cn(
          'div-center min-h-fit w-fit flex-col gap-10 rounded-2xl bg-zinc-200 p-6',
          'shadow-[0_1px_1px_0_rgba(20,20,20,0.2),0_2px_4px_0_rgba(20,20,20,0.2)]',
        )}
      >
        <div className="relative min-h-40 w-full max-w-2xl rounded-xl border border-neutral-400 bg-neutral-800 p-2 text-sm text-neutral-200">
          {code}
          <div className="absolute right-2 bottom-2 size-fit">
            <button
              className="relative flex cursor-pointer items-center gap-1 rounded-lg border border-neutral-700 bg-neutral-800 p-1.5 text-neutral-300 transition-all duration-200 ease-out will-change-transform active:scale-95"
              onClick={copy}
            >
              <span
                className={cn(
                  'absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-200 ease-out',
                  copied
                    ? 'scale-100 opacity-100 blur-none'
                    : 'scale-0 opacity-0',
                )}
              >
                <CheckIcon
                  size={32}
                  weight="bold"
                  className="size-3.5 fill-neutral-300/70"
                  color="currentColor"
                />
              </span>
              <span
                className={cn(
                  'transition-all duration-200 ease-out',
                  copied
                    ? 'scale-0 opacity-0'
                    : 'scale-100 opacity-100 blur-none',
                )}
              >
                <CopySimpleIcon
                  size={32}
                  weight="fill"
                  className="size-3.5 fill-neutral-300/70"
                  color="currentColor"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

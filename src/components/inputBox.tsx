'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const InputBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');
  console.log(value);

  return (
    <div className="div-center bg-primary h-dvh w-full">
      <div className="group font-geist relative isolate w-full max-w-sm rounded-xl">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-background relative w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-base text-neutral-600 ring-0 ring-neutral-400 transition-all duration-200 ease-out outline-none group-focus-within:ring-1 selection:bg-neutral-600 selection:text-neutral-200 dark:border-neutral-800 dark:text-neutral-500 dark:ring-neutral-700/60 dark:selection:bg-neutral-400 dark:selection:text-neutral-800"
        />
        <span
          className={cn(
            'bg-background pointer-events-none absolute top-1/2 left-4.5 w-fit -translate-y-1/2 rounded-sm text-sm text-neutral-400 transition-all duration-150 ease-in-out group-focus-within:top-0 group-focus-within:px-1 group-focus-within:py-0.5 group-focus-within:text-xs group-focus-within:text-neutral-500 dark:text-neutral-700',
            value ? 'hidden' : 'block',
          )}
        >
          Enter your name
        </span>
      </div>
    </div>
  );
};

export default InputBox;

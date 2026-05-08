'use client';

import { cn } from '@/lib/utils';
import NumberFlow from '@number-flow/react';
import { useState } from 'react';

export const Slider = () => {
  const [val, setVal] = useState<number>(100);
  const min = 100;
  const max = 800;

  const percentage = ((val - min) / (max - min)) * 100;

  const thumbSize = 24;

  return (
    <div className="div-center h-screen w-full bg-neutral-800 p-2">
      <div className="flex w-full max-w-[280] flex-col items-center gap-4 rounded-2xl border border-neutral-700/90 bg-neutral-900 px-4 py-6 shadow-[0_0_1px_1px,rgba(20,20,20,1),0_2px_4px_0,rgba(10,10,10,1)]">
        <div className="gap- flex w-full flex-col items-center">
          <span className="text-lg font-medium text-neutral-300">Calories</span>
          <NumberFlow
            value={val}
            suffix="Kcal"
            className="text-4xl font-semibold text-neutral-200"
          />
        </div>

        <div
          className={cn(
            'flex h-fit w-full items-center overflow-hidden rounded-full border border-neutral-950 bg-linear-to-t from-neutral-900 to-neutral-950 p-0.5',
            'relative shadow-[inset_0_-0.5px_0_0_rgba(200,200,200,0.2)]',
            'before:absolute before:inset-0 before:bg-[radial-gradient(circle,#f9f9f9_2px,transparent_2px)] before:bg-size-[35px,35px] before:content-[""]',
          )}
        >
          {/* ACTIVE FILL */}
          <div
            className={cn(
              'absolute inset-0.5 rounded-full bg-linear-to-r from-neutral-200 to-neutral-600 px-2',
            )}
            style={{
              width: `calc(${percentage}% + ${thumbSize / 2}px)`,
            }}
          />

          <input
            className={cn(
              'z-2 w-full cursor-grab appearance-none rounded-full p-2 outline-none',
              '[&::-webkit-slider-thumb]:appearance-none',
              '[&::-webkit-slider-thumb]:h-6',
              '[&::-webkit-slider-thumb]:w-6',
              '[&::-webkit-slider-thumb]:bg-neutral-950',
              '[&::-webkit-slider-thumb]:shadow-[inset_0_0.5px_0_0_rgba(200,200,200,0.2),inset_0_-0.5px_0_0_rgba(200,200,200,0.1)]',
              '[&::-webkit-slider-thumb]:rounded-full',
              '[&::-webkit-slider-thumb]:border',
              '[&::-webkit-slider-thumb]:border-neutral-950',
            )}
            type="range"
            value={val}
            min="100"
            max="800"
            onChange={(e) => setVal(Number(e.target.value))}
            step={100}
          />
        </div>
      </div>
    </div>
  );
};

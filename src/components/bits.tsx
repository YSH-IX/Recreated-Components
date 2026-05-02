'use client';

import { cn } from '@/lib/utils';
import { XLogoIcon } from '@phosphor-icons/react';

export const Bits = () => {
  return (
    <div className="div-center min-h-screen w-full bg-zinc-100">
      {/* Canvas */}
      <div
        className={cn(
          'div-center min-h-40 w-full max-w-md rounded-2xl bg-zinc-200',
          'shadow-[0_1px_1px_0_rgba(20,20,20,0.2),0_2px_4px_0_rgba(20,20,20,0.2)]',
          '*:shadow-[inset_-8px_-26px_16px_0_#18181b,inset_0_0_6px_4px_#18181b,2px_2px_14px_2px_rgba(20,20,20,0.1)]',
        )}
      >
        <div className={cn('w-fit rounded-full bg-neutral-400 p-4')}>
          <XLogoIcon
            size={20}
            weight="regular"
            color="currentColor"
            className="size-6 fill-zinc-100"
          />
        </div>
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export const ShimmerTxt = () => {
  return (
    <div className="div-center min-h-screen w-full bg-neutral-800">
      <ShimmeringText>
        Thinking longer for a better answer . . .{' '}
      </ShimmeringText>
    </div>
  );
};

const ShimmeringText = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'h-fit w-fit rounded-2xl border border-neutral-700 bg-neutral-900 p-4',
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          'bg-neutral-100 bg-clip-text text-transparent selection:bg-neutral-200 selection:text-neutral-800',
          'bg-linear-to-r/oklch from-neutral-600 via-neutral-400 to-neutral-600 bg-size-[400%_100%]',
          'p-2',
          'text-base font-medium',
          'animate-gradient',
        )}
      >
        {children}
      </div>
    </div>
  );
};

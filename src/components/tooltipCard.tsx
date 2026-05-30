'use client';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from 'motion/react';
import { cn } from '@/lib/utils';
import {
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useRef,
  useState,
} from 'react';

interface CardProps {
  children: ReactNode;
  // isHovered: boolean;
  // changeState: Dispatch<SetStateAction<boolean>>;
  content: ReactNode;
}

export const TooltipCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);
  const screen = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    opacity.set(0);
    const ref = screen.current;
    if (!ref) return;
    const { clientX, clientY } = e;
    const { top, left } = ref.getBoundingClientRect();
    const centerX = clientX - left;
    const centerY = clientY - top;
    x.set(centerX);
    y.set(centerY);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    opacity.set(0);
  };
  return (
    <div
      className="bg-primary cursor- relative h-dvh w-full overflow-hidden"
      ref={screen}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor dot */}
      <motion.div
        className={cn(
          'absolute -translate-1/2 rounded-full bg-neutral-900 p-1 dark:bg-neutral-100',
        )}
        style={{
          x,
          y,
          opacity,
        }}
      ></motion.div>
      <div className="font-inter mx-auto flex h-full w-full max-w-xl flex-col justify-center gap-10 text-sm/relaxed text-neutral-300 selection:bg-neutral-100 selection:text-neutral-900">
        <div>
          There was a problem with the server. Once
          <HoverCard
            content={
              <div className="h-fit w-58 text-sm/relaxed font-normal text-balance">
                AWS markets itself as the "world's most comprehensive and
                broadly adopted cloud platform" offering over 200 fully featured
                services globally.
              </div>
            }
          >
            AWS
          </HoverCard>
          went down, we had to quickly migrate to a new provider. AWS in general
          is a great service, but sometimes it's not available.
        </div>

        {/* <div>
          That is when we approached Tyler for a cute little testimonial.
          Instead of a
          <HoverCard
            content={
              <div className="h-fit w-58 text-sm/relaxed font-normal text-balance">
                AWS markets itself as the "world's most comprehensive and
                broadly adopted cloud platform" offering over 200 fully featured
                services globally.
              </div>
            }
          >
            testimonial
          </HoverCard>
          , he started yapping about project mayhem and how we should be using
          our skills to build a better future.
        </div> */}
      </div>
    </div>
  );
};

const HoverCard = ({
  children,
  // isHovered,
  // changeState,
  content,
}: CardProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const handleMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;
    setHovered(true);

    x.set(e.clientX - rect.left / 2 - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2 - 10);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <span
      ref={ref}
      className="relative w-full cursor-pointer px-1 font-semibold text-neutral-200"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {/* mouse move card  */}
        {hovered && (
          <motion.div
            initial={{
              clipPath: 'inset(0 0 100% 0)',
              opacity: 0,
            }}
            animate={{
              clipPath: 'inset(0)',
              opacity: 1,
            }}
            exit={{
              clipPath: 'inset(0 0 100% 0)',
              opacity: 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
              mass: 0.1,
              bounce: 0,
            }}
            className="absolute min-h-fit min-w-fit rounded-2xl p-4 shadow-[inset_0_0_1px_1px_rgba(50,50,50,1)] dark:border-neutral-700 dark:bg-neutral-900"
            style={{
              x,
              y,
            }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

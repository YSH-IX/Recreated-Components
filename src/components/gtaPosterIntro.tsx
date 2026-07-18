'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useRef, useLayoutEffect, useState } from 'react';

const DURATION = 3.6;
const EASE = [0.33, 0, 0.2, 1] as const;

export const GtaPosterIntro = () => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    const element = stageRef.current;
    if (!element) return;

    const update = () => {
      const bounds = element.getBoundingClientRect();
      const size = Math.min(bounds.width, bounds.height) * 0.96;
      setSize(size);
    };

    update();
    const observer = new ResizeObserver(update);

    return observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        'bg-primary div-center font-inter relative h-dvh w-full overflow-hidden',
        'bg-[radial-gradient(circle_at_50%_28%,#2a1133,#080611_72%)]',
        // 'bg-blend-color'
      )}
      ref={stageRef}
    >
      {size > 0 && (
        <motion.div
          className="relative origin-center"
          style={{
            width: size,
            height: size,
          }}
          initial={{ scale: 1.14, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ease: EASE, duration: DURATION }}
        >
          GTA 6 Poster
        </motion.div>
      )}
    </div>
  );
};

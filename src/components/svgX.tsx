'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

export const SvgX = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', onMove);

    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 400]), {
    stiffness: 200,
    damping: 40,
  });
  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 400]), {
    stiffness: 200,
    damping: 40,
  });
  return (
    <div className="div-center bg-primary h-dvh w-full">
      {/* <svg
        fill="none"
        viewBox="0 0 480 490"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 480, height: '100%' }}
      >
        <defs>
          <motion.radialGradient
            id="myGradient"
            cx={cx}
            cy={cy}
            r="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-neutral-200)"></stop>
            <stop stopColor="var(--color-neutral-500)" offset={0.5}></stop>
            <stop
              stopColor="var(--color-neutral-700)"
              offset={1}
              stopOpacity={0}
            ></stop>
          </motion.radialGradient>
        </defs>
        <path
          d="M285.38 207.711L462.954 1.5H420.874L266.687 180.55L143.538 1.5H1.50003L187.726 272.256L1.50003 488.5H43.5818L206.408 299.417L336.462 488.5H478.5L285.37 207.711H285.38ZM227.743 274.641L208.875 247.68L58.7444 33.147H123.379L244.536 206.282L263.405 233.243L420.894 458.292H356.259L227.743 274.652V274.641Z"
          fill="none"
        />
        <path
          d="M285.38 207.711L462.954 1.5H420.874L266.687 180.55L143.538 1.5H1.50003L187.726 272.256L1.50003 488.5H43.5818L206.408 299.417L336.462 488.5H478.5L285.37 207.711H285.38ZM227.743 274.641L208.875 247.68L58.7444 33.147H123.379L244.536 206.282L263.405 233.243L420.894 458.292H356.259L227.743 274.652V274.641Z"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M285.38 207.711L462.954 1.5H420.874L266.687 180.55L143.538 1.5H1.50003L187.726 272.256L1.50003 488.5H43.5818L206.408 299.417L336.462 488.5H478.5L285.37 207.711H285.38ZM227.743 274.641L208.875 247.68L58.7444 33.147H123.379L244.536 206.282L263.405 233.243L420.894 458.292H356.259L227.743 274.652V274.641Z"
          stroke="url(#myGradient)"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg> */}
      <svg
        className="touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
        viewBox="0 0 556 354"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ width: '556', height: '100%' }}
      >
        <defs>
          <pattern
            id="ncdai-face-pattern-_R_18clt9fj9lb_"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
              stroke="var(--pattern)"
              strokeWidth="1"
            />
          </pattern>
          <g
            id="ncdai-face-fill-_R_18clt9fj9lb_"
            style={{
              transform: 'translate(0px, 0px)',
              transformOrigin: '50% 50%',
              transformBox: 'fill-box',
            }}
          >
            <path d="M333.05 256.58L222.20 320.58L166.78 288.58L277.63 224.58L333.05 256.58Z" />
            <path d="M388.48 32.58L277.63 96.58L388.48 160.58L499.33 96.58L554.76 128.58L388.48 224.58L166.78 96.58L333.05 0.58L388.48 32.58Z" />
            <path d="M166.78 288.58L111.35 320.58L0.50 256.58L55.93 224.58L166.78 288.58Z" />
            <path d="M554.76 64.58L499.33 96.58L388.48 32.58L443.90 0.58L554.76 64.58Z" />
            <path d="M166.78 160.58L55.93 224.58L0.50 192.58L111.35 128.58L166.78 160.58Z" />
          </g>
          <path
            id="ncdai-stroke-_R_18clt9fj9lb_"
            d="M28.21 240.58 L0.50 224.58 V192.58 L111.35 128.58 L166.78 160.58 V192.58 L83.64 240.58M166.78 160.58 L0.50 256.58 V288.58 L111.35 352.58 L166.78 320.58 L222.20 352.58 L333.05 288.58 V256.58 L277.63 224.58 L166.78 288.58 L0.50 192.58M0.50 256.58 L111.35 320.58 L166.78 288.58 L222.20 320.58 L333.05 256.58M111.35 320.58 V352.58M166.78 288.58 V320.58M222.20 320.58 V352.58M499.33 96.58 L554.76 128.58 V160.58 L388.48 256.58 L166.78 128.58 V96.58 L333.05 0.58 L499.33 96.58M166.78 96.58 L388.48 224.58 L554.76 128.58M527.04 112.58 L554.76 96.58 V64.58 L443.90 0.58 L277.63 96.58 L388.48 160.58 L554.76 64.58M305.34 112.58 L388.48 64.58 L471.62 112.58M388.48 224.58 V256.58M388.48 32.58 V64.58"
          />
          <radialGradient
            id="ncdai-radial-gradient-_R_18clt9fj9lb_"
            r="200"
            gradientUnits="userSpaceOnUse"
            cx="551.3743760399334"
            cy="150.41201716738198"
          >
            <stop
              className="dark:[stop-color:#fff]"
              stopColor="var(--color-zinc-700)"
            />
            <stop
              className="dark:[stop-color:var(--color-zinc-600)]"
              offset="1"
              stopColor="var(--color-zinc-400)"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>
        <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
          <path d="M-477.55 756.57L1254.51 -243.41" />
          <path d="M977.37 788.58L-754.67 -211.42" />
          <path d="M1143.65 692.58L-588.39 -307.42" />
        </g>
        <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
          <path d="M166.78 160.58L55.93 224.58L0.50 192.58V224.58L55.93 256.58L166.78 192.58V160.58Z" />
          <path d="M166.78 288.58L111.35 320.58L0.50 256.58V288.58L111.35 352.58L166.78 320.58L222.20 352.58L333.05 288.58V256.58L222.20 320.58L166.78 288.58Z" />
          <path d="M388.48 224.58L166.78 96.58V128.58L388.48 256.58L554.76 160.58V128.58L388.48 224.58Z" />
          <path d="M388.48 32.58L277.63 96.58V128.58L388.48 64.58L499.33 128.58L554.75 96.58V64.58L499.33 96.58L388.48 32.58Z" />
        </g>
        <use
          href="#ncdai-face-fill-_R_18clt9fj9lb_"
          //   className="fill-background"
        />
        <use
          href="#ncdai-face-fill-_R_18clt9fj9lb_"
          fill="url(#ncdai-face-pattern-_R_18clt9fj9lb_)"
        />
        <use href="#ncdai-stroke-_R_18clt9fj9lb_" stroke="var(--stroke)" />
        <use
          href="#ncdai-stroke-_R_18clt9fj9lb_"
          stroke="url(#ncdai-radial-gradient-_R_18clt9fj9lb_)"
        />
      </svg>
    </div>
  );
};

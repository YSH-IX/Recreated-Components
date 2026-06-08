'use client';
import { motion, useMotionValue } from 'motion/react';
import { cn } from '@/lib/utils';
import React, { SVGProps, useRef, useState } from 'react';

export const CursorFollow = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const lineX = useMotionValue(0);
  const lineY = useMotionValue(0);
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const width = cursor.offsetWidth;
    const height = cursor.offsetHeight;
    const { clientX, clientY } = e;
    x.set(clientX - width / 2);
    y.set(clientY - height / 2);
    lineX.set(clientX - 0.1/2 );
    lineY.set(clientY - 0.1 / 2);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }
  return (
    <div
      className="bg-primary relative h-dvh w-full cursor-none overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        ref={cursorRef}
        className="absolute rounded-full bg-white p-1"
        style={{
          x,
          y,
        }}
      ></motion.div>
      <motion.div
        className="absolute h-[400%] w-[0.1px] -translate-1/2 bg-white/10"
        style={{
          x: lineX,
          y: lineY,
        }}
      ></motion.div>
      <motion.div
        className="absolute h-[0.1px] w-[400%] -translate-1/2 bg-white/10"
        style={{
          x: lineX,
          y: lineY,
        }}
      ></motion.div>

      {/* <div className='rounded-2xl px-6 py-4 bg-neutral-800 flex items-center justify-start'>
        <div>
          X: `${x.get()}`
        </div>
        <div>
          Y: `${y.get()}`
        </div>
      </div> */}
    </div>
  );
};

// export const CursorFollow = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const btnRef = useRef<HTMLButtonElement>(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [btnSize, setBtnSize] = useState({ height: 20, width: 20 });
//   const [btnHovered, setBtnHovered] = useState<boolean>(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!ref.current) return;
//     const { clientX, clientY } = e;
//     const centerX = clientX - btnSize.width / 2;
//     const centerY = clientY - btnSize.height / 2;
//     setPosition({ x: centerX, y: centerY });
//   };
//   const handleMouseLeave = () => {
//     setPosition({ x: 0, y: 0 });
//   };
//   const hasMoved = position.x !== 0 || position.y !== 0;

//   const btnMouseEnter = () => {
//     const btn = btnRef.current;
//     if (!btn) return;
//     const height = btn.offsetHeight + 2;
//     const width = btn.offsetWidth + 2;
//     setBtnSize({
//       height,
//       width,
//     });
//   };
// // const btnMouseLeave = () => {
// //     setBtnSize({ height: 20, width: 20 });
// //   };

//   // const btnMouseHover = () => {
//   //   // setBtnHovered(true);
//   //   console.log('hovered');

//   //   const btn = btnRef.current;
//   //   if (!btn) return;
//   //   const { height, width, top, left } = btn.getBoundingClientRect();
//   //   const x = top + height / 2;
//   //   const y = left + width / 2;

//   //   setPosition({ x, y });
//   // };
//   return (
//     <div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className={cn(
//         'bg-primary font-inter cursor-one relative h-screen w-full',
//       )}
//     >
//       <motion.div
//         style={{
//           x: position.x,
//           y: position.y,
//         }}
//         className={cn('absolute p-1 bg-white rounded-full z-10')}
//       >
//       </motion.div>
//       {/* <motion.div
//         style={{
//           x: position.x,
//           y: position.y,
//           height: btnSize.height,
//           width: btnSize.width,
//         }}
//         className={cn('absolute z-10')}
//       >
//         <Angle className="absolute top-0 left-0 rotate-90" />
//         <Angle className="absolute top-0 right-0 rotate-180" />
//         <Angle className="absolute bottom-0 left-0" />
//         <Angle className="absolute right-0 bottom-0 -rotate-90" />
//       </motion.div> */}
//       {/* <div className="div-center mx-auto h-screen">
//         <div className="div-center h-80 w-full max-w-sm rounded-3xl bg-white shadow-sm shadow-black/20">
//           <div
//             className="border p-10"
//             onMouseEnter={btnMouseHover}
//             onMouseLeave={() => setBtnHovered(false)}
//           >
//             <button
//               // onMouseEnter={btnMouseEnter}
//               // onMouseLeave={btnMouseLeave}
//               className="shrink-0 cursor-none bg-sky-700 p-0.5 transition-transform duration-150 ease-out will-change-transform outline-none active:scale-99"
//               ref={btnRef}
//             >
//               <div
//                 className={cn(
//                   'px-5 py-2 text-sm font-medium text-neutral-100',
//                   'shadow-[inset_0_0_10px_1px_rgba(255,255,255,0.8)]',
//                 )}
//               >
//                 Hover ME
//               </div>
//             </button>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// const Angle = ({ ...props }) => {
//   return (
//     <svg
//       width="10"
//       height="10"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <path d="M0.5 0V23H23.5" stroke="black" strokeWidth={4} />
//     </svg>
//   );
// };

'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: string;
};

export const LayoutCard = () => {
  const cards: Card[] = [
    {
      title: 'Anakin Skywalker',
      description:
        'Once a heroic Jedi Knight, Anakin was seduced by the dark side and became Darth Vader. His story is one of tragedy and redemption.',
      src: '/anakin.jpg',
      ctaText: 'Learn more',
      ctaLink: 'https://dune.fandom.com/wiki/Paul_Atreides',
      content:
        "Anakin Skywalker stands as one of the most complex figures in cinematic history, his journey spanning from a hopeful prodigy on Tatooine to the feared presence known as Darth Vader. He was celebrated for his extraordinary talents as a Jedi Knight, mastering the Force and showing prowess in engineering, flying, and dueling from a young age. Driven by his passionate love for Padmé Amidala and haunted by the fear of loss, Anakin’s choices were shaped by intense emotional extremes, casting a shadow over his legacy. His fall was marked by tragic betrayal—turning against the Jedi he once cherished to become an agent of darkness under Emperor Palpatine. Despite his role in the galaxy’s suffering, Anakin's final act was one of redemption, sacrificing himself to save his son and ultimately destroy the Sith. This arc of heroism, downfall, and salvation cements Anakin as a symbol of fate’s unpredictability and the enduring possibility of redemption. His image—shrouded in armor and tragedy—remains iconic, capturing both the grandeur and the sorrow of a saga that resonates across generations. Through his internal conflicts and pivotal choices, Anakin Skywalker became a mythic symbol of the power and peril within us all.",
    },
    {
      title: 'Paul Atreides',
      description:
        'The heir of House Atreides, Paul is a central figure in the battle for Arrakis. His journey blends prophecy, power, and identity.',
      src: '/paul.jpg',
      ctaText: 'Learn more',
      ctaLink: 'https://dune.fandom.com/wiki/Paul_Atreides',
      content:
        'Paul Atreides emerges from the windswept deserts of Arrakis as a messiah whose destiny is forever intertwined with the fate of his people and the ecology of the spice-laden planet. Born into nobility and burdened by prophecy, Paul is forced into exile after betrayal devastates House Atreides. Adapting to the harsh Fremen culture, he embraces the call of leadership, wielding prescient powers and strategic genius to unite scattered tribes. As Muad’Dib, he inspires loyalty and reverence, orchestrating a dramatic revolution that topples empires and reshapes the known universe. Beneath his regal exterior lies a profound struggle between personal desire and the heavy weight of messianic expectation. Paul’s story is one of transformation—from boy to legend, from outcast to emperor—set against the relentless backdrop of sand, political intrigue, and ancient prophecy. The striking image of Paul cloaked in desert garb atop a sandworm represents both the allure and the cost of power, as well as the intricate dance between humanity and destiny. His journey invites reflection on sacrifice, vision, and the enduring challenge of shaping one’s own future amidst forces beyond control.',
    },
    {
      title: 'Eren Yeager',
      description:
        'Eren is a passionate and determined fighter who seeks freedom for his people, often blurring the line between hero and anti-hero.',
      src: '/eren.jpg',
      ctaText: 'Learn more',
      ctaLink: 'https://attackontitan.fandom.com/wiki/Eren_Yeager',
      content:
        'Eren Yeager’s fierce eyes and determined expression tell the story of a boy shaped by tragedy, who rises to challenge the very fate of his world. Living under the constant threat of Titans, Eren’s resolve to secure freedom is unwavering, turning pain and loss into driving forces for change. His journey transforms him from an impulsive child into a controversial leader whose convictions blur the line between heroism and ruthlessness. As a Titan shifter, Eren’s raw strength and willingness to endure suffering for his people make him both revered and feared. Internal struggles, enduring friendships, and a relentless pursuit of answers define his character as he confronts secrets that upend everything believed about his world. The image of Eren—standing at the edge of conflict, defiant against overwhelming odds—embodies the spirit of rebellion and the weight of difficult choices. Through acts of profound courage and haunting violence, Eren’s legacy becomes a complex mirror reflecting the cyclical struggle for freedom and the cost of breaking free from the chains of humanity’s past. His presence is a testament to the power and peril of conviction, inspiring debate and reflection long after the dust has settled.',
    },
  ];

  const [selected, setSelected] = useState<Card | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selected) return;

    function handleClick(e: MouseEvent) {
      if (overlayRef.current && cardRef.current && e.target instanceof Node) {
        const clickedOnOverlay =
          overlayRef.current.contains(e.target) &&
          !cardRef.current.contains(e.target);
        if (clickedOnOverlay) {
          setSelected(null);
        }
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [selected]);

  return (
    <div className="relative min-h-screen w-full bg-gray-200">
      {selected && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          ref={overlayRef}
          className="absolute inset-0 z-9 bg-black/40 "
        ></motion.div>
      )}
      {selected && (
        <motion.div
          layoutId={`card-${selected.title}`}
          ref={cardRef}
          className={cn(
            'fixed top-1/2 left-1/2 z-10 flex h-[560px] w-full max-w-sm -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-3',
          )}
        >
          {/* Image */}
          <motion.img
            layoutId={`card-img-${selected.title}`}
            src={selected.src}
            className="aspect-square rounded-xl"
            alt={selected.title}
          />
          {/* About Container*/}
          <div className="flex h-fit w-full flex-col items-start justify-between gap-10">
            <div className="flex w-full flex-col items-start gap-1">
              <motion.h2
                layoutId={`card-name-${selected.title}`}
                className="text-xl font-semibold tracking-tight text-neutral-950"
              >
                {selected.title}
              </motion.h2>
              <p className="w-full text-base font-medium text-neutral-900">
                {selected.description}
              </p>
            </div>
            <motion.div
              className="flex w-full items-center justify-end overflow-hidden"
              layoutId={`card-button-${selected.title}`}
            >
              <Link
                href={selected.ctaLink}
                target="_blank"
                className="text-base font-medium text-zinc-900 underline underline-offset-3"
              >
                More about {selected.title}
              </Link>
              {/* <p className="overflow-hidden">{selected.content}</p> */}
            </motion.div>
          </div>
        </motion.div>
      )}

      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-10 py-20">
        {cards.map((item, idx) => (
          <motion.button
            layoutId={`card-${item.title}`}
            key={idx}
            onClick={() => setSelected(item)}
            className={cn(
              'flex w-full cursor-pointer appearance-none items-center gap-3 rounded-2xl border border-neutral-300 bg-white p-3 transition-shadow outline-none',
            )}
            type="button"
          >
            {/* Image */}
            <motion.img
              layoutId={`card-img-${item.title}`}
              src={item.src}
              className="aspect-square size-34 rounded-xl"
              alt={item.title}
            />
            {/* About Container*/}
            <div className="flex h-fit w-full flex-col items-start gap-4">
              <div className="flex flex-col items-start gap-1.5">
                <motion.h2
                  className="text-xl font-semibold tracking-tight text-neutral-900"
                  layoutId={`card-name-${item.title}`}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-about-${item.title}`}
                  className="line-clamp-2 text-start text-base font-medium text-balance text-neutral-800"
                >
                  {item.description}
                </motion.p>
              </div>
              <motion.div
                layoutId={`card-button-${item.title}`}
                className="flex w-full items-center justify-end"
              >
                <span className="shrink-0 rounded-full bg-green-600 px-3 py-1.5 text-neutral-50">
                  {item.ctaText}
                </span>
              </motion.div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

'use client';
import { CardsIcon, CubeIcon, ListDashesIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { useState } from 'react';

const Chip = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={className} {...rest}>
    {children}
  </div>
);

const Card = ({
  children,
  className,
  ...rest
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={className} {...rest}>
    {children}
  </div>
);

const CardImg = ({
  children,
  className,
  ...rest
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={className} {...rest}>
    {children}
  </div>
);
const CardInfo = ({
  children,
  className,
  ...rest
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={className} {...rest}>
    {children}
  </div>
);

const SharedMenu = () => {
  const toggleButtons = [
    { viewType: 'List View', icon: ListDashesIcon },
    { viewType: 'Card View', icon: CardsIcon },
    { viewType: 'Pack View', icon: CubeIcon },
  ];

  const CardList = [
    {
      src: '/eren.jpg',
      title: 'Skilled Fingers Series',
      ethValue: '0.855',
      serial: '#209',
      alt: 'jn image',
    },
    {
      src: '/anakin.jpg',
      title: 'Vibrant Vibes Series',
      ethValue: '0.209',
      serial: '#808',
      alt: 'jgn image',
    },
  ];

  const [cardId, setCardId] = useState<string>('List View');

  return (
    <div className="bg-background-100 div-center min-h-screen w-full">
      <div className="w-full max-w-xl">
        <div className="rounded-2xl border border-neutral-400 p-2">
          <div className="mx-auto flex w-fit items-center gap-2">
            {toggleButtons.map((item, idx) => (
              <Chip
                key={idx}
                className="flex items-center gap-1 rounded-full border border-neutral-200 py-2 pr-4 pl-3.5 text-sm text-neutral-200"
              >
                <item.icon size={20} />
                <span>{item.viewType}</span>
              </Chip>
            ))}
          </div>
        </div>
        <div>
          {CardList.map((item, idx) => (
            <Card key={idx}>
              <CardImg className="relative min-h-10 min-w-10">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </CardImg>
              <CardInfo>
                <p>{item.title}</p>
                <div>
                  <span>
                    {item.ethValue} <span>ETH</span>
                  </span>
                  <span>{item.serial}</span>
                </div>
              </CardInfo>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharedMenu;

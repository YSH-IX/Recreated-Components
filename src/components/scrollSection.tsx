import { cn } from '@/lib/utils';
import Image from 'next/image';

export const ScrollSection = () => {
  const countries = [
    {
      src: '/japan.jpg',
      heading: 'Japan',
      description:
        'Japan is an island nation known for its rich history, beautiful cherry blossoms, and vibrant culture. From high-tech cities to tranquil temples, it offers a unique blend of the modern and traditional.',
      alt: 'Mount Fuji with cherry blossoms in Japan',
    },
    {
      src: '/korea.jpg',
      heading: 'South Korea',
      description:
        'South Korea boasts dynamic cities like Seoul, scenic landscapes, and delicious cuisine. Its blend of rapid innovation and centuries-old traditions makes it a fascinating place to explore.',
      alt: 'Seoul cityscape in South Korea',
    },
    {
      src: '/germany.jpg',
      heading: 'Germany',
      description:
        'Germany is renowned for its picturesque villages, medieval castles, and modern cities. Its cultural heritage, efficient transport, and stunning landscapes attract visitors from around the world.',
      alt: 'Brandenburg Gate in Berlin, Germany',
    },
    {
      src: '/ladakh.jpg',
      heading: 'Ladakh',
      description:
        'Ladakh is a breathtaking region in northern India known for its dramatic mountains and peaceful monasteries. The stark beauty of its landscape makes it a haven for adventure and solitude.',
      alt: 'Scenic mountains and monastery in Ladakh',
    },
  ];
  return (
    //   Background
    <div
      className={cn(
        'size-full',
        'bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.2)_1px,transparent_1px,transparent_8px)]',
      )}
    >
      {/* Actual Content */}
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-4 border-x border-neutral-200 bg-neutral-50 py-10">
        {/* Headings */}
        <div className="div-center w-full flex-col gap-2 border-y border-neutral-200 py-8 sm:gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-800 sm:text-3xl md:text-4xl">
            Countries Section
          </h2>
          <p className="font-regular text-center text-sm text-neutral-700 sm:text-base md:text-lg">
            These are the Countries that I want to visit atleast once.
          </p>
        </div>
        <div className="order-last flex flex-col gap-4">
          {countries.map((item, idx) => (
            <div
              className="grid w-full grid-cols-1 divide-x divide-neutral-200 border-y border-neutral-200 bg-neutral-100 md:grid-cols-2"
              key={item.heading + idx}
            >
              <div className="cols-span-1 overflow-hidden bg-neutral-50 p-2">
                <Image
                  src={item.src}
                  alt={item.alt}
                  height={200}
                  loading="eager"
                  draggable={false}
                  width={200}
                  className="size-full rounded-2xl object-cover"
                ></Image>
              </div>
              <div className="cols-span-1 p-2">
                <div className="sticky top-0 flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-4 sm:gap-3">
                  <h3 className="flex items-center gap-1 text-xl font-medium text-neutral-800 sm:text-2xl md:text-3xl">
                    <span>0{idx + 1}.</span>
                    {item.heading}
                  </h3>
                  <p className="font-regular text-sm leading-snug text-wrap text-neutral-700 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

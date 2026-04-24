'use client';

export const Hero = () => {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      <section className="relative mx-auto w-full max-w-5xl flex-1 [--pattern:var(--color-neutral-700)]">
        <div className="h-14 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0px,var(--pattern)_1px,transparent_1px,transparent_10px)]"></div>
      </section>
    </div>
  );
};

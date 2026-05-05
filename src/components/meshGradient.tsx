import { cn } from '@/lib/utils';

export const MeshGradient = () => {
  return (
    <div className="div-center min-h-screen w-full bg-neutral-100 p-10">
      {/* <div
        className={cn(
          'relative isolate h-full w-full overflow-hidden rounded-sm',
          'bg-[radial-gradient(at_40%_40%,rgba(20,20,20,1)_0%,rgba(200,120,245,1)_50%),]',
          'before:content-[""] border',
          'before:absolute',
          'before:inset-0',
          'before:pointer-events-none',
          'before:z-10',
          "before:bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\")]",
          'before:mix-blend-overlay',
        )}
      ></div> */}
      <div className="grain animate-mesh relative h-screen w-full overflow-hidden bg-black bg-[radial-gradient(at_20%_30%,#7c3aed_0%,transparent_50%),radial-gradient(at_75%_25%,#ec4899_0%,transparent_55%),radial-gradient(at_35%_75%,#14b8a6_0%,transparent_50%),radial-gradient(at_80%_70%,#f59e0b_0%,transparent_60%)] bg-size-[200%_200%]">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-7xl font-bold text-white">Mesh Gradient</h1>
        </div>
      </div>
    </div>
  );
};

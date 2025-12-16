export default function FirstIllustration() {
  return (
    <>
      <div className="relative  w-full  flex items-center justify-center overflow-hidden z-50">
        <div className="absolute inset-0 bg-linear-to-t  to-transparent z-10"></div>

        <div className="flex flex-col items-center gap-3 scale-90">
          <div className="h-10 w-30 rounded border border-white/10 bg-neutral-900/50 flex items-center justify-center">
            <div className="h-1 w-12 bg-neutral-600 rounded-full"></div>
          </div>
          <div className="h-6 w-px bg-neutral-700"></div>
          <div className="flex gap-4">
            <div className="h-8 w-8 rounded border border-white/10 bg-neutral-800"></div>
            <div className="h-8 w-8 rounded border border-red-500/30 bg-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.2)]"></div>
            <div className="h-8 w-8 rounded border border-white/10 bg-neutral-800"></div>
          </div>
        </div>
      </div>
    </>
  );
}

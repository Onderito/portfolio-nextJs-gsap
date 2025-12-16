export default function FourthIllustration() {
  return (
    <>
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-50">
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 to-transparent z-10"></div>
        <div className="w-48 h-28 rounded-lg border border-white/10 bg-neutral-900/50 p-3 shadow-lg">
          <div className="flex gap-1.5 mb-2">
            <div className="h-1.5 w-1.5 rounded-full bg-neutral-700"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-neutral-700"></div>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-1">
              <span className="text-[8px] text-red-500 font-mono">➜</span>
              <div className="h-1 w-12 rounded-full bg-neutral-800"></div>
            </div>
            <div className="h-1 w-8 rounded-full bg-neutral-800 ml-2"></div>
            <div className="flex items-center gap-1 mt-2">
              <div className="h-1 flex-1 rounded-full bg-neutral-800 overflow-hidden">
                <div className="h-full w-full bg-red-500/80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function SecondIllustration() {
  return (
    <>
      <div className="relative  flex items-center justify-center overflow-hidden z-50">
        <div className="absolute inset-0 z-10"></div>
        <div className="w-48 h-28 rounded-lg border border-white/10 bg-neutral-900/50 p-2 grid grid-cols-3 gap-2 ">
          <div className="col-span-3 h-6 rounded bg-neutral-800"></div>
          <div className="col-span-1 h-14 rounded bg-neutral-800/60"></div>
          <div className="col-span-2 h-14 rounded bg-white/[0.07] border border-white/5"></div>
        </div>
      </div>
    </>
  );
}

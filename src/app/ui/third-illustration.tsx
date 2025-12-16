export default function ThirdIllustration() {
  return (
    <>
      <div className="relative w-full h-full border-white/5 bg-white/2 flex items-center justify-center z-50 ">
        {" "}
        <div className="absolute inset-0 bg-linear-to-t to-transparent z-50"></div>
        <div className="relative w-48 h-28 bg-neutral-900/40 border border-white/10 rounded-lg backdrop-blur-sm p-3 shadow-lg ">
          <div className="absolute inset-0 rounded-lg opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[10px_10px]"></div>

          <svg viewBox="0 0 180 80" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient
                id="bezierGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#525252" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>

            <line
              x1="0"
              y1="80"
              x2="180"
              y2="0"
              stroke="white"
              strokeOpacity="0.05"
              strokeDasharray="4 4"
              strokeWidth="1"
            />

            <path
              d="M0,80 C70,80 110,0 180,0"
              fill="none"
              stroke="url(#bezierGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="drop-shadow-[0_0_10px_rgba(239,68,68,0.2)]
"
            />

            <line
              x1="0"
              y1="80"
              x2="70"
              y2="80"
              stroke="#ef4444"
              strokeOpacity="0.3"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <circle cx="70" cy="80" r="2" fill="#ef4444" fillOpacity="0.5" />

            <circle
              cx="125"
              cy="8"
              r="3"
              fill="#fff"
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
          </svg>

          <div className="absolute top-2 left-2 flex items-center gap-1.5 px-1.5 py-0.5 rounded border border-white/10 bg-neutral-900/80">
            <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[7px] font-mono text-neutral-400">
              cubic-bezier(0.4, 0, 0.2, 1)
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function ThirdIllustration() {
  const root = useRef<HTMLDivElement>(null);

  const card = useRef<HTMLDivElement>(null);
  const curve = useRef<SVGPathElement>(null);
  const dot = useRef<SVGCircleElement>(null);
  const redDot = useRef<SVGCircleElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      if (!curve.current || !dot.current) return;

      const path = curve.current;
      const whiteDot = dot.current;

      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.set(whiteDot, {
        autoAlpha: 0,
        scale: 0.8,
        transformOrigin: "center",
      });
      if (redDot.current)
        gsap.set(redDot.current, {
          autoAlpha: 0,
          scale: 0.6,
          transformOrigin: "center",
        });

      gsap.set(card.current, { y: 0 });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.2,
        defaults: { ease: "power1.out" },
      });

      tl.fromTo(
        card.current,
        { autoAlpha: 0, y: 10, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.5 }
      );

      tl.to(path, { strokeDashoffset: 0, duration: 1.1 }, "<");

      tl.to(whiteDot, { autoAlpha: 1, scale: 1, duration: 0.25 }, "-=0.6");

      const obj = { t: 0 };
      tl.to(
        obj,
        {
          t: 1,
          duration: 1.1,
          ease: "none",
          onUpdate: () => {
            const p = path.getPointAtLength(obj.t * length);
            whiteDot.setAttribute("cx", String(p.x));
            whiteDot.setAttribute("cy", String(p.y));
          },
        },
        "<"
      );

      if (redDot.current) {
        tl.to(
          redDot.current,
          { autoAlpha: 1, scale: 1, duration: 0.25, ease: "back.out(2.2)" },
          "-=0.9"
        );
      }

      tl.to(
        whiteDot,
        {
          scale: 1.1,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        "+=0.1"
      );
      tl.to(
        card.current,
        { y: -2, duration: 0.6, yoyo: true, repeat: 1, ease: "sine.inOut" },
        "<"
      );

      tl.to(
        [whiteDot, redDot.current].filter(Boolean),
        { autoAlpha: 0, duration: 0.2 },
        "+=0.35"
      );
      tl.to(card.current, { autoAlpha: 0, duration: 0.2 }, "<");
      tl.set(obj, { t: 0 });
      tl.set(path, { strokeDashoffset: length });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="relative w-full h-full border-white/5 bg-white/2 flex items-center justify-center z-50"
    >
      <div className="absolute inset-0 bg-linear-to-t to-transparent z-50"></div>

      <div
        ref={card}
        className="relative w-48 h-28 bg-neutral-900/40 border border-white/10 rounded-lg backdrop-blur-sm p-3 shadow-lg"
      >
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
            ref={curve}
            d="M0,80 C70,80 110,0 180,0"
            fill="none"
            stroke="url(#bezierGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="drop-shadow-[0_0_10px_rgba(239,68,68,0.2)]"
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

          <circle
            ref={redDot}
            cx="70"
            cy="80"
            r="2"
            fill="#ef4444"
            fillOpacity="0.5"
          />

          <circle
            ref={dot}
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
  );
}

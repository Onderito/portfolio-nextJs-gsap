"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function FirstIllustration() {
  const root = useRef<HTMLDivElement>(null);

  const topCard = useRef<HTMLDivElement>(null);
  const topBar = useRef<HTMLDivElement>(null);

  const line = useRef<HTMLDivElement>(null);

  const left = useRef<HTMLDivElement>(null);
  const mid = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const boxes = [left.current, mid.current, right.current];

      gsap.set(topCard.current, {
        scaleX: 0,
        transformOrigin: "center center",
      });
      gsap.set(topBar.current, {
        scaleX: 0,
        transformOrigin: "left center",
        autoAlpha: 0.6,
      });
      gsap.set(line.current, { scaleY: 0, transformOrigin: "top" });
      gsap.set(boxes, { autoAlpha: 0, y: 10, scale: 0.8, filter: "blur(6px)" });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.2,
        defaults: { ease: "power1.out" },
      });

      tl.to(topCard.current, { scaleX: 1, duration: 0.6 })
        .to(
          topBar.current,
          { scaleX: 1, autoAlpha: 1, duration: 0.45 },
          "<0.25"
        )
        .to(
          line.current,
          { scaleY: 1, duration: 0.45, ease: "power1.out" },
          "<0.05"
        )
        .to([left.current, right.current], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "back.out(2)",
          stagger: 0.08,
        })
        .to(
          mid.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1.08,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "back.out(2.4)",
          },
          "<"
        )
        .to(
          mid.current,
          {
            scale: 1.02,
            duration: 0.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: 1,
          },
          "+=0.15"
        )
        .to(boxes, { autoAlpha: 0, duration: 0.2 }, "+=0.3")
        .set(topCard.current, { scaleX: 0 })
        .set(topBar.current, { scaleX: 0, autoAlpha: 0.6 })
        .set(line.current, { scaleY: 0 })
        .set(boxes, { y: 10, scale: 0.8, filter: "blur(6px)" });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="relative w-full flex items-center justify-center overflow-hidden z-50"
    >
      <div className="flex flex-col items-center gap-3 scale-90">
        {/* TOP CARD */}
        <div
          ref={topCard}
          className="h-10 w-60 rounded border border-white/10 bg-neutral-900/50 flex items-center justify-center overflow-hidden"
        >
          <div ref={topBar} className="h-1 w-40 bg-neutral-600 rounded-full" />
        </div>

        {/* LINE */}
        <div ref={line} className="h-6 w-px bg-neutral-700" />

        {/* 3 BOXES */}
        <div className="flex gap-4">
          <div
            ref={left}
            className="h-8 w-8 rounded border border-white/10 bg-neutral-800"
          />
          <div
            ref={mid}
            className="h-8 w-8 rounded border border-red-500/30 bg-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
          />
          <div
            ref={right}
            className="h-8 w-8 rounded border border-white/10 bg-neutral-800"
          />
        </div>
      </div>
    </div>
  );
}

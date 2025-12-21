"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function SecondIllustration() {
  const root = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const topBar = useRef<HTMLDivElement>(null);
  const leftBar = useRef<HTMLDivElement>(null);
  const rightBar = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const parts = [
        card.current,
        topBar.current,
        leftBar.current,
        rightBar.current,
      ];

      gsap.set(card.current, { scaleX: 0, transformOrigin: "center center" });
      gsap.set(topBar.current, { scaleX: 0, transformOrigin: "center center" });
      gsap.set(leftBar.current, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(rightBar.current, { scaleX: 0, transformOrigin: "left center" });

      gsap.set(parts, { autoAlpha: 1, filter: "blur(0px)" });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.2,
        defaults: { ease: "power1.out" },
      });

      tl.to(card.current, { scaleX: 1, duration: 0.8 })
        .to(topBar.current, { scaleX: 1, duration: 0.8 }, "-=0.15")
        .to(leftBar.current, { scaleY: 1, duration: 0.8 }, "-=0.05")
        .to(rightBar.current, { scaleX: 1, duration: 0.8 }, "-=0.1")
        .to(
          card.current,
          {
            scale: 1.09,
            duration: 0.18,
            ease: "power1.out",
            yoyo: true,
            repeat: 1,
          },
          "+=0.05"
        )
        .to(parts, { autoAlpha: 0, duration: 0.8 }, "+=0.35")
        .set(card.current, { scaleX: 0, scale: 1 })
        .set(topBar.current, { scaleX: 0 })
        .set(leftBar.current, { scaleY: 0 })
        .set(rightBar.current, { scaleX: 0 })
        .set(parts, { autoAlpha: 1 });
    }, root);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={root}>
      <div
        ref={card}
        className="relative  flex items-center justify-center overflow-hidden z-50"
      >
        <div className="absolute inset-0 z-10"></div>
        <div className="w-48 h-28 rounded-lg border border-white/10 bg-neutral-900/50 p-2 grid grid-cols-3 gap-2 ">
          <div
            ref={topBar}
            className="col-span-3 h-6 rounded bg-neutral-800"
          ></div>
          <div
            ref={leftBar}
            className="col-span-1 h-14 rounded bg-neutral-800/60"
          ></div>
          <div
            ref={rightBar}
            className="col-span-2 h-14 rounded bg-white/[0.07] border border-white/5"
          ></div>
        </div>
      </div>
    </div>
  );
}

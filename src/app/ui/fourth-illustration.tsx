"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function FourthIllustration() {
  const root = useRef<HTMLDivElement>(null);

  const card = useRef<HTMLDivElement>(null);
  const dots = useRef<HTMLDivElement>(null);
  const arrow = useRef<HTMLSpanElement>(null);

  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);

  const progressTrack = useRef<HTMLDivElement>(null);
  const progressFill = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const parts = [
        dots.current,
        arrow.current,
        line1.current,
        line2.current,
        progressTrack.current,
      ].filter(Boolean);

      gsap.set(card.current, { autoAlpha: 0, y: 10, filter: "blur(10px)" });
      gsap.set(dots.current, { autoAlpha: 0, y: -4 });
      gsap.set(arrow.current, { autoAlpha: 0, x: -6 });
      gsap.set([line1.current, line2.current], {
        scaleX: 0,
        transformOrigin: "left center",
        autoAlpha: 0,
      });

      gsap.set(progressTrack.current, { autoAlpha: 0, y: 4 });
      gsap.set(progressFill.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2.5,
        defaults: { ease: "power1.out" },
      });

      tl.to(card.current, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
      })
        .to(dots.current, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.2")
        .to(arrow.current, { autoAlpha: 1, x: 0, duration: 0.4 }, "-=0.15")
        .to(line1.current, { autoAlpha: 1, scaleX: 1, duration: 0.5 }, "-=0.05")
        .to(line2.current, { autoAlpha: 1, scaleX: 1, duration: 0.5 }, "-=0.1")
        .to(
          progressTrack.current,
          { autoAlpha: 1, y: 0, duration: 0.25 },
          "+=0.1",
        )
        .to(
          progressFill.current,
          { scaleX: 1, duration: 0.8, ease: "power1.out" },
          "-=0.05",
        )
        .to(
          progressFill.current,
          { scaleX: 0.65, duration: 0.35, ease: "sine.inOut" },
          "+=0.15",
        )
        .to(progressFill.current, {
          scaleX: 1,
          duration: 0.35,
          ease: "sine.inOut",
        })
        .to([card.current, ...parts], { autoAlpha: 0, duration: 0.2 }, "+=0.35")
        .set(card.current, { y: 10, filter: "blur(10px)" })
        .set([line1.current, line2.current], { scaleX: 0, autoAlpha: 0 })
        .set(progressFill.current, { scaleX: 0 })
        .set([dots.current, arrow.current, progressTrack.current], {
          y: 0,
          x: 0,
        })
        .set([dots.current, arrow.current, progressTrack.current], {
          autoAlpha: 0,
        });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="relative w-full h-full flex items-center justify-center overflow-hidden z-50"
    >
      <div
        ref={card}
        className="relative z-10 w-48 h-28 rounded-lg border border-white/10 bg-neutral-900/50 p-3 shadow-lg"
      >
        <div ref={dots} className="flex gap-1.5 mb-2">
          <div className="h-1.5 w-1.5 rounded-full bg-neutral-700"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-neutral-700"></div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-1">
            <span ref={arrow} className="text-[8px] text-red-500 font-mono">
              ➜
            </span>
            <div
              ref={line1}
              className="h-1 w-12 rounded-full bg-neutral-800"
            ></div>
          </div>

          <div
            ref={line2}
            className="h-1 w-8 rounded-full bg-neutral-800 ml-2"
          ></div>

          <div className="flex items-center gap-1 mt-2">
            <div
              ref={progressTrack}
              className="h-1 flex-1 rounded-full bg-neutral-800 overflow-hidden"
            >
              <div
                ref={progressFill}
                className="h-full w-full bg-red-500/80"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Pen, Zap, Rocket } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { createMyJourneyAnimation } from "../animations/my-journey";
import { useMessages } from "../i18n/use-messages";
import AuroraOverlay from "../ui/aurora-overlay";

export default function MyJourney() {
  const messages = useMessages();

  const refs = {
    container: useRef<HTMLDivElement>(null),
    title: useRef<HTMLHeadingElement>(null),
    subtitle: useRef<HTMLParagraphElement>(null),
    cards: useRef<HTMLDivElement[]>([]),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createMyJourneyAnimation({
        container: refs.container.current!,
        title: refs.title.current!,
        subtitle: refs.subtitle.current!,
        cards: refs.cards.current,
      });
    }, refs.container);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const myJourney = messages.journey.items;

  const rotations = ["rotate-2", "-rotate-2", "rotate-2"];

  return (
    <div id="journey" ref={refs.container} className="scroll-mt-24">
      <h2 ref={refs.title} className="heading-2 text-center">
        {messages.journey.title}
      </h2>
      <p ref={refs.subtitle} className="body-text text-center mt-2">
        {messages.journey.subtitleLine1} <br className="block md:hidden" />{" "}
        {messages.journey.subtitleLine2}
      </p>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mt-10 xl:mt-14 gap-8">
        {myJourney.map((j, i) => (
          <div
            ref={(el) => {
              refs.cards.current[i] = el as HTMLDivElement;
            }}
            className={`relative flex flex-col overflow-hidden webkit-clip rounded-[24px] bg-[#1f1f1f] p-6 xl:w-[386px] xl:h-[350px] xl:mx-auto ${rotations[i]}`}
            key={i}
          >
            <AuroraOverlay />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex flex-row items-start justify-between gap-6">
                <h3 className="text-[20px] font-semibold leading-none tracking-[-0.2px] text-white">
                  {j.title}
                </h3>
                <div className="shrink-0 text-white">
                  {i === 0 ? (
                    <Zap className="h-5 w-5" strokeWidth={1.75} />
                  ) : i === 1 ? (
                    <Pen className="h-5 w-5" strokeWidth={1.75} />
                  ) : (
                    <Rocket className="h-5 w-5" strokeWidth={1.75} />
                  )}
                </div>
              </div>
              <p className="mt-11 text-[16px]  tracking-[-0.16px] font-light text-[#c4c4c4]">
                {j.description}
              </p>
              <div className="mt-auto flex items-center gap-3 text-white/80">
                <span className="h-px w-8 bg-white/20" />
                <p className="text-[12px] font-medium uppercase tracking-[0.16em]">
                  {j.badge}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(255,255,255,0.5)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

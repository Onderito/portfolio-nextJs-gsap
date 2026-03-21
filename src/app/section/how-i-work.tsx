"use client";

import FirstIllustration from "../ui/first-illustration";
import SecondIllustration from "../ui/second-illustration";
import ThirdIllustration from "../ui/third-illustration";
import FourthIllustration from "../ui/fourth-illustration";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { createHowIWorkAnimation } from "../animations/how-i-work";
import { useMessages } from "../i18n/use-messages";
import AuroraOverlay from "../ui/aurora-overlay";

export default function HowIWork() {
  const messages = useMessages();

  const refs = {
    container: useRef<HTMLDivElement>(null),
    title: useRef<HTMLHeadingElement>(null),
    subtitle: useRef<HTMLParagraphElement>(null),
    cards: useRef<HTMLDivElement[]>([]),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createHowIWorkAnimation({
        container: refs.container.current!,
        title: refs.title.current!,
        subtitle: refs.subtitle.current!,
        cards: refs.cards.current,
      });
    }, refs.container);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const cards = messages.howIWork.cards;
  return (
    <div id="process" ref={refs.container} className="scroll-mt-24">
      <h2 ref={refs.title} className="heading-2 text-center">
        {messages.howIWork.title}
      </h2>
      <p ref={refs.subtitle} className="body-text text-center mt-2">
        {messages.howIWork.subtitle}
      </p>
      <div className="flex flex-col gap-8 mt-10 xl:mt-12 md:grid md:grid-cols-2 xl:grid-cols-4 xl:gap-5 xl:w-full">
        {cards.map((c, i) => (
          <div
            ref={(el) => {
              refs.cards.current[i] = el as HTMLDivElement;
            }}
            className="bg-[#212121] p-4 xl:p-3.5 shadow-white-blur rounded-3xl xl:min-h-[382px]"
            key={i}
          >
            <div className="bg-[#080808] h-[165px] xl:h-[148px] rounded-2xl shadow-sm relative overflow-hidden webkit-clip flex justify-center items-center">
              <AuroraOverlay className="opacity-50" />
              <div className="relative z-10 brightness-110 contrast-110 xl:scale-90">
                {i === 0 ? (
                  <FirstIllustration />
                ) : i === 1 ? (
                  <SecondIllustration />
                ) : i === 2 ? (
                  <ThirdIllustration />
                ) : i === 3 ? (
                  <FourthIllustration />
                ) : null}
              </div>
            </div>
            <p className="text-[12px] xl:text-[11px] bg-[#1C1C1C] shadow-white-blur rounded-xl w-fit p-1.5 xl:px-1.5 xl:py-1 mt-4 xl:mt-3 text-neutral-400">
              {c.tag}
            </p>
            <h3 className="heading-4 mt-6 xl:mt-4 xl:text-[18px]">{c.title}</h3>
            <p className="mt-2 text-neutral-400 card-text xl:text-[15px]">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

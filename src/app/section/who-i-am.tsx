"use client";

import Image from "next/image";
import Button from "../ui/button";
import { gsap } from "gsap/dist/gsap";
import { useLayoutEffect, useRef } from "react";
import { createWhoIAmAnimation } from "../animations/who-i-am";
import { useMessages } from "../i18n/use-messages";
import AuroraOverlay from "../ui/aurora-overlay";

export default function WhoIAm() {
  const messages = useMessages();

  const refs = {
    container: useRef<HTMLDivElement>(null),
    title: useRef<HTMLHeadingElement>(null),
    picture: useRef<HTMLDivElement>(null),
    presentationCard: useRef<HTMLDivElement>(null),
    toolkitCard: useRef<HTMLDivElement>(null),
    hireMeCard: useRef<HTMLDivElement>(null),
    linkedinCard: useRef<HTMLAnchorElement>(null),
    xCard: useRef<HTMLAnchorElement>(null),
    devCard: useRef<HTMLDivElement>(null),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = {
        container: refs.container.current!,
        title: refs.title.current!,
        picture: refs.picture.current!,
        presentationCard: refs.presentationCard.current!,
        toolkitCard: refs.toolkitCard.current!,
        hireMeCard: refs.hireMeCard.current!,
        linkedinCard: refs.linkedinCard.current!,
        xCard: refs.xCard.current!,
        devCard: refs.devCard.current!,
      };
      createWhoIAmAnimation(elements);
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="about" className="w-full scroll-mt-24">
      <div className="container">
        <div ref={refs.container}>
          <h2 ref={refs.title} className="heading-2 text-center">
            {messages.whoIAm.title}
          </h2>
          <div className="mt-10 xl:mt-14 flex flex-col items-center justify-center  ">
            <div className="w-full xl:grid xl:grid-cols-[2fr_3fr] xl:gap-4 xl:items-stretch">
              <div
                ref={refs.picture}
                className="relative overflow-hidden rounded-2xl xl:rounded-3xl shadow-white-blur aspect-3/4 xl:aspect-auto "
              >
                <Image
                  src="/blur-profile.webp"
                  alt={messages.whoIAm.pictureAlt}
                  fill
                  quality={80}
                  className="object-cover scale-animation"
                />
              </div>
              <div className="mt-4 flex flex-col gap-4 xl:mt-0 xl:grid xl:grid-cols-3 xl:h-[659px] xl:auto-rows-fr">
                <div
                  ref={refs.presentationCard}
                  className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] lg:h-[200px] p-6 shadow-white-blur xl:h-auto xl:col-span-3 "
                >
                  <h3 className="text-2xl font-bold">{messages.whoIAm.name}</h3>
                  <p className="mt-3 text-neutral-400 leading-relaxed xl:w-[90%]">
                    {messages.whoIAm.introBefore}{" "}
                    <span className="text-white">
                      {messages.whoIAm.highlight}
                    </span>{" "}
                    {messages.whoIAm.introAfter}
                  </p>
                  <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-white/10 blur-[70px]" />
                </div>
                <div
                  ref={refs.toolkitCard}
                  className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur xl:col-span-2"
                >
                  <h4 className="text-lg font-bold">
                    {messages.whoIAm.toolkitTitle}
                  </h4>
                  <p className="mt-1 max-w-sm text-[12px] leading-relaxed text-neutral-400">
                    {messages.whoIAm.toolkitIntro}
                  </p>
                  <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {messages.whoIAm.toolkitItems.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-[12px] border border-white/8 bg-white/3 px-3 py-2.5"
                      >
                        <div className="text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <p className="mt-1.5 text-[13px] font-medium tracking-[-0.02em] text-white leading-none">
                          {item.label}
                        </p>
                        <p className="mt-1 text-[10px] leading-snug text-neutral-400">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  ref={refs.hireMeCard}
                  className="relative overflow-hidden webkit-clip rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur xl:col-span-1 flex items-center justify-center h-[200px] xl:h-full"
                >
                  <AuroraOverlay className="opacity-75" />
                  <div className="relative z-10">
                    <a
                      href="https://calendly.com/ulas-onder/30min"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Button ref={null} className="px-10 scale-animation ">
                        {messages.whoIAm.cta}
                      </Button>
                    </a>
                  </div>
                </div>
                {/* BOTTOM 3 CARDS */}
                <a
                  ref={refs.linkedinCard}
                  href="https://www.linkedin.com/in/ulasonder/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur flex items-center justify-center xl:col-span-1 h-[200px] xl:h-full cursor-pointer scale-animation">
                    <Image
                      src="/linkedin.svg"
                      alt={messages.whoIAm.linkedinAlt}
                      width={70}
                      height={70}
                    />
                  </div>
                </a>
                <a
                  ref={refs.xCard}
                  href="https://x.com/UnderDev0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur flex items-center justify-center xl:col-span-1 h-[200px] xl:h-full cursor-pointer scale-animation ">
                    <Image
                      src="/x-icon.webp"
                      quality={100}
                      alt={messages.whoIAm.xAlt}
                      width={70}
                      height={70}
                    />
                  </div>
                </a>
                <div
                  ref={refs.devCard}
                  className="relative overflow-hidden webkit-clip rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur flex items-center justify-center xl:col-span-1 h-[200px] xl:h-full"
                >
                  <AuroraOverlay className="opacity-75" />
                  <h5 className="relative z-10 font-gloria text-3xl font-bold">
                    {messages.whoIAm.devMark}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

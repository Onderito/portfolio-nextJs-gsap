/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Button from "../ui/button";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { createWhoIAmAnimation } from "../animations/who-i-am";

export default function WhoIAm() {
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

  const tools = [
    { icon: "/webflow.svg", alt: "Webflow", bg: "bg-[#AAC6FA]" },
    { icon: "/nextJs.svg", alt: "NextJs", bg: "bg-[#1A1A1A]" },
    { text: "SEO", bg: "bg-[#1A1A1A]" },
    { text: "GSAP", bg: "bg-[#1A1A1A]" },
    { text: "UI&UX", bg: "bg-[#1A1A1A]" },
  ];

  return (
    <div ref={refs.container}>
      <h2 ref={refs.title} className="heading-2 text-center">
        Who I Am
      </h2>
      <div className="mt-10 xl:mt-14 flex flex-col items-center justify-center">
        <div className="w-full xl:grid xl:grid-cols-[2fr_3fr] xl:gap-6 xl:items-stretch">
          <div
            ref={refs.picture}
            style={{ cornerShape: "squircle" }}
            className="relative overflow-hidden rounded-2xl xl:rounded-3xl shadow-white-blur aspect-3/4 xl:aspect-auto "
          >
            <Image
              src="/blur-profile.webp"
              alt="Ulas Profile"
              fill
              quality={80}
              className="object-cover scale-animation"
            />
          </div>

          <div className="mt-4 flex flex-col gap-4 xl:mt-0 xl:grid xl:grid-cols-3 xl:h-[659px] xl:auto-rows-fr">
            <div
              ref={refs.presentationCard}
              style={{ cornerShape: "squircle" }}
              className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] lg:h-[200px] p-6 shadow-white-blur xl:h-auto xl:col-span-3 "
            >
              <h3 className="text-2xl font-bold">Ulas Önder</h3>
              <p className="mt-3 text-neutral-400 leading-relaxed xl:w-[90%]">
                Front-end Developer and Designer. My specialty is building high
                converting <span className="text-white">Landing Pages</span>{" "}
                that load in under one second. I focus on strategic design and
                clean code to maximize your revenue.
              </p>

              <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-white/10 blur-[70px]" />
            </div>

            <div
              ref={refs.toolkitCard}
              style={{ cornerShape: "squircle" }}
              className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur xl:col-span-2"
            >
              <h4 className="text-xl font-bold text-center">
                High-Performance{" "}
                <span className="font-gloria text-neutral-400">Toolkit</span>
              </h4>

              <div className="mt-6 flex flex-wrap justify-center gap-4 xl:flex-nowrap md:h-[120px]">
                {tools.map((item, i) => (
                  <span
                    key={i}
                    style={{ cornerShape: "squircle" }}
                    className={`flex h-[70px] w-[70px] items-center justify-center rounded-2xl border border-[#404040] ${item.bg} bg-[#333333] text-base font-light`}
                  >
                    {item.icon ? (
                      <img
                        className="w-10 h-10"
                        src={item.icon}
                        alt={item.alt!}
                      />
                    ) : (
                      item.text
                    )}
                  </span>
                ))}
              </div>

              <div className="pointer-events-none absolute left-0 bottom-10 h-20 w-20 rounded-2xl bg-white blur-[100px]" />
            </div>

            <div
              ref={refs.hireMeCard}
              style={{ cornerShape: "squircle" }}
              className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur xl:col-span-1 flex items-center justify-center h-[200px] xl:h-full"
            >
              <div className="relative z-10">
                <a
                  href="https://www.linkedin.com/in/ulasonder/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    ref={null}
                    className="px-10 transform hover:scale-105 duration-700"
                  >
                    Hire Me
                  </Button>
                </a>
              </div>

              <Image
                src="/color-gradient.svg"
                alt="Color Gradient"
                width={800}
                height={800}
                className="absolute -top-20 md:top-[-200px] xl:top-0 blur-2xl"
              />
            </div>

            {/* BOTTOM 3 CARDS */}
            <a
              ref={refs.linkedinCard}
              href="https://www.linkedin.com/in/ulasonder/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                style={{ cornerShape: "squircle" }}
                className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur flex items-center justify-center xl:col-span-1 h-[200px] xl:h-full cursor-pointer scale-animation"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={70}
                  height={70}
                />
                <Image
                  className="absolute w-full bottom-[-150px] md:bottom-[-350px] lg:bottom-[-500px] right-20 xl:-top-20 "
                  src="/double-circle.svg"
                  alt="double circle"
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
              <div
                style={{ cornerShape: "squircle" }}
                className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur flex items-center justify-center xl:col-span-1 h-[200px] xl:h-full cursor-pointer scale-animation"
              >
                <img src="/x.svg" alt="X" />
                <Image
                  className="absolute w-full top-[-150px] md:top-[-350px] lg:top-[-500px] left-20 xl:-top-20"
                  src="/double-circle.svg"
                  alt="double circle"
                  width={70}
                  height={70}
                />
              </div>
            </a>

            <div
              ref={refs.devCard}
              style={{ cornerShape: "squircle" }}
              className="relative overflow-hidden  rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur flex items-center justify-center xl:col-span-1 h-[200px] xl:h-full"
            >
              <h5 className="relative z-10  font-gloria text-3xl font-bold">
                ÖnderDev
              </h5>
              <Image
                src="/color-gradient.svg"
                alt="Color Gradient"
                width={800}
                height={800}
                className="absolute -bottom-20 md:bottom-[-200px] xl:bottom-0 blur-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

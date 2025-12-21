"use client";

import Image from "next/image";
import FirstIllustration from "../ui/first-illustration";
import SecondIllustration from "../ui/second-illustration";
import ThirdIllustration from "../ui/third-illustration";
import FourthIllustration from "../ui/fourth-illustration";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { createHowIWorkAnimation } from "../animations/how-i-work";

export default function HowIWork() {
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
  const cards = [
    {
      tag: "Think, Plan, Execute",
      title: "Strategy First",
      desc: "I start by understanding the goals, audience, and user journey to define a clear plan before executing.",
    },
    {
      tag: "Structure & Aesthetics",
      title: "Design That Makes Sense",
      desc: "I create intuitive, minimal interfaces, focusing on usability, accessibility, and aesthetics.",
    },
    {
      tag: "Animation with Purpose",
      title: "Smooth & Modern Animations",
      desc: "I use animation purposefully to enhance the user experience, keeping it smooth and engaging.",
    },
    {
      tag: "Fast, Reliable",
      title: "Performance & Clean Code",
      desc: "I prioritize performance, clean code, and maintainability to ensure fast and reliable websites.",
    },
  ];
  return (
    <div ref={refs.container}>
      <h2 ref={refs.title} className="heading-2 text-center">
        How I Work
      </h2>
      <p
        ref={refs.subtitle}
        className="body-text text-center mt-2 md:mt-4 xl:mt-6"
      >
        A streamlined process to deliver polished, high-performance web
        experiences.{" "}
      </p>
      <div className="flex flex-col gap-8 mt-10 xl:mt-14 md:grid md:grid-cols-2 xl:grid-cols-4 xl:w-full">
        {cards.map((c, i) => (
          <div
            ref={(el) => {
              refs.cards.current[i] = el as HTMLDivElement;
            }}
            style={{ cornerShape: "squircle" }}
            className=" bg-[#212121] p-4 shadow-white-blur rounded-3xl"
            key={i}
          >
            <div
              style={{ cornerShape: "squircle" }}
              className=" bg-[#080808] h-[165px] rounded-2xl shadow-sm relative overflow-hidden flex justify-center items-center"
            >
              {i === 0 ? (
                <FirstIllustration />
              ) : i === 1 ? (
                <SecondIllustration />
              ) : i === 2 ? (
                <ThirdIllustration />
              ) : i === 3 ? (
                <FourthIllustration />
              ) : null}
              <Image
                className={`absolute opacity-40 blur-2xl z-1 ${
                  i === 0 || i === 3
                    ? "-top-20 lg:-top-30 xl:-top-15"
                    : "-bottom-20 lg:-bottom-30 xl:-bottom-15"
                } `}
                src="/color-gradient.svg"
                alt=""
                width={800}
                height={800}
              />
            </div>
            <p className="text-[12px] bg-[#1C1C1C] shadow-white-blur rounded-xl w-fit p-1.5 mt-4 text-neutral-400 ">
              {c.tag}
            </p>
            <h4 className="heading-4 mt-6">{c.title}</h4>
            <p className="mt-2 text-neutral-400 card-text">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

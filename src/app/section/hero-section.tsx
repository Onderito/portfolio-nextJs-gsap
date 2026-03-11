"use client";

import Button from "../ui/button";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { useLayoutEffect, useRef } from "react";
import {
  createHomeAnimation,
  setupPictureHover,
} from "../animations/home-animation";
import { useMessages } from "../i18n/use-messages";

export default function HeroSection() {
  const messages = useMessages();

  const refs = {
    picture: useRef<HTMLImageElement>(null),
    title: useRef<HTMLHeadingElement>(null),
    subtitle: useRef<HTMLParagraphElement>(null),
    button: useRef<HTMLButtonElement>(null),
    gradientImage: useRef<HTMLImageElement>(null),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = {
        picture: refs.picture.current!,
        title: refs.title.current!,
        subtitle: refs.subtitle.current!,
        button: refs.button.current!,
        gradientImage: refs.gradientImage.current!,
      };

      const tl = createHomeAnimation(elements);

      tl.eventCallback("onComplete", () => {
        setupPictureHover(elements.picture);
      });
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      id="home"
      className="h-screen flex justify-center items-center scroll-mt-24"
    >
      <div className="flex flex-col items-center justify-center relative z-50">
        <Image
          ref={refs.picture}
          src="/blur-profile.webp"
          alt={messages.hero.profileAlt}
          width={500}
          height={500}
          priority
          quality={80}
          className="object-cover w-30 h-30 rounded-2xl rotate-2 border-2 border-white border-glass"
        />

        <h1
          ref={refs.title}
          className="heading-1 text-center mt-6 md:mt-10 xl:mt-12 overflow-hidden"
        >
          {messages.hero.titleLine1} <br />
          <span className="text-neutral-400">
            {messages.hero.titleEmphasis}
          </span>
        </h1>
        <p
          ref={refs.subtitle}
          className="body-text mt-2 md:mt-4 xl:mt-6 text-center"
        >
          {messages.hero.subtitleLine1} <br className="md:hidden" />{" "}
          {messages.hero.subtitleLine2}
        </p>
        <a
          className=" mt-6 md:mt-8 xl:mt-10 scale-animation"
          href="https://calendly.com/ulas-onder/30min"
          rel="noreferrer"
          target="_blank"
        >
          <Button ref={refs.button}>{messages.hero.cta}</Button>
        </a>
        <Image
          ref={refs.gradientImage}
          src="/circle-gradient.svg"
          alt="Circle Gradient"
          width={800}
          height={800}
          className="absolute blur-2xl -z-10 opacity-20 animate-pulse"
        />
      </div>
    </div>
  );
}

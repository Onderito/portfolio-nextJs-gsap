"use client";

import Button from "../ui/button";
import Image from "next/image";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import {
  createHomeAnimation,
  setupPictureHover,
} from "../animations/home-animation";

export default function HeroSection() {
  const refs = {
    picture: useRef<HTMLImageElement>(null),
    name: useRef<HTMLParagraphElement>(null),
    title: useRef<HTMLHeadingElement>(null),
    subtitle: useRef<HTMLParagraphElement>(null),
    button: useRef<HTMLButtonElement>(null),
    gradientImage: useRef<HTMLImageElement>(null),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = {
        picture: refs.picture.current!,
        name: refs.name.current!,
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
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center relative z-50">
        <Image
          ref={refs.picture}
          src="/blur-profile.webp"
          alt="Ulas Blur Profile"
          width={500}
          height={500}
          priority
          quality={80}
          className="object-cover w-30 h-30 rounded-2xl rotate-2 border-2 border-white border-glass"
        />
        <p ref={refs.name} className="mt-4 font-gloria">
          Hi I’m Ulas
        </p>
        <h1
          ref={refs.title}
          className="heading-1 text-center mt-6 md:mt-10 xl:mt-12"
        >
          I design & build modern <br />
          <span className="text-neutral-400">web experiences</span>
        </h1>
        <p
          ref={refs.subtitle}
          className="body-text mt-2 md:mt-4 xl:mt-6 text-center"
        >
          Focused on performance, smooth animations, <br className="md:hidden" /> and clean interfaces.
        </p>
        <a className=" mt-6 md:mt-8 xl:mt-10 hover:scale-105 duration-700"
          href="https://www.linkedin.com/in/ulasonder/"
          target="_blank"
          aria-label="Visit my Linkedin"
          rel="noreferrer"
        >
          <Button ref={refs.button} >
            Hire Me
          </Button>
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

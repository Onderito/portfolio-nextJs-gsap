"use client";

import Image from "next/image";
import Button from "../ui/button";
import { Blocks, Sparkles, Pen } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { createMyProjectAnimation } from "../animations/my-project-animation";
import { useMessages } from "../i18n/use-messages";

export default function MyProject() {
  const messages = useMessages();

  const refs = {
    container: useRef<HTMLDivElement>(null),
    title: useRef<HTMLHeadingElement>(null),
    wrappers: useRef<HTMLDivElement[]>([]),
    cards: useRef<HTMLDivElement[]>([]),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createMyProjectAnimation({
        container: refs.container.current!,
        title: refs.title.current!,
        wrappers: refs.wrappers.current,
        cards: refs.cards.current,
      });
    }, refs.container);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const projects = messages.projects.items;
  return (
    <div id="projects" ref={refs.container} className="scroll-mt-24">
      <h2 ref={refs.title} className="heading-2 text-center">
        {messages.projects.titleStart}{" "}
        <span className="text-neutral-400 ">
          {messages.projects.titleEmphasis}
        </span>
      </h2>
      {projects.map((p, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) refs.wrappers.current[index] = el;
          }}
          className="mt-10 xl:mt-14 flex flex-col gap-8 relative"
        >
          <div
            ref={(el) => {
              refs.cards.current[index] = el as HTMLDivElement;
            }}
            className="bg-[#212121] p-2.5 rounded-[26px] shadow-white-blur"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 h-full">
              <div className="relative group w-full">
                <div
                  className="relative aspect-4/3 sm:aspect-4/3 h-full w-full overflow-hidden rounded-2xl glass-border bg-neutral-900 shadow-2xl shadow-black/50"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover scale-animation"
                  />

                  <div className="absolute inset-0 runded-2xl border border-white/10 pointer-events-none"></div>
                </div>
              </div>

              <div className="lg:flex lg:flex-col">
                <h3 className="heading-3 font-bold mt-6 lg:mt-0">{p.title}</h3>
                <p className="card-text text-neutral-400 mt-2  xl:w-[95%]">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 xl:mt-10 py-5 sm:py-6 border-t border-white/5 grid grid-cols-2 sm:flex sm:flex-wrap gap-y-6 gap-x-8">
                  <div className="space-y-1.5 col-span-2 sm:col-span-1">
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-wider">
                      {messages.projects.roleLabel}
                    </p>
                    <p className="text-sm sm:text-base text-neutral-200 font-medium">
                      {messages.projects.roleValue}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-wider">
                      {messages.projects.frameworkLabel}
                    </p>
                    <div className="flex items-center gap-2 text-sm sm:text-base text-neutral-200 font-medium">
                      {index === 0 || index === 1 ? (
                        <Blocks className="text-neutral-400 w-3.5 h-3.5" />
                      ) : (
                        <Pen className="text-neutral-400 w-3.5 h-3.5" />
                      )}
                      {p.stack}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-wider">
                      {messages.projects.animationLabel}
                    </p>
                    <div className="flex items-center gap-2 text-sm sm:text-base text-neutral-200 font-medium">
                      <Sparkles className="text-neutral-400 w-3.5 h-3.5" />
                      GSAP
                    </div>
                  </div>
                </div>
                {/* Tech Stack */}
                <a
                  className="w-fit  mt-6 lg:mt-10 xl:mt-14"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={p.url}
                >
                  <Button
                    ref={null}
                    className=" w-full lg:w-fit scale-animation"
                  >
                    {messages.projects.cta}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

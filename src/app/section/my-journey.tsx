import { Pen, Zap, Rocket } from "lucide-react";
import Image from "next/image";

export default function MyJourney() {
  const myJourney = [
    {
      title: "2023 – First lines of code",
      icon: "/thunder.svg",
      description:
        "I wrote my first lines of code and instantly got hooked. HTML, CSS, JS — everything felt new, challenging, and exciting.",
      button: "Getting Started",
    },
    {
      title: "2024 — Discovering UI / UX",
      icon: "/pen.svg",
      description:
        "I started diving deep into UI & UX. Structure, colors, spacing — everything suddenly made sense. I wanted to build interfaces that feel good, not just work.",
      button: "Levelling Up",
    },
    {
      title: "2025 — Learning  GSAP",
      icon: "/rocket.svg",
      description:
        "I explored motion design and fell in love with it. Timelines, easing, micro-interactions — GSAP opened a whole new world of creative possibilities.",
      button: "Going Deeper",
    },
  ];

  const positions = ["-top-50", "right-20 -top-70", "left-20 -top-70"];
  const rotations = ["rotate-2", "-rotate-2", "rotate-2"];

  return (
    <div>
      <h2 className="heading-2 text-center">My Journey</h2>
      <p className="body-text text-center mt-2 md:mt-4 xl:mt-6">
        How I became obsessed with building beautiful web{" "}
        <span className="relative">
          experiences.
          <Image
            src="/abstract-line.svg"
            alt=""
            width={20}
            height={20}
            className="absolute -bottom-8 xl:-bottom-10.5 left-2 w-full h-auto"
          />
        </span>
      </p>
      <div className="flex flex-col xl:flex-row mt-10 xl:mt-14 gap-8">
        {myJourney.map((j, i) => (
          <div
            style={{ cornerShape: "squircle" }}
            className={`flex flex-col  bg-[#212121] shadow-white-blur p-6 rounded-3xl overflow-hidden relative xl:w-full ${rotations[i]} `}
            key={i}
          >
            <div className="relative z-10">
              <div className="flex flex-row justify-between">
                <h4 className="heading-4">{j.title}</h4>
                <div className=" rounded-full w-10 h-10 flex items-center justify-center shrink-0 bg-white/5 text-zinc-300 ring-1 ring-inset ring-white/10">
                  {i === 0 ? (
                    <Zap className="w-3.5 h-3.5 xl:w-5 xl:h-5" />
                  ) : i === 1 ? (
                    <Pen className="w-3.5 h-3.5 xl:w-5 xl:h-5" />
                  ) : (
                    <Rocket className="w-3.5 h-3.5 xl:w-5 xl:h-5" />
                  )}
                </div>
              </div>
              <p className="card-text mt-4 md:mt-4 xl:mt-6 text-neutral-400">
                {j.description}
              </p>
              <p
                style={{ cornerShape: "squircle" }}
                className=" mt-6 xl:mt-10 border-[0.5px] border-white/10 bg-white/5 text-zinc-300 backdrop-blur-sm rounded-full shadow-white-blur w-fit p-2 text-[14px] xl:text-[16px]"
              >
                {j.button}
              </p>
            </div>
            <Image
              src="/mini-color-gradient.svg"
              alt=""
              width={500}
              height={500}
              className={`absolute z-1 blur-3xl w-[750px] h-[648px]  ${positions[i]}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

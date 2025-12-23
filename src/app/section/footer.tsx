"use client";

import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { createFooterAnimation } from "../animations/footer";
import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Paris",
      });

      setTime(`${timeString} Paris`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);
  const refs = {
    container: useRef<HTMLImageElement>(null),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const element = {
        container: refs.container.current!,
      };
      createFooterAnimation(element);
    });
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navs = [
    {
      name: "Home",
    },
    {
      name: "Who I am",
    },
    {
      name: "Projects I’ve worked on",
    },
    {
      name: "My Journey",
    },
    {
      name: "How I Work",
    },
  ];
  const socialsMedia = [
    { icon: Twitter, link: "https://x.com/UnderDev0" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/ulasonder/" },
    { icon: Github, link: "https://github.com/Onderito" },
  ];
  return (
    <div
      ref={refs.container}
      style={{ cornerShape: "squircle" }}
      className="bg-[#080808] p-4 xl:p-8 rounded-3xl relative overflow-hidden"
    >
      {/* WRAPPER: en desktop on met 2 colonnes (haut) */}
      <div className="flex flex-col gap-4 lg:flex-row md:justify-normal lg:gap-16 xl:gap-44  lg:items-start">
        {/* Colonne gauche : identité + texte + réseaux */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 bg-[#262626] rounded-full shadow-white-blur flex justify-center items-center text-[13px]">
              UÖ
            </div>
            <h5 className="font-semibold">Ulas Önder</h5>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg text-neutral-500 max-w-sm mt-4 xl:mt-2 font-light ">
              Crafting fluid web experiences with Next.js, Tailwind, and GSAP.
              Focused on interaction design and performance
            </p>

            <div className="flex gap-4 xl:mt-4">
              {socialsMedia.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ cornerShape: "squircle" }}
                  className="p-2 rounded-lg bg-white/5 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center shadow-white-blur"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <ul className="font-regular mt-4 lg:mt-1 flex flex-col gap-4">
          SiteMap
          {navs.map((nav, i) => (
            <li
              key={i}
              className="lg:mt-4 text-neutral-500 text-sm w-fit hover:text-white "
            >
              {nav.name}
            </li>
          ))}
        </ul>
        <ul className="font-regular mt-4 lg:mt-1 flex flex-col gap-4">
          Contact
          <li className="text-neutral-500 lg:mt-4 text-sm hover:text-white">
            ulas.onder@outlook.fr
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row lg:justify-between lg:items-center mt-10 border-t-[0.5px] border-[#292929] pt-10 ">
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 lg:flex-row lg:justify-start text-neutral-600 text-sm font-light">
          <p className="cursor-pointer hover:text-white">
            © 2025 Ulas Önder. All rights reserved
          </p>
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white">Terms of Service</p>
        </div>
        <div className=" mt-2 lg:mt-0 p-1.5 rounded-[10px] bg-[#151515] shadow-white-blur flex w-fit mx-auto lg:mx-0 items-center gap-2 px-4">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span
            style={{ cornerShape: "squircle" }}
            className=" font-extralight text-sm "
          >
            {time}
          </span>
        </div>
      </div>
      <Image
        className="hidden xl:block absolute -top-20 -right-20 blur-[150px] "
        src="/star.svg"
        alt="Star"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}

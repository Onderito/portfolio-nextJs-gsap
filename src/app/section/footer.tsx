"use client";
import { Github, Twitter, Linkedin } from "lucide-react";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createFooterAnimation } from "../animations/footer";
import { useLocale, useMessages } from "../i18n/use-messages";
import LanguageSwitch from "../ui/language-switch";
import AuroraOverlay from "../ui/aurora-overlay";

export default function Footer() {
  const messages = useMessages();
  const locale = useLocale();

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
  const navs = messages.footer.navs;
  const socialsMedia = [
    {
      icon: Twitter,
      link: "https://x.com/UnderDev0",
      label: messages.footer.twitterLabel,
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/ulasonder/",
      label: messages.footer.linkedinLabel,
    },
    {
      icon: Github,
      link: "https://github.com/Onderito",
      label: messages.footer.githubLabel,
    },
  ];
  return (
    <div
      ref={refs.container}
      className="bg-[#080808] p-4 xl:p-8 rounded-3xl relative overflow-hidden  webkit-clip"
    >
      <AuroraOverlay className="opacity-60" />
      {/* WRAPPER: en desktop on met 2 colonnes (haut) */}
      <div className="relative z-10 flex flex-col gap-4 lg:flex-row md:justify-normal lg:gap-16 xl:gap-44  lg:items-start">
        {/* Colonne gauche : identité + texte + réseaux */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 bg-[#262626] rounded-full shadow-white-blur flex justify-center items-center text-[13px]">
              UÖ
            </div>
            <h3 className="font-semibold">Ulas Önder</h3>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg text-neutral-400 max-w-sm mt-4 xl:mt-2 font-light ">
              {messages.footer.tagline}
            </p>

            <div className="flex gap-4 xl:mt-4">
              {socialsMedia.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg bg-white/5 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center shadow-white-blur"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <ul className="font-regular mt-4 lg:mt-1 flex flex-col gap-4">
          <li>{messages.footer.sitemap}</li>
          {navs.map((nav, i) => (
            <li
              key={i}
              className="lg:mt-4 text-neutral-400 text-sm w-fit hover:text-white "
            >
              {nav}
            </li>
          ))}
        </ul>
        <ul className="font-regular mt-4 lg:mt-1 flex flex-col gap-4">
          <li>{messages.footer.contact}</li>
          <li className="text-neutral-400 lg:mt-4 text-sm hover:text-white">
            ulas.onder@outlook.fr
          </li>
        </ul>
      </div>
      <div className="relative z-10 flex flex-col gap-2 lg:gap-4 lg:flex-row lg:justify-between lg:items-center mt-10 border-t-[0.5px] border-[#292929] pt-10 ">
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 lg:flex-row lg:justify-start text-neutral-400 text-sm font-light">
          <p className=" hover:text-white">{messages.footer.rights}</p>
          <a
            href={`/${locale}/privacy-policy`}
            target="_blank"
            rel="noreferrer"
            aria-label={messages.footer.privacy}
          >
            <p className="cursor-pointer hover:text-white">
              {messages.footer.privacy}
            </p>
          </a>
          <a
            href={`/${locale}/terms-of-service`}
            target="_blank"
            rel="noreferrer"
            aria-label={messages.footer.terms}
          >
            <p className="cursor-pointer hover:text-white">
              {messages.footer.terms}
            </p>
          </a>
        </div>
        <div className="flex items-center gap-3 mx-auto lg:mx-0 mt-2 lg:mt-0">
          <LanguageSwitch />
          <div className="p-2.5 rounded-[10px] bg-[#151515] shadow-white-blur flex w-fit items-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className=" font-extralight text-sm ">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

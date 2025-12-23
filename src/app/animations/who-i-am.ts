import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export const createWhoIAmAnimation = (refs: {
  container: HTMLElement;
  title: HTMLElement;
  picture: HTMLElement;
  presentationCard: HTMLElement;
  toolkitCard: HTMLElement;
  hireMeCard: HTMLElement;
  linkedinCard: HTMLElement;
  xCard: HTMLElement;
  devCard: HTMLElement;
}) => {
  gsap.registerPlugin(ScrollTrigger);

  const split = SplitText.create(refs.title, { type: "words, chars" });

  gsap.from(split.chars, {
    autoAlpha: 0,
    y: 50,
    stagger: 0.04,
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: refs.container,
      start: "top bottom-=200",
      end: "top center",
      scrub: 1,
    },
  });

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: refs.container,
        start: "top center",
        end: "bottom 70%",
        scrub: 1.5,
      },
    });

    const allElements = [
      refs.picture,
      refs.presentationCard,
      refs.toolkitCard,
      refs.hireMeCard,
      refs.linkedinCard,
      refs.xCard,
      refs.devCard,
    ];

    tl.set(allElements, { willChange: "transform" });

    tl.from(refs.picture, { x: -520, y: -140, rotate: -6, scale: 0.92 }, 0.05);

    tl.from(
      refs.presentationCard,
      { x: 660, y: -140, rotate: 4, scale: 0.92 },
      0.1
    );

    tl.from(refs.toolkitCard, { x: 520, y: -220, rotate: -4 }, 0.12);

    tl.from(refs.hireMeCard, { x: 260, y: 120, rotate: 6, scale: 0.92 }, 0.14);

    tl.from(refs.linkedinCard, { x: -480, y: 40, scale: 0.9 }, 0.16);
    tl.from(refs.xCard, { x: -480, y: 40, scale: 0.9 }, 0.18);
    tl.from(refs.devCard, { x: 120, y: 260, scale: 0.9 }, 0.2);

    tl.to(allElements, { scale: 1, rotate: 0, ease: "power2.inOut" }, 0.55);

    tl.set(allElements, { willChange: "auto" });

    return tl;
  });
  return () => {
    mm.revert();
  };
};

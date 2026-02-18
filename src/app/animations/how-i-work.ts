import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { addSplitTextDescriptionAnimation, addSplitTextTitleAnimation } from "./Splittext/splittext";

export const createHowIWorkAnimation = (refs: {
  container: HTMLElement;
  title: HTMLElement;
  subtitle: HTMLElement;
  cards: HTMLElement[];
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: refs.container,
      start: "top bottom-=200",
      end: "top center",
    },
  });
  const split = addSplitTextTitleAnimation(tl, refs.title, {
    split: { aria: "none" },
  });
  const splitSubTitle = addSplitTextDescriptionAnimation(tl, refs.subtitle);

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {
    const cards = refs.cards.filter(Boolean);

    gsap.set(cards, { autoAlpha: 0, y: 80, rotation: 3,  scale: 0.9, willChange: "transform, opacity" 
    });
    gsap.to(cards, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      ease: "power4.out",
      duration: 0.9,
      stagger: {
        each: 0.08,
        ease: "power2.inOut"
      },
      scrollTrigger: {
        trigger: refs.container,
        start: "top center",
      },
      onComplete: () => {
        gsap.set(cards, { willChange: "auto" });
      }
    });
    return () => {};
  });
  return () => {
    split.revert();
    splitSubTitle.revert();
    mm.revert();
  };
};

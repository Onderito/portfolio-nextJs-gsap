import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

export const createMyJourneyAnimation = (refs: {
  container: HTMLElement;
  title: HTMLElement;
  subtitle: HTMLElement;
  cards: HTMLElement[];
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const split = SplitText.create(refs.title, { type: "words, chars" });
  const splitSubTitle = SplitText.create(refs.subtitle, { type: "words, chars", aria: "none" });
  

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: refs.container,
      start: "top bottom-=200",
      end: "top center",
    },
  });
  tl.from(split.chars, {
    autoAlpha: 0,
    duration : 1.2,   
    y: 40,
    stagger: 0.03,
    ease: "power3.out",
    filter: "blur(5px)",
  });
  tl.from(splitSubTitle.words, 
    {
      autoAlpha: 0,
      duration: 1.2,
      y: 40,
      stagger: 0.03,
      ease: "power3.out",
      filter: "blur(5px)",
    },
    "<"
  );

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {
    const cards = refs.cards.filter(Boolean); // sécurité

    gsap.set(cards, { autoAlpha: 0, y: 80, scale: 0.9, willChange: "transform, opacity" });

    gsap.to(cards, {
      autoAlpha: 1,
      y:0,
      scale: 1,
      duration: 0.8,
      ease: "power4.out",
      stagger: {
        each: 0.08,
        ease: "power2.inOut"
      },
      scrollTrigger: {
        trigger: refs.container,
        start: "top center",
      },
      onComplete: () => {
        gsap.set(cards, { willChange: "auto"})
      }
    });
    return () => {};
  });
  return () => {
    split.revert();
    mm.revert();
  };
};

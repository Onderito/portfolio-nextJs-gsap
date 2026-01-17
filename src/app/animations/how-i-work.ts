import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export const createHowIWorkAnimation = (refs: {
  container: HTMLElement;
  title: HTMLElement;
  subtitle: HTMLElement;
  cards: HTMLElement[];
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const split = SplitText.create(refs.title, {
    type: "words, chars",
    aria: "none",
  });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: refs.container,
      start: "top bottom-=200",
      end: "top center",
      scrub: 1,
    },
  });
  tl.from(split.chars, {
    autoAlpha: 0,
    duration : 1.25,
    y: 40,
    stagger: 0.03,
    ease: "power3.out",
    filter: "blur(10px)",
  });
  tl.from(refs.subtitle, 
    {
      autoAlpha: 0,
      y: 40,
      ease: "power3.out",
    },
    "-=0.9"
  );

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {
    const cards = refs.cards.filter(Boolean);

    gsap.set(cards, { autoAlpha: 0, y: 250,  scale: 0.9, willChange: "transform, opacity" 
    });
    gsap.to(cards, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      stagger: 0.2,
      
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: refs.container,
        start: "top center",
        end: "top 25%",
        scrub: 1,
      },
      onComplete: () => {
        gsap.set(cards, { willChange: "auto" }); // Cleanup perf
      }
    });
    return () => {};
  });
  return () => {
    split.revert();
    mm.revert();
  };
};

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export const createMyJourneyAnimation = (refs: {
  container: HTMLElement;
  title: HTMLElement;
  subtitle: HTMLElement;
  cards: HTMLElement[];
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const split = SplitText.create(refs.title, { type: "words, chars" });
  

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: refs.container,
      start: "top bottom-=100",
      end: "top center",
      scrub: true,
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
    const cards = refs.cards.filter(Boolean); // sécurité

    gsap.set(cards, { autoAlpha: 0, y: 40, scale: 0.8, filter: "blur(10px)" });

    gsap.to(cards, {
      autoAlpha: 1,
      y:0,
      filter: "blur(0px)",
      duration: 1.25,
      scale: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: refs.container,
        start: "top-=100 center",
        end: "top 25%",
        scrub: 1,
      },
    });
    return () => {};
  });
  return () => {
    split.revert();
    mm.revert();
  };
};

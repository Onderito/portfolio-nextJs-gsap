import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { addSplitTextTitleAnimation } from "./Splittext/splittext";

export const createMyProjectAnimation = (refs: {
  container: HTMLElement;
  title: HTMLElement;
  wrappers: HTMLElement[];
  cards: HTMLElement[];
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: refs.container,
      start: "top-=100 center",
    },
  });
  const split = addSplitTextTitleAnimation(tl, refs.title, {
    tween: { duration: 0.9, stagger: 0.02 },
  });

  const mm = gsap.matchMedia();
  const wrappers = refs.wrappers;
  const cards = refs.cards;

  mm.add("(min-width: 1280px)", () => {
    gsap.set(cards, { willChange: "transform, filter" });
    // ici je parcours tout les éléments du tableau wrappers
    wrappers.forEach((wrapper, i) => {
      const card = cards[i]; // je récupère l'élément card correspondant à l'index i
      if (!wrapper || !card) return; // si l'un des éléments est null, je retourne rien.

      const isLastCard = i === cards.length - 1; // on séléctionne le dernier élément du tableau cards 

      gsap.to(card, {
        force3D: true,   
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: `top ${60 + 10 * i}`,
          end: "bottom 600",
          endTrigger: refs.container,
          scrub: 1,
          pin: isLastCard ? false : wrapper,
          pinSpacing: false,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => {
      gsap.set(cards, { willChange: "auto" });
    };
  });
  return () => {
    split.revert();
    mm.revert();
  };
};

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export const createMyProjectAnimation = (refs: {
  container: HTMLElement;
  title: HTMLElement;
  wrappers: HTMLElement[];
  cards: HTMLElement[];
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const split = SplitText.create(refs.title, { type: "words, chars" });

  gsap.from(split.chars, {
    autoAlpha: 0,
    duration : 1.25,
    y: 40,
    stagger: 0.03,
    ease: "power3.out",
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: refs.container,
      start: "top bottom-=200",
      end: "top center",
      scrub: 1,
    },
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
      const scale = isLastCard ? 1 : 0.9 + 0.025 * i; 
      const rotation = isLastCard ? 0 : -10;

      gsap.to(card, {
        scale,
        rotationY: rotation,     
        filter: i === cards.length - 1 ? "blur(0px)" : "blur(1.5px)",
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: `top ${60 + 10 * i}`,
          end: "bottom 550",
          endTrigger: refs.container,
          scrub: 0.5,
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

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
    y: 10,
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
  const wrappers = refs.wrappers;
  const cards = refs.cards;

  mm.add("(min-width: 1280px)", () => {
    // ici je parcours tout les éléments du tableau wrappers
    wrappers.forEach((wrapper, i) => {
      const card = cards[i]; // je récupère l'élément card correspondant à l'index i
      if (!wrapper || !card) return; // si l'un des éléments est null, je retourne rien.

      let scale = 1;
      let rotation = 0;

      if (i !== cards.length - 1) {
        scale = 0.9 + 0.025 * i;
        rotation = -10;
      }

      gsap.to(card, {
        scale,
        rotationY: rotation,
        filter: i === cards.length - 1 ? "blur(0px)" : "blur(1.5px)",
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top " + (60 + 10 * i),
          end: "bottom 550",
          endTrigger: refs.container,
          scrub: true,
          pin: wrapper,
          pinSpacing: i === wrappers.length - 1 ? true : false,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => {};
  });
  return () => {
    split.revert();
    mm.revert();
  };
};

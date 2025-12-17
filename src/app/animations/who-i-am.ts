import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

  // Important: les cards doivent déjà être en "bento" via ton CSS.
  // L'anim va partir d'un état "déstructuré" (x/y/scale/rotation)
  // pour revenir à x:0 y:0 (donc pile sur la mise en page).
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: refs.container,
      start: "top top",
      end: "+=900", // distance de scroll dédiée à l'animation
      scrub: 1, // fluide (inertie)
      pin: true, // sensation "comme un pin"
      anticipatePin: 1,
      // markers: true,
    },
    defaults: { ease: "none" }, // avec scrub, "none" donne un rendu hyper clean
  });

  // Optionnel: on cache au départ (évite le flash)
  tl.set(
    [
      refs.title,
      refs.picture,
      refs.presentationCard,
      refs.toolkitCard,
      refs.hireMeCard,
      refs.linkedinCard,
      refs.xCard,
      refs.devCard,
    ],
    { willChange: "transform" }
  );

  // 1) Title arrive
  tl.from(refs.title, { autoAlpha: 0, y: 60, scale: 0.95 }, 0);

  // 2) Tout est "déstructuré" au début, puis se met en place (bento) en scrollant
  tl.from(refs.picture, { x: -220, y: -140, rotate: -6, scale: 0.92 }, 0.05);

  tl.from(
    refs.presentationCard,
    { x: -160, y: 140, rotate: 4, scale: 0.92 },
    0.1
  );

  tl.from(refs.toolkitCard, { x: 220, y: -120, rotate: -4, scale: 0.92 }, 0.12);

  tl.from(refs.hireMeCard, { x: 260, y: 120, rotate: 6, scale: 0.92 }, 0.14);

  tl.from(refs.linkedinCard, { x: -260, y: 40, scale: 0.9 }, 0.16);
  tl.from(refs.xCard, { x: 260, y: 40, scale: 0.9 }, 0.18);
  tl.from(refs.devCard, { y: 220, scale: 0.9, clearProps: "transform" }, 0.2);

  // 3) Petit "settle" final (micro scale) pour l'effet “ça se clippe”
  tl.to(
    [
      refs.picture,
      refs.presentationCard,
      refs.toolkitCard,
      refs.hireMeCard,
      refs.linkedinCard,
      refs.xCard,
      refs.devCard,
    ],
    { scale: 1, rotate: 0 },
    0.55
  );

  return tl;
};

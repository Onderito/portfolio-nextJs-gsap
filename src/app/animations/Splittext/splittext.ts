import { gsap } from "gsap/dist/gsap";
import SplitText from "gsap/dist/SplitText";

type SplitTextInstance = {
  chars?: Element[];
  words?: Element[];
  revert: () => void;
};

type AriaOption = "none" | "auto" | "hidden";

type SplitTextOptions = {
  position?: gsap.Position;
  split?: {
    type?: string;
    aria?: AriaOption;
  };
  tween?: gsap.TweenVars;
};

export function addSplitTextTitleAnimation(
  tl: gsap.core.Timeline,
  element: HTMLElement,
  options: SplitTextOptions = {},
): SplitTextInstance {
  const split = SplitText.create(element, {
    type: options.split?.type ?? "words, chars",
    aria: options.split?.aria ?? "none",
  }) as unknown as SplitTextInstance;

  tl.from(
    split.words ?? [],
    {
      force3D: true,
      autoAlpha: 0,
      duration: 0.9,
      y: 20,
      stagger: 0.03,
      ease: "power2.out",
      filter: "blur(2px)",
      ...options.tween,
    },
    options.position ?? "<",
  );

  return split;
}

export function addSplitTextDescriptionAnimation(
  tl: gsap.core.Timeline,
  element: HTMLElement,
  options: SplitTextOptions = {},
): SplitTextInstance {
  const split = SplitText.create(element, {
    type: options.split?.type ?? "words",
    aria: options.split?.aria ?? "none",
  }) as unknown as SplitTextInstance;

  tl.from(
    split.words ?? [],
    {
      force3D: true,
      autoAlpha: 0,
      duration: 0.9,
      y: 20,
      stagger: 0.03,
      ease: "power2.out",
      filter: "blur(2px)",
      ...options.tween,
    },
    options.position ?? "<",
  );

  return split;
}

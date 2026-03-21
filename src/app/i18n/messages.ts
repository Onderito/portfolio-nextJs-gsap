import { normalizeLocale, type Locale } from "./locales";

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    greeting?: string;
    titleLine1: string;
    titleEmphasis: string;
    subtitleLine1: string;
    subtitleLine2: string;
    cta: string;
    profileAlt: string;
  };
  whoIAm: {
    title: string;
    pictureAlt: string;
    name: string;
    introBefore: string;
    highlight: string;
    introAfter: string;
    toolkitTitle: string;
    toolkitIntro: string;
    toolkitItems: Array<{
      label: string;
      desc: string;
    }>;
    cta: string;
    linkedinAlt: string;
    xAlt: string;
    devMark: string;
  };
  projects: {
    titleStart: string;
    titleEmphasis: string;
    roleLabel: string;
    roleValue: string;
    frameworkLabel: string;
    animationLabel: string;
    cta: string;
    items: Array<{
      image: string;
      title: string;
      desc: string;
      stack: string;
      url: string;
    }>;
  };
  journey: {
    title: string;
    subtitleLine1: string;
    subtitleLine2: string;
    items: Array<{
      title: string;
      description: string;
      badge: string;
    }>;
  };
  howIWork: {
    title: string;
    subtitle: string;
    cards: Array<{
      tag: string;
      title: string;
      desc: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
    sitemap: string;
    navs: string[];
    contact: string;
    rights: string;
    privacy: string;
    terms: string;
    language: string;
    twitterLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  legal: {
    lastUpdatedLabel: string;
    lastUpdatedDate: string;
    privacy: {
      title: string;
      metaTitle: string;
      metaDescription: string;
      intro: string;
      sections: Array<{ title: string; body: string }>;
    };
    terms: {
      title: string;
      metaTitle: string;
      metaDescription: string;
      intro: string;
      sections: Array<{ title: string; body: string }>;
    };
  };
};

const messages: Record<Locale, Messages> = {
  fr: {
    meta: {
      title: "Ulas Önder, Développeur Front-end & Designer",
      description:
        "Je conçois et développe des sites web rapides, modernes et orientés conversion (Next.js, Tailwind, GSAP).",
    },
    hero: {
      titleLine1: "Des sites haut de gamme",
      titleEmphasis: "pour des projets uniques.",
      subtitleLine1: "Des sites rapides, soignés et pensés",
      subtitleLine2: "pour mettre en valeur des projets ambitieux.",
      cta: "Réserve ton appel",
      profileAlt: "Ulas Önder, Développeur Front-end",
    },
    whoIAm: {
      title: "Qui je suis",
      pictureAlt: "Portrait de Ulas",
      name: "Ulas Önder",
      introBefore: "Design Engineer",
      highlight: "J’imagine, design et code des expériences web performantes,",
      introAfter:
        "pensées pour capter l’attention, raconter une histoire et convertir.",
      toolkitTitle: "Expertises",
      toolkitIntro: "Clarté, rythme et performance au service du projet.",
      toolkitItems: [
        {
          label: "Design",
          desc: "Interfaces claires et soignées.",
        },
        {
          label: "Motion",
          desc: "Animations fluides et utiles.",
        },
        {
          label: "Performance",
          desc: "Site rapide et agréable.",
        },
        {
          label: "SEO",
          desc: "Base saine pour la visibilité.",
        },
      ],
      cta: "Réserve ton appel",
      linkedinAlt: "LinkedIn",
      xAlt: "X",
      devMark: "ÖnderDev",
    },
    projects: {
      titleStart: "Projets",
      titleEmphasis: "sur lesquels j’ai travaillé",
      roleLabel: "Rôle",
      roleValue: "Design & Développement",
      frameworkLabel: "Framework",
      animationLabel: "Animation",
      cta: "Voir le projet",
      items: [
        {
          image: "/private-driver.webp",
          title: "Vip Limo Nice, Chauffeur privé",
          desc: "Design UX/UI complet et développement front-end. J’ai travaillé la hiérarchie visuelle pour maximiser le Call-to-Action. Le site a été construit avec Next.js pour la performance et GSAP pour des animations fluides, afin d’offrir une expérience premium.",
          stack: "Next.js",
          url: "https://viplimonice.com/",
        },
        {
          image: "/calmly.webp",
          title: "Calmly, Trouvez votre paix intérieure",
          desc: "Design UX/UI complet et développement front-end. Calmly est une landing page minimaliste construite avec Next.js, centrée sur la clarté, une hiérarchie visuelle apaisante et des animations GSAP subtiles pour renforcer l’identité zen de l’app. Objectif : une expérience fluide, légère et immersive.",
          stack: "Next.js",
          url: "https://calmly-app-zeta.vercel.app/",
        },
        {
          image: "/clarity.webp",
          title: "Clarity, Focus sur l’essentiel",
          desc: "Design UX/UI et développement front-end Webflow. Clarity est une landing page propre et efficace, créée sur Webflow avec des animations GSAP sur mesure pour donner vie à l’interface. L’objectif : une hiérarchie nette, un layout intuitif, moderne et orienté conversion.",
          stack: "Webflow",
          url: "https://clarity-d63997.webflow.io/",
        },
      ],
    },
    journey: {
      title: "Mon parcours",
      subtitleLine1: "Comment je suis devenu obsédé par la création",
      subtitleLine2: "d’expériences web soignées.",
      items: [
        {
          title: "2023, Premières lignes de code",
          description:
            "J’ai écrit mes premières lignes de code et j’ai tout de suite accroché. HTML, CSS, JS, tout semblait nouveau, stimulant et excitant.",
          badge: "01 Les débuts",
        },
        {
          title: "2024, UI / UX",
          description:
            "Je me suis plongé dans l’UI & l’UX. Structure, couleurs, espacements, tout a commencé à prendre sens. Je voulais créer des interfaces agréables, pas seulement fonctionnelles.",
          badge: "02 Le déclic",
        },
        {
          title: "2025, Apprendre GSAP",
          description:
            "J’ai exploré le motion design et je suis tombé amoureux. Timelines, easing, micro-interactions, GSAP a ouvert un nouveau monde de possibilités créatives.",
          badge: "03 Le mouvement",
        },
      ],
    },
    howIWork: {
      title: "Ma méthode",
      subtitle:
        "Un process clair pour livrer un site propre, performant et prêt à convertir.",
      cards: [
        {
          tag: "Cadrer, planifier, exécuter",
          title: "Stratégie d’abord",
          desc: "Je commence par comprendre les objectifs, l’audience et le parcours utilisateur pour définir un plan clair avant d’exécuter.",
        },
        {
          tag: "Structure & esthétique",
          title: "Un design qui a du sens",
          desc: "Je conçois des interfaces intuitives et minimalistes, en me concentrant sur l’ergonomie, l’accessibilité et l’esthétique.",
        },
        {
          tag: "Animation utile",
          title: "Animations fluides",
          desc: "J’utilise l’animation avec intention pour améliorer l’expérience, en restant fluide et agréable.",
        },
        {
          tag: "Rapide et fiable",
          title: "Performance & code propre",
          desc: "Je priorise la performance, la lisibilité et la maintenabilité pour livrer des sites rapides et robustes.",
        },
      ],
    },
    pricing: {
      title: "Travaillons ensemble",
      subtitle: "Choisissez l’offre qui correspond à vos objectifs.",
    },
    footer: {
      tagline:
        "Je conçois des expériences web fluides avec Next.js, Tailwind et GSAP, interaction, performance, conversion.",
      sitemap: "Plan du site",
      navs: [
        "ACCUEIL",
        "QUI JE SUIS",
        "PROJETS CHOISIS",
        "MON PARCOURS",
        "MA METHODE",
        "TARIFS",
      ],
      contact: "Contact",
      rights: "© 2025 Ulas Önder. Tous droits réservés",
      privacy: "Politique de confidentialité",
      terms: "Conditions d’utilisation",
      language: "Langue",
      twitterLabel: "Voir mon Twitter",
      linkedinLabel: "Voir mon Linkedin",
      githubLabel: "Voir mon Github",
    },
    legal: {
      lastUpdatedLabel: "Dernière mise à jour",
      lastUpdatedDate: "décembre 2025",
      privacy: {
        title: "Politique de confidentialité",
        metaTitle: "Politique de confidentialité | Ulas Önder",
        metaDescription:
          "Politique de confidentialité du portfolio personnel de Ulas Önder. Ce site ne collecte pas de données personnelles et n’utilise pas de cookies ni d’analytics.",
        intro:
          "Ce site est un portfolio personnel détenu et exploité par Ulas Önder.",
        sections: [
          {
            title: "1. Collecte de données",
            body: "Ce site ne collecte, ne stocke et ne traite aucune donnée personnelle. Il n’y a pas de formulaire de contact, de comptes utilisateur, d’outils d’analytics ou de technologies de tracking.",
          },
          {
            title: "2. Cookies",
            body: "Ce site n’utilise pas de cookies, pixels de suivi ou technologies similaires.",
          },
          {
            title: "3. Services tiers",
            body: "Aucun service tiers n’est utilisé pour collecter ou traiter des données utilisateur.",
          },
          {
            title: "4. Sécurité des données",
            body: "Puisqu’aucune donnée personnelle n’est collectée, aucune information personnelle n’est stockée ou transmise.",
          },
          {
            title: "5. Modifications de cette politique",
            body: "Si ce site met en place à l’avenir des fonctionnalités impliquant la collecte de données personnelles, cette politique sera mise à jour en conséquence.",
          },
          {
            title: "6. Contact",
            body: "Pour toute question concernant cette politique de confidentialité, vous pouvez contacter Ulas Önder.",
          },
        ],
      },
      terms: {
        title: "Conditions d’utilisation",
        metaTitle: "Conditions d’utilisation | Ulas Önder",
        metaDescription:
          "Conditions d’utilisation du portfolio personnel de Ulas Önder. Ces conditions encadrent l’accès et l’usage du site et de son contenu.",
        intro:
          "Ce site est un portfolio personnel détenu et exploité par Ulas Önder. En accédant à ce site ou en l’utilisant, vous acceptez d’être lié par les présentes conditions.",
        sections: [
          {
            title: "1. Objet du site",
            body: "Ce site est fourni uniquement à des fins d’information et de présentation professionnelle. Il présente des projets, des compétences et une expérience.",
          },
          {
            title: "2. Propriété intellectuelle",
            body: "Tous les contenus de ce site (textes, code, designs, images, animations, etc.) sont la propriété de Ulas Önder sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.",
          },
          {
            title: "3. Usage acceptable",
            body: "Vous vous engagez à utiliser ce site uniquement à des fins légales et d’une manière qui ne porte pas atteinte aux droits d’autrui et ne restreint pas leur utilisation du site.",
          },
          {
            title: "4. Limitation de responsabilité",
            body: "Le contenu de ce site est fourni « en l’état » sans garantie. Ulas Önder ne pourra être tenu responsable des dommages résultant de l’utilisation ou de l’impossibilité d’utiliser ce site.",
          },
          {
            title: "5. Liens externes",
            body: "Ce site peut contenir des liens vers des sites externes. Ils sont fournis par commodité et Ulas Önder n’assume aucune responsabilité quant au contenu ou aux pratiques de ces sites tiers.",
          },
          {
            title: "6. Modifications des conditions",
            body: "Ces conditions peuvent être mises à jour à tout moment. L’utilisation continue du site après modification vaut acceptation des conditions révisées.",
          },
          {
            title: "7. Droit applicable",
            body: "Ces conditions sont régies et interprétées conformément aux lois françaises.",
          },
        ],
      },
    },
  },
  en: {
    meta: {
      title: "Ulas Önder, Front-end Developer & Designer",
      description:
        "I design and build fast, modern, conversion-focused websites (Next.js, Tailwind, GSAP).",
    },
    hero: {
      titleLine1: "High-end websites",
      titleEmphasis: "for unique projects.",
      subtitleLine1: "Fast, refined websites designed",
      subtitleLine2: "to elevate ambitious projects.",
      cta: "Let’s Talk",
      profileAlt: "Ulas Önder, Front-end Developer",
    },
    whoIAm: {
      title: "Who I Am",
      pictureAlt: "Ulas Profile",
      name: "Ulas Önder",
      introBefore: "Design Engineer.",
      highlight: "I imagine, design, and build high-performing web experiences",
      introAfter: "crafted to capture attention, tell a story, and convert.",
      toolkitTitle: "Expertise",
      toolkitIntro:
        "Clarity, rhythm and performance in service of the project.",
      toolkitItems: [
        {
          label: "Design",
          desc: "Clear and refined interfaces.",
        },
        {
          label: "Motion",
          desc: "Fluid and purposeful motion.",
        },
        {
          label: "Performance",
          desc: "Fast and smooth experience.",
        },
        {
          label: "SEO",
          desc: "Clean base for visibility.",
        },
      ],
      cta: "Let’s Talk",
      linkedinAlt: "LinkedIn",
      xAlt: "X",
      devMark: "ÖnderDev",
    },
    projects: {
      titleStart: "Projects",
      titleEmphasis: "I’ve worked on",
      roleLabel: "Role",
      roleValue: "Design & Development",
      frameworkLabel: "Framework",
      animationLabel: "Animation",
      cta: "See the Experience",
      items: [
        {
          image: "/private-driver.webp",
          title: "Vip Limo Nice - Private driver services",
          desc: "Full UX/UI Design and Frontend Development. I focused on designing the visual hierarchy to maximize the Call-to-Action. The site was built using Next.js for high performance and GSAP for engaging, fluid animations, ensuring a premium user experience.",
          stack: "Next.js",
          url: "https://viplimonice.com/",
        },
        {
          image: "/calmly.webp",
          title: "Calmly - Find Your Inner Peace",
          desc: "Full UX/UI Design and Frontend Development. Calmy is a minimalist landing page built with Next.js, where the focus was on clarity, calm visual hierarchy, and subtle GSAP animations to reinforce the app’s zen identity. The goal was to deliver a smooth, lightweight, and immersive user experience.",
          stack: "Next.js",
          url: "https://calmly-app-zeta.vercel.app/",
        },
        {
          image: "/clarity.webp",
          title: "Clarity - Focus on What Matters",
          desc: "UX/UI Design and Webflow Frontend Development. Clarity is a clean and efficient landing page, created using Webflow with custom GSAP animations to bring life to the interface. The objective was to maintain a sharp visual hierarchy while keeping the layout intuitive, modern, and highly conversion-oriented.",
          stack: "Webflow",
          url: "https://clarity-d63997.webflow.io/",
        },
      ],
    },
    journey: {
      title: "Journey",
      subtitleLine1: "How I became obsessed with building",
      subtitleLine2: "beautiful web experiences.",
      items: [
        {
          title: "2023 – First lines of code",
          description:
            "I wrote my first lines of code and instantly got hooked. HTML, CSS, JS, everything felt new, challenging, and exciting.",
          badge: "01 The Beginning",
        },
        {
          title: "2024, Discovering UI / UX",
          description:
            "I started diving deep into UI & UX. Structure, colors, spacing, everything suddenly made sense. I wanted to build interfaces that feel good, not just work.",
          badge: "02 The Shift",
        },
        {
          title: "2025, Learning GSAP",
          description:
            "I explored motion design and fell in love with it. Timelines, easing, micro-interactions, GSAP opened a whole new world of creative possibilities.",
          badge: "03 Motion",
        },
      ],
    },
    howIWork: {
      title: "My Approach",
      subtitle:
        "A streamlined process to deliver polished, high-performance web experiences.",
      cards: [
        {
          tag: "Think, Plan, Execute",
          title: "Strategy First",
          desc: "I start by understanding the goals, audience, and user journey to define a clear plan before executing.",
        },
        {
          tag: "Structure & Aesthetics",
          title: "Design That Makes Sense",
          desc: "I create intuitive, minimal interfaces, focusing on usability, accessibility, and aesthetics.",
        },
        {
          tag: "Animation with Purpose",
          title: "Smooth & Modern Animations",
          desc: "I use animation purposefully to enhance the user experience, keeping it smooth and engaging.",
        },
        {
          tag: "Fast, Reliable",
          title: "Performance & Clean Code",
          desc: "I prioritize performance, clean code, and maintainability to ensure fast and reliable websites.",
        },
      ],
    },
    pricing: {
      title: "Let’s work together",
      subtitle: "Choose the package that matches your goals.",
    },
    footer: {
      tagline:
        "Crafting fluid web experiences with Next.js, Tailwind, and GSAP. Focused on interaction design and performance",
      sitemap: "SiteMap",
      navs: [
        "HOME",
        "WHO I AM",
        "SELECTED PROJECTS",
        "MY JOURNEY",
        "My Approach",
        "PRICING",
      ],
      contact: "Contact",
      rights: "© 2025 Ulas Önder. All rights reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      language: "Language",
      twitterLabel: "Visit my Twitter",
      linkedinLabel: "Visit my Linkedin",
      githubLabel: "Visit my Github",
    },
    legal: {
      lastUpdatedLabel: "Last updated",
      lastUpdatedDate: "December 2025",
      privacy: {
        title: "Privacy Policy",
        metaTitle: "Privacy Policy | Ulas Önder",
        metaDescription:
          "Privacy Policy for the personal portfolio website of Ulas Önder. This website does not collect personal data and does not use cookies or analytics.",
        intro:
          "This website is a personal portfolio owned and operated by Ulas Önder.",
        sections: [
          {
            title: "1. Data Collection",
            body: "This website does not collect, store, or process any personal data. There are no contact forms, user accounts, analytics tools, or tracking technologies in use.",
          },
          {
            title: "2. Cookies",
            body: "This website does not use cookies, tracking pixels, or similar technologies.",
          },
          {
            title: "3. Third-Party Services",
            body: "No third-party services are used to collect or process user data.",
          },
          {
            title: "4. Data Security",
            body: "Since no personal data is collected, no personal information is stored or transmitted.",
          },
          {
            title: "5. Changes to This Policy",
            body: "If this website later implements features that involve personal data collection, this Privacy Policy will be updated accordingly.",
          },
          {
            title: "6. Contact",
            body: "If you have any questions regarding this Privacy Policy, you may contact Ulas Önder.",
          },
        ],
      },
      terms: {
        title: "Terms of Service",
        metaTitle: "Terms of Service | Ulas Önder",
        metaDescription:
          "Terms of Service for the personal portfolio website of Ulas Önder. These terms govern access to and use of the website and its content.",
        intro:
          "This website is a personal portfolio owned and operated by Ulas Önder. By accessing or using this website, you agree to be bound by these Terms of Service.",
        sections: [
          {
            title: "1. Purpose of the Website",
            body: "This website is provided for informational and professional presentation purposes only. It showcases projects, skills, and work experience.",
          },
          {
            title: "2. Intellectual Property",
            body: "All content on this website, including but not limited to text, code, designs, images, and animations, is the property of Ulas Önder unless otherwise stated. Any reproduction, distribution, or use without prior written permission is prohibited.",
          },
          {
            title: "3. Acceptable Use",
            body: "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit their use of the website.",
          },
          {
            title: "4. Limitation of Liability",
            body: "The content of this website is provided “as is” without warranties of any kind. Ulas Önder shall not be liable for any damages resulting from the use or inability to use this website.",
          },
          {
            title: "5. External Links",
            body: "This website may contain links to external websites. These links are provided for convenience only, and no responsibility is assumed for the content or practices of third-party websites.",
          },
          {
            title: "6. Changes to These Terms",
            body: "These Terms of Service may be updated at any time. Continued use of the website after changes constitutes acceptance of the revised terms.",
          },
          {
            title: "7. Governing Law",
            body: "These Terms shall be governed by and construed in accordance with the laws of France.",
          },
        ],
      },
    },
  },
};

export function getMessages(locale: Locale | string | undefined): Messages {
  const normalized = normalizeLocale(locale);
  return messages[normalized];
}

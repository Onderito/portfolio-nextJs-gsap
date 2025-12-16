import Image from "next/image";
import Button from "../ui/button";
import { Blocks, Sparkles, Pen } from "lucide-react";

export default function MyProject() {
  const projects = [
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
      url: "https://clarity-d63997.webflow.io/",
    },
    {
      image: "/clarity.webp",
      title: "Clarity - Focus on What Matters",
      desc: "UX/UI Design and Webflow Frontend Development. Clarity is a clean and efficient landing page, created using Webflow with custom GSAP animations to bring life to the interface. The objective was to maintain a sharp visual hierarchy while keeping the layout intuitive, modern, and highly conversion-oriented.",
      stack: "Webflow",
      url: "https://clarity-d63997.webflow.io/",
    },
    {
      image: "/surf.webp",
      title: "Sealocker - Find Your Next Wave",
      desc: "Collaborative UX/UI and Frontend Development project carried out during my apprenticeship. I worked on interface implementation, component structure, and performance-oriented development while following a real production workflow. This experience allowed me to apply industry best practices and contribute to a professional, team-driven project.",
      stack: "Webflow",
      url: "https://www.sealocker.fr/",
    },
  ];
  return (
    <div>
      <h2 className="heading-2 text-center">
        Projects <span className="text-neutral-400 ">I’ve worked on</span>
      </h2>
      <div className="mt-10 xl:mt-14 flex flex-col gap-8">
        {projects.map((p, index) => (
          <div
            style={{ cornerShape: "squircle" }}
            className="bg-[#212121] p-2.5 rounded-3xl shadow-white-blur"
            key={index}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 h-full">
              <div className="relative group w-full">
                <div
                  style={{ cornerShape: "squircle" }}
                  className="relative aspect-4/3 sm:aspect-4/3 h-full w-full overflow-hidden rounded-2xl glass-border bg-neutral-900 shadow-2xl shadow-black/50"
                >
                  <Image
                    style={{ cornerShape: "squircle" }}
                    src={p.image}
                    alt={p.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover scale-animation"
                  />

                  <div className="absolute inset-0 runded-2xl border border-white/10 pointer-events-none"></div>
                </div>
              </div>

              <div className="lg:flex lg:flex-col">
                <h3 className="heading-3 font-bold mt-6 lg:mt-0">{p.title}</h3>
                <p className="card-text text-neutral-400 mt-2  xl:w-[95%]">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 xl:mt-10 py-5 sm:py-6 border-t border-white/5 grid grid-cols-2 sm:flex sm:flex-wrap gap-y-6 gap-x-8">
                  <div className="space-y-1.5 col-span-2 sm:col-span-1">
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Role
                    </p>
                    <p className="text-sm sm:text-base text-neutral-200 font-medium">
                      Design & Development
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Framework
                    </p>
                    <div className="flex items-center gap-2 text-sm sm:text-base text-neutral-200 font-medium">
                      {index === 0 || index === 1 ? (
                        <Blocks className="text-neutral-500 w-3.5 h-3.5" />
                      ) : (
                        <Pen className="text-neutral-500 w-3.5 h-3.5" />
                      )}
                      {p.stack}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Animation
                    </p>
                    <div className="flex items-center gap-2 text-sm sm:text-base text-neutral-200 font-medium">
                      <Sparkles className="text-neutral-500 w-3.5 h-3.5" />
                      GSAP
                    </div>
                  </div>
                </div>
                {/* Tech Stack */}
                <a
                  className="w-fit  mt-6 lg:mt-10 xl:mt-14"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={p.url}
                >
                  <Button className=" w-full lg:w-fit">
                    See the Experience
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

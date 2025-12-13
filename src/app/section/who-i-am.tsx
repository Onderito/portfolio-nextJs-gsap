import Image from "next/image";
import Button from "../ui/button";

export default function WhoIAm() {
  const tools = [
    { icon: "/webflow.svg", alt: "Webflow", bg: "bg-[#AAC6FA]" },
    { icon: "/nextJs.svg", alt: "NextJs", bg: "bg-[#1A1A1A]" },
    { text: "SEO", bg: "bg-[#1A1A1A]" },
    { text: "GSAP", bg: "bg-[#1A1A1A]" },
    { text: "UI&UX", bg: "bg-[#1A1A1A]" },
  ];

  return (
    <>
      <h2 className="heading-2 text-center">Who I Am</h2>

      <section className="mt-10 flex flex-col items-center justify-center">
        {/* MOBILE: stack | XL: 2 colonnes */}
        <div className="w-full xl:grid xl:grid-cols-[2fr_3fr] xl:gap-6 xl:items-stretch">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-2xl xl:rounded-3xl shadow-white-blur aspect-3/4 xl:aspect-auto xl:h-[659px]">
            <Image
              src="/ulas-profile.png"
              alt="Ulas Profile"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT GRID */}
          <div className="mt-4 flex flex-col gap-4 xl:mt-0 xl:grid xl:grid-cols-3 xl:gap-4 xl:h-[659px] xl:auto-rows-fr">
            {/* TOP (full width) */}
            <div
              style={{ cornerShape: "squircle" }}
              className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur xl:col-span-3 "
            >
              <h4 className="text-2xl font-bold">Ulas Önder</h4>
              <p className="mt-3 text-[#C4C4C4] leading-relaxed xl:w-[90%]">
                Front-end Developer and Designer. My specialty is building high-
                converting Landing Pages that load in under one second. I focus
                on strategic design and clean code to maximize your revenue.
              </p>

              {/* petit glow */}
              <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-white/10 blur-[70px]" />
            </div>

            {/* MIDDLE LEFT: TOOLKIT (2/3) */}
            <div
              style={{ cornerShape: "squircle" }}
              className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur xl:col-span-2"
            >
              <h4 className="text-xl font-bold text-center">
                High-Performance{" "}
                <span className="font-gloria text-[#C4C4C4]">Toolkit</span>
              </h4>

              {/* sur xl: une seule ligne comme sur ton rendu */}
              <div className="mt-6 flex flex-wrap justify-center gap-4 xl:flex-nowrap md:h-[120px]">
                {tools.map((item, i) => (
                  <span
                    key={i}
                    style={{ cornerShape: "squircle" }}
                    className={`flex h-[70px] w-[70px] items-center justify-center rounded-2xl border border-[#404040] ${item.bg} bg-[#333333] text-base font-light`}
                  >
                    {item.icon ? (
                      <Image
                        className="xl:w-[50px] xl:h-[50px]"
                        src={item.icon}
                        alt={item.alt!}
                        width={34}
                        height={34}
                      />
                    ) : (
                      item.text
                    )}
                  </span>
                ))}
              </div>

              <div className="pointer-events-none absolute left-0 bottom-10 h-20 w-20 rounded-2xl bg-white blur-[100px]" />
            </div>

            {/* MIDDLE RIGHT: CONTACT (1/3) */}
            <div
              style={{ cornerShape: "squircle" }}
              className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur xl:col-span-1 flex items-center justify-center h-[200px] xl:h-full"
            >
              <div className="relative z-10">
                <Button className="px-10">Hire Me</Button>
              </div>

              {/* gradient blob */}
              <Image
                src="/color-gradient.svg"
                alt="Color Gradient"
                width={800}
                height={800}
                className="absolute top-[-80px] md:top-[-200px] xl:top-0 blur-2xl"
              />
            </div>

            {/* BOTTOM 3 CARDS */}
            <div
              style={{ cornerShape: "squircle" }}
              className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur flex items-center justify-center xl:col-span-1 h-[200px] xl:h-full cursor-pointer"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={70}
                height={70}
              />
              <Image
                className="absolute w-full bottom-[-150px] md:bottom-[-350px] right-20 xl:bottom-[-80px] "
                src="/double-circle.svg"
                alt="double circle"
                width={70}
                height={70}
              />
            </div>

            <div
              style={{ cornerShape: "squircle" }}
              className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur flex items-center justify-center xl:col-span-1 h-[200px] xl:h-full cursor-pointer"
            >
              <Image src="/x.svg" alt="X" width={70} height={70} className="" />
              <Image
                className="absolute w-full top-[-150px] md:top-[-350px] left-20 xl:top-[-80px]"
                src="/double-circle.svg"
                alt="double circle"
                width={70}
                height={70}
              />
            </div>

            <div
              style={{ cornerShape: "squircle" }}
              className="relative overflow-hidden rounded-2xl xl:rounded-3xl bg-[#212121] p-6 shadow-white-blur flex items-center justify-center xl:col-span-1 h-[200px] xl:h-full"
            >
              <h5 className="relative z-10 font-gloria text-3xl font-bold">
                ÖnderDev
              </h5>
              <Image
                src="/color-gradient.svg"
                alt="Color Gradient"
                width={800}
                height={800}
                className="absolute bottom-[-80px] md:bottom-[-200px] xl:bottom-0 blur-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

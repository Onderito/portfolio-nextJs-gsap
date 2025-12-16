import Image from "next/image";

export default function HowIWork() {
  const cards = [
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
  ];
  return (
    <div>
      <h2 className="heading-2 text-center">How I Work</h2>
      <p className="body-text text-center mt-2 md:mt-4 xl:mt-6">
        A streamlined process to deliver polished, high-performance web
        experiences.{" "}
      </p>
      <div className="flex flex-col gap-8 mt-10 xl:mt-14">
        {cards.map((c, i) => (
          <div
            style={{ cornerShape: "squircle" }}
            className=" bg-[#212121] p-4 shadow-white-blur rounded-3xl"
            key={i}
          >
            <div
              style={{ cornerShape: "squircle" }}
              className=" bg-[#080808] h-[165px] rounded-2xl shadow-sm relative overflow-hidden "
            >
              {/* illustration ici */}
              <Image
                className={`absolute opacity-40 blur-2xl ${
                  i === 0 || i === 3 ? "-top-20" : "-bottom-20"
                } `}
                src="/color-gradient.svg"
                alt=""
                width={800}
                height={800}
              />
            </div>
            <p className="text-[12px] bg-[#1C1C1C] shadow-white-blur rounded-xl w-fit p-1.5 mt-4 text-neutral-400 ">
              {c.tag}
            </p>
            <h4 className="heading-4 mt-6">{c.title}</h4>
            <p className="mt-2 text-neutral-400 card-text">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

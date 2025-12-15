import Button from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="xl:h-screen xl:flex xl:justify-center xl:items-center">
      {/* <Image
        src="/background-particle.svg"
        alt="Background Particle"
        width={1000}
        height={1000}
        priority
        className="object-cover hidden xl:block absolute inset-0 top-[-1250px] w-full h-fit -z-10 opacity-20"
      /> */}
      <div className="flex flex-col items-center justify-center relative z-50">
        <Image
          src="/blur-profile.webp"
          alt="Ulas Blur Profile"
          width={500}
          height={500}
          priority
          quality={100}
          className="object-cover w-30 h-30 rounded-2xl rotate-2 border-2 border-white border-glass "
        />
        <h1 className="heading-1 text-center mt-6 md:mt-10 xl:mt-12">
          I design & build modern <br />
          <span className="text-neutral-400">web experiences</span>
        </h1>
        <p className="body-text mt-2 md:mt-4 xl:mt-6 text-center">
          Focused on performance, smooth animations, and clean interfaces.
        </p>
        <Button className=" mt-6 md:mt-8 xl:mt-10 ">Hire Me</Button>{" "}
        <Image
          src="/circle-gradient.svg"
          alt="Circle Gradient"
          width={800}
          height={800}
          className="absolute  blur-2xl -z-10 opacity-20 hidden lg:block animate-pulse"
        />
      </div>
    </div>
  );
}

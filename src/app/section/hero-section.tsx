import Button from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <Image
        src="/background-particle.svg"
        alt="Background Particle"
        width={1000}
        height={1000}
        priority
        className="object-cover hidden xl:block absolute inset-0 top-[-1250px] w-full h-fit -z-10  "
      />
      <div className="flex flex-col items-center justify-center relative z-50">
        <Image
          src="/ulas-blur-profile.webp"
          alt="Ulas Blur Profile"
          width={100}
          height={100}
          className="object-cover btn-shadow w-24 h-24 rounded-full"
        />

        <h1 className="heading-1 text-center mt-6 md:mt-10 xl:mt-12">
          I design & build modern <br />
          <span className="text-[#AAAAAA]">web experiences</span>
        </h1>
        <p className="body-text mt-2 md:mt-4 xl:mt-6 text-center">
          I design and code websites with smooth animations and clean
          interfaces.
        </p>
        <div className="relative cursor-pointer overflow-hidden mt-6 md:mt-8 xl:mt-10 rounded-[10px]">
          <Button className="z-10 ">Hire Me</Button>{" "}
          <div className="absolute w-[118px] h-[46px] top-0 bg-white rounded-full blur-3xl z-0"></div>{" "}
        </div>

        <Image
          src="/circle-gradient.svg"
          alt="Circle Gradient"
          width={800}
          height={800}
          className="absolute top-0 blur-2xl -z-10 opacity-20 hidden lg:block"
        />
      </div>
    </>
  );
}

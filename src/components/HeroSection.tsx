import React from "react";
import { Vortex } from "../components/ui/vortex";
import { HeroText } from "./HeroText";
import { HeroBtn } from "./HeroBtn";

export function HeroSection() {
  return (
    <div className="w-[calc(100%-2px)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <HeroText />
        <p className="text-[#747679] text-xs md:text-lg max-w-4xl mt-6 text-center">

          I'm a trendy and innovative graphic designer and 3D artist based in India. With years of experience in the industry, I have worked with a variety of clients, delivering exceptional designs that exceed expectations. My expertise includes logo design, branding, illustration, 3D modeling, animation, social media designs, banner designs, t-shirt designs, template designs, and product designing and modeling services. My goal is to help businesses turn their ideas into a living brand, and I achieve this by collaborating closely with the clients to understand their vision and bring it to life through his unique creative skills.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <HeroBtn/>
        </div>
      </Vortex>
    </div>
  );
}

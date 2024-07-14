"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/utils/cn";
import Heading from "./Heading";
import { HeroText } from "./HeroText";

export function HeroSection({}) {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        <HeroText />
      </h1>
      <p className="text-center mt-2 w-1/2  text-[#74777D] relative z-20">
        I am a trendy and innovative graphic designer and 3D artist based in India. With years of experience in the industry, I have worked with a variety of clients, delivering exceptional designs that exceed expectations. My expertise includes logo design, branding, illustration, 3D modeling, animation, social media designs, banner designs, t-shirt designs, template designs, and product designing and modeling services. My goal is to help businesses turn their ideas into a living brand, and I achieve this by collaborating closely with the clients to understand their vision and bring it to life through his unique creative skills.
      </p>
    </div>
  );
}

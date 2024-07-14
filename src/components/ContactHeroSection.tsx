"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/utils/cn";
import { ContactHeroText } from "./ContactHeroText";

export function ContactHeroSection({ }) {
    return (
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            <ContactHeroText />
            </h1>
            <p className="text-center mt-6 w-1/2  text-[#74777D] relative z-20">
                Graphic Design and 3D Art is where creativity meets innovation. Get ready to experience top-notch graphic design that will take your brand to the next level.
            </p>
        </div>
    );
}

"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <>
      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            I am ROHAN YADAV
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-full mx-auto my-2 text-sm text-center relative z-10">

            I am a trendy and innovative graphic designer and 3D artist based in India. With years of experience in the industry, I have worked with a variety of clients, delivering exceptional designs that exceed expectations. My expertise includes logo design, branding, illustration, 3D modeling, animation, social media designs, banner designs, t-shirt designs, template designs, and product designing and modeling services. My goal is to help businesses turn their ideas into a living brand, and I achieve this by collaborating closely with the clients to understand their vision and bring it to life through his unique creative skills.
          </p>
          <div className="w-full flex justify-center mt-4 items-center">
            <Button
              borderRadius="1rem"
              className="bg-white w-full font-semibold  dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore More
            </Button>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  )
}

export default HeroSection

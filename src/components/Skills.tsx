import React from "react";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import psIcon from "../../public/skills/photoshop.png"
import illustratorIcon from "../../public/skills/illustrator.png"
import blenderIcon from "../../public/skills/blender.png"
import Image from "next/image";

function Skills() {
  return (
    <>
      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg h-screen bg-background md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Skills
        </span>

        <OrbitingCircles
          className="h-[100px] w-[100px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={70}
        >
          <Image
            src={psIcon}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={70}
        >
          <Image
            src={illustratorIcon}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </OrbitingCircles>


        <OrbitingCircles
          className="h-[70px] w-[70px] border-none bg-transparent"
          radius={200}
          duration={20}
          reverse
        >
          <Image
            src={blenderIcon}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[100px] w-[100px] border-none bg-transparent"
          radius={200}
          duration={20}
          delay={20}
          reverse
        >
          <Image
            src={psIcon}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </OrbitingCircles>
      </div>
    </>
  );
}

export default Skills;

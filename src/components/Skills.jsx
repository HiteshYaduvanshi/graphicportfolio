import React from "react";
import OrbitingCircles from "@/components/ui/orbiting-circles";

function Skills() {
  return (
    <>
      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg h-screen bg-background md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Circles
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-red-400"
          duration={20}
          delay={15}
          radius={80}
        >
          
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-red-400"
          duration={20}
          delay={20}
          radius={80}
        >
          {/* <Icons.whatsapp /> */}
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-red-400"
          duration={20}
          delay={25}
          radius={80}
        >
          {/* <Icons.whatsapp /> */}
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-red-400"
          duration={20}
          delay={30}
          radius={80}
        >
          {/* <Icons.whatsapp /> */}
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          reverse
        >
          {/* <Icons.googleDrive /> */}
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          {/* <Icons.gitHub /> */}
        </OrbitingCircles>
      </div>
    </>
  );
}

export default Skills;

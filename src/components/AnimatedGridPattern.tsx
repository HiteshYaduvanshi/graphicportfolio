import React from 'react'
import { cn } from "@/utils/cn";
import AnimatedGridPatternComponent from "@/components/ui/GridPattern";

function AnimatedGridPattern() {
    return (
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg bg-background p-2 md:shadow-xl">
            <div className="z-10 flex flex-col gap-4 w-1/3 whitespace-pre-wrap text-center  font-medium tracking-tighter text-white dark:text-white">
                <p className='text-3xl text-neutral-500'>Currently seeking new opportunities</p>
                <span className='text-sm text-neutral-500'>
                    Graphic Design and 3D Art is where creativity meets innovation. Get ready to experience top-notch graphic design that will take your brand to the next level.</span>
            </div>
            <AnimatedGridPatternComponent
                numSquares={30}
                maxOpacity={0.1}
                duration={1}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(850px_circle_at_center,blue,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-10",
                )}
            />
        </div>
    )
}

export default AnimatedGridPattern

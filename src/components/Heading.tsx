import React from 'react'
import FlipText from "@/components/ui/flip-text";

function Heading() {
    return (
        <>
            <FlipText
                className="text-4xl font-bold tracking-[-0.1em] text-white dark:text-white md:text-5xl my-3 md:leading-[5rem]"
                word="PORTFOLIO"
            />
        </>
    )
}

export default Heading

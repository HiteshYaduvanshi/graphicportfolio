import React, { FC } from 'react';
import FlipText from "@/components/ui/flip-text";

interface HeadingProps {
    text: string;
}

const Heading: FC<HeadingProps> = ({ text }) => {
    return (
        <>
            <FlipText
                className="text-5xl font-bold tracking-[-0.1em] bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-transparent md:text-5xl my-3 md:leading-[5rem]"
                word={text}
            />
        </>
    );
}

export default Heading;

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, Variants, motion } from "framer-motion";

interface SlightFlipProps {
    word: string;
    duration?: number;
    delayMultiple?: number;
    framerProps?: Variants;
    className?: string;
}

export default function SlightFlip({
    word,
    duration = 0.5,
    delayMultiple = 0.08,
    framerProps = {
        hidden: { rotateX: -90, opacity: 0 },
        visible: { rotateX: 0, opacity: 1 },
    },
    className,
}: SlightFlipProps) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="flex justify-center space-x-0 md:space-x-2">
            <AnimatePresence mode="wait">
                {isInView &&
                    word.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            whileInView="onscreen"
                            variants={framerProps}
                            transition={{ duration, delay: i * delayMultiple }}
                            className={cn("origin-center drop-shadow-sm px-[3px]", className)}
                        >
                            {char}
                        </motion.span>
                    ))}
            </AnimatePresence>
        </div>
    );
}

"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import threeDImg from "../../public/1.3D work/0001.png"
import socialMediaDesign from "../../public/2.social media/17.jpg"
import socialMediaDesigntwo from "../../public/2.social media/8.jpg"
import socialMediaDesignthree from "../../public/2.social media/12.png"
import tShirtDesign from "../../public/3.tshirt designs/4.png"
import bannerDesign from "../../public/4.banner design/Stumble guys new ed.png"
import logoDesign from "../../public/5.logo design/super star pizza 2.png"
import whiteBackground from "../../public/6.white background/white bg 7.jpg"
import posterDesign from "../../public/7.poster design/belgian beerr.jpg"
import threeDImg2 from "../../public/1.3D work/Jack Daniels.jpg"

function Portfolio() {
    return (
        <>
            <div className="grid grid-cols-1 mb-6 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-1 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <Image
                        src={threeDImg}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-0 -bottom-0 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <Image
                        src={socialMediaDesign}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-0 -bottom-0 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <Image
                        src={threeDImg2}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-0 -bottom-0 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                    <Image
                        src={tShirtDesign}
                        // width="100"
                        // height={500}
                        alt="linear demo image"
                        className="absolute w-full h-full -right-0 -bottom-0 object-cover rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <Image
                        src={socialMediaDesigntwo}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-0 -bottom-0 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <Image
                        src={socialMediaDesignthree}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-0 -bottom-0 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">

                <Image
                        src={bannerDesign}
                        // width="100"
                        // height={500}
                        alt="linear demo image"
                        className="absolute w-full h-full -right-0 -bottom-0 object-cover rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-1 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    {/* <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Gippity AI powers the entire universe
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            With over 100,000 mothly active bot users, Gippity AI is the most
                            popular AI platform for developers.
                        </p>
                    </div> */}
                    <Image
                        src={logoDesign}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-0 -bottom-0 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <Image
                        src={posterDesign}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-0 -bottom-0 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <Image
                        src={whiteBackground}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-0 -bottom-0 object-contain rounded-2xl"
                    />
                </WobbleCard>
            </div>
        </>
    )
}

export default Portfolio

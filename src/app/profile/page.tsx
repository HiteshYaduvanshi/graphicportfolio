import { ContactHeroSection } from '@/components/ContactHeroSection'
import { Expierence } from '@/components/Expierence'
import Heading from '@/components/Heading'
import { HeroSection } from '@/components/HeroSection'
import LetsConnect from '@/components/LetsConnect'
import { Skills } from '@/components/Skills'
import React from 'react'

function page() {
    return (
        <>
                 <HeroSection />

            <Heading text="Expierence" />
            <Expierence />
            <Heading text="Get In Touch" />
            <Skills />
            <LetsConnect />
        </>
    )
}

export default page

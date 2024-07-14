import AnimatedGridPattern from '@/components/AnimatedGridPattern'
import { ContactForm } from '@/components/ContactForm'
import { ContactHeroSection } from '@/components/ContactHeroSection'
import Heading from '@/components/Heading'
import { HeroSection } from '@/components/HeroSection'
import LetsConnect from '@/components/LetsConnect'
import React from 'react'

function page() {
    return (
        <>
        
                {/* <AnimatedGridPattern /> */}
                <HeroSection />

                <Heading text="Get In Touch" />
                <ContactForm />
                <LetsConnect />
        
        </>
    )
}

export default page

import AnimatedGridPattern from '@/components/AnimatedGridPattern'
import { ContactForm } from '@/components/ContactForm'
import Heading from '@/components/Heading'
import LetsConnect from '@/components/LetsConnect'
import React from 'react'

function page() {
    return (
        <div className='w-screen'>
            <AnimatedGridPattern />
            <Heading text="Lets Connect" />
            <ContactForm />
            <LetsConnect />
        </div>
    )
}

export default page

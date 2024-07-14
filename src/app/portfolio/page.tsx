import Heading from '@/components/Heading'
import { HeroSection } from '@/components/HeroSection'
import LetsConnect from '@/components/LetsConnect'
import Portfolio from '@/components/Portfolio'
import React from 'react'

function page() {
  return (
    <>
     <HeroSection />
      <Heading text="Portfolio" />
      
      
      
      
      <Portfolio />
      <LetsConnect /> 
    </>
  )
}

export default page

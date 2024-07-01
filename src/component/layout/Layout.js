import React from 'react'
import HeroSection from '../HeroSection'
import About from '../About'
import Reward from '../Reward'
import PopularNFts from '../PopularNFts'
import RoadMap from '../RoadMap'
import FAQSection from '../Footer'

const Layout = () => {
  return (
    <>
      <HeroSection /> 
   <About />
   <Reward />
   <PopularNFts />
   <RoadMap />
   <FAQSection />
    </>
  )
}

export default Layout

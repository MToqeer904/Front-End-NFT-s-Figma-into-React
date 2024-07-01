import React from 'react'
import hero_sec_img from "../assets/images/hero.svg"
import logo from "../assets/images/nav_logo.svg"

const HeroSection = () => {

  const navigationMenuItem = ["Home", "About", "Artist", "Staking", "Roadmap", "Team", "Vesting", "MarketPlace"]

  return (

    <div id='Hero_Section' className="hero_container">
         <div className='col-12 mt-3 position-absolute d-flex justify-content-around align-items-center'>
          <img className='col-3 navbar_logo' src={logo} alt='Logo' />
            <ul className='col-9 d-flex justify-content-between align-items-center list-unstyled text-white'>
      {
        navigationMenuItem.map((item, index) => {
            return (
                <>
                <li className='nav_li_item' key={index}>{item}</li>
                </>
            )})
      }
      <button className='theme_btn'>Connect Wallet</button>
            </ul>
    </div>
    <div className='intro_sec'>
        <h1 className='super_heading text-white'>Generate with AI,Scan, Mint, Sell & Trade</h1>
        <p className='hero_para w-75 text-white'>Explore 3dotlink, where Web3 meets cultural legacy, and AI breathes life into NFTs</p>
        <button className='theme_btn'>Buy NFT'S</button>
      </div>
      <img className="w-100" src={hero_sec_img} alt="Hero Section" />
    </div>
    
  )
}

export default HeroSection

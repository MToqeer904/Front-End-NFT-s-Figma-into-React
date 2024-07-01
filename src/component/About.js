import React from 'react'
import about_sec_img from "../assets/images/about.svg"
import { about_para } from '../assets/dummyData'

const About = () => {
  return (
    <div id='About_section' className="image_container">
      <img src={about_sec_img} alt="Description" className="about_image" />
      <div className='about_info'>
        <h1 className='super_heading mb-5'>Our Vision</h1>
        <p className='w-75 text-center text-white mt-4'>{about_para}</p>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import Circal from '../assets/images/Dot-circal.svg';
import Line from '../assets/images/Dot-line.svg';
import Smoke from '../assets/images/Blue-Smoke-Ring1.svg';
import Image1 from '../assets/images/D2-1.svg';

const RoadMap = () => {
  return (
    <div id='RoadMap_Section'>
    <div className='container'>
    <div className='roadmap_section'>
        <div className='roadmap_inner' >
            <h3 className='roadmap_heading'>Road<span>map</span></h3>
            <p>Guiding the fusion of culture, AI, and Web3 innovation</p>
        </div>
        {/* Phase 1 */}
        <div className='phase_section d-flex'>
            <div className='d-flex flex-column align-items-center point'>
                <div><img src={Circal} alt='img' className=' ' /></div>
                <div><img src={Line} alt='img' className='img_line' /></div>
            </div>
            <div className='phases ms-3 '>
                <div className='phase_title mb-3'>Phase - I</div>
                <div className='list_items'>
                    <ul>
                        <li>Goal Defining</li>
                        <li>Market Research</li>
                        <li>Whitepaper v1</li>
                        <li>Initial Funding Secured</li>
                    </ul>
                    <div className='image_men'><img src={Image1} alt='img' className='img_men_size' /></div>
                </div>
                <div className='back_img'><img src={Smoke} alt='img' className='back_img_size' /></div>
            </div>
        </div>
        {/* Phase 2 */}
        <div className='phase_section-2 d-flex'>
            <div className='d-flex flex-column align-items-center point'>
                <div><img src={Circal} alt='img' className=' ' /></div>
                <div><img src={Line} alt='img' className='img-line' /></div>
            </div>
            <div className='phases ms-3 '>
                <div className='phase_title_2 mb-3'>Phase II</div>

                <div className='list_items_2'>
                    <ul>
                        <li>AI Generative System Development</li>
                        <li>Early AI Generative System Testing</li>
                        <li>Preparing for NFT Mask Collection Launch </li>
                        <li>IWebsite launch V1</li>
                        <li>Whitelisting</li>
                    </ul>
                    <div className='image_men_2'><img src={Image1} alt='img' className='img_men_size' /></div>

                </div>
                <div className='back_img_2'><img src={Smoke} alt='img' className='back_img_size' /></div>
            </div>
        </div>

        {/* Phase 3 */}
        <div className='phase_section_3 d-flex'>
            <div className='d-flex flex-column align-items-center point'>
                <div><img src={Circal} alt='img' className=' ' /></div>
                <div><img src={Line} alt='img' className='img_line' /></div>
            </div>
            <div className='phases ms-3 '>
                <div className='phase_title mb-3'>Phase III</div>
                <div className='list_items'>
                    <ul>
                        <li>Goal Defining</li>
                        <li>Market Research</li>
                        <li>Whitepaper v1</li>
                        <li>Initial Funding Secured</li>
                    </ul>
                    <div className='image_men'><img src={Image1} alt='img' className='img_men_size' /></div>
                </div>
                <div className='back_img'><img src={Smoke} alt='img' className='back_img_size' /></div>
            </div>

        </div>
        {/* Phase 4 */}
         <div className='phase_section_2 d-flex'>
            <div className='d-flex flex-column align-items-center point'>
                <div><img src={Circal} alt='img' className=' ' /></div>
            </div>
            <div className='phases ms-3 '>
                <div className='phase_title_2 mb-3'>Phase IV</div>
                <div className='list_items_2'>
                    <ul>
                        <li>AI Generative System Development</li>
                        <li>Early AI Generative System Testing</li>
                        <li>Preparing for NFT Mask Collection Launch </li>
                        <li>IWebsite launch V1</li>
                        <li>Whitelisting</li>
                    </ul>
                    <div className='image_men_2'><img src={Image1} alt='img' className='img_men_size' /></div>
                </div>
                <div className='back_img_3'><img src={Smoke} alt='img' className='back_img_size' /></div>
            </div>
        </div> 
    </div>
</div>
</div>
  )
}

export default RoadMap

import React from 'react'
import "./Hero.css";
import bg from "../../Images/flowerBg.png";
import ShadeLine from "../../Images/shadedLine.png";
import agriname from "../../Images/agriname.png";


const Hero = () => {
  return (
    <div className='hero-container'>
         <div className='heading-1'>
            <div className='head-1'>
                <h5>Original & Natural</h5>
            </div>
            <div className='shadeLine'>
                <img src={ShadeLine} alt="ShadeLine" />
            </div>
         </div>
         <div className='heading-2'>
            <div className='head'>
                <div className='head-name'>
                        <img src={agriname} alt="Head logo"></img>
                </div>
                <div className='head-name-1'>
                       <h1>Good production</h1>
                 </div>
            </div>
         </div>
         <div className='para-head'>
                <p>Explore the essence of agriculture with Smart Agro, where nature's bounty meets sustainable practices.<br /> Join us in cultivating a future of wholesome and eco-conscious farming.</p>
         </div>
         <div className='btn'>
            <a href="#">Discover more</a>
         </div>
    </div>
  )
}

export default Hero
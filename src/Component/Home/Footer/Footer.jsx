import React from 'react'
import Logo from "../../Images/Logo.png";
import fb from "../../Images/fb.png";
import insta from "../../Images/insta.png";
import twitter from "../../Images/youtube.png";
import youtube from "../../Images/twitter.png";

import "./Footer.css";
const Footer = () => {
  return (
     <div className='footer-container'>
        <div className='footer_details'>
            <div className='footer-1'>
                <div className='Logo_website'>
                     <img src={Logo} alt="Logo" />
                </div>
                <div className='sologan'>
                       <p>Bringing you the freshest organic produce, straight from our farm to your table.</p>
                </div>
                <div className='list_icon'>
                     <div className='fb'>
                        <img src={fb} alt="facebook" />
                     </div>
                     <div className='insta'>
                        <img src={insta} alt="insta" />
                     </div>
                     <div className='twitter'>
                        <img src={twitter} alt="twitter" />
                     </div>
                     <div className='youtube'>
                        <img src={youtube} alt="youtube" />
                     </div>
                </div>
            </div>
            <div className='footer-2'>
                 <div className='footer_links'>
                     <div className='links_head'>
                        <h3>Useful Links</h3>
                     </div>
                     <div className='list_type'>
                        <ul>
                            <li><a href="#home">New Projects</a></li>
                            <li><a href="#service">Our Services</a></li>
                            <li><a href="#testinomial">Testinomials</a></li>
                            <li><a href="#about">Abouts us</a></li>
                            <li><a href="#contact">Contact us</a></li>
                        </ul>
                     </div>
                 </div>
            </div>
        </div>
     </div>
  )
}

export default Footer
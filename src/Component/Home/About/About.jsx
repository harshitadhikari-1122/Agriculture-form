
import React from 'react'
import circle from "../../Images/circle.png";
import "./About.css";
import groupPhoto from "../../Images/groupPhoto.png";
import value from "../../Images/value.png";
import flowerBucket from "../../Images/flowerBucket.png";

const About = () => {
  return (
    <div className='about-section'>

         <div className='photo-about'>

                <div className='darkGreen_box'></div>

                <div className='box'>

                     <div className='box-yellow'></div>

                     <div className='ibox-2'>
                         <div className='image-box'>
                           <img src={groupPhoto} alt="People looking to its land" />
                         </div>
                         <div className='content-box'>
                              <div className='image-content-box'>
                                  <img src={flowerBucket} alt="Flower Bucket" />
                              </div>
                              <div className='content-box-1'>
                                 <div className='value-content'>
                                     <img src={value} alt="Value content" />
                                 </div>
                                 <div className='para-content'>
                                     <p>Successfully Project Completed</p>
                                 </div>
                              </div>
                         </div>
                     </div>
                </div>
         </div>


         <div className='intro'>


               <div className='head-intro'>
                  <p>Our Introduction</p>
               </div>


               <div className='head-intro-1'>
                  <h1>Pure Agriculture and Organic Form</h1>
               </div>


               <div className='intro-p'>
                 <p>We’re Leader in Agriculture Market</p>
               </div>


               <div className='intro-para'>
                  <p>Discover the essence of sustainable agriculture with Smart Agro.<br/>Our commitment to organic farming practices ensures that each <br /> harvest is a celebration of purity and nutrition.</p>
               </div>

               <div className='intro-para-list'>
                   <div className='list-h'>
                      <div className='icon-list'>
                          <img src={circle} alt="circleTick" />
                      </div>
                      <div className='list-p'>
                         <p>Organic food contains more vitamins</p>
                      </div>
                   </div>


                   <div className='list-h'>
                      <div className='icon-list'>
                          <img src={circle} alt="circleTick" />
                      </div>
                      <div className='list-p'>
                         <p>Eat organic because supply meets demand</p>
                      </div>
                   </div>



                   <div className='list-h'>
                      <div className='icon-list'>
                          <img src={circle} alt="circleTick" />
                      </div>
                      <div className='list-p'>
                         <p>Organic food is never irradiated</p>
                      </div>
                   </div>


               </div>
         </div>
    </div>
  )
}

export default About
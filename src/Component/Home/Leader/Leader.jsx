import React from 'react'
import "./Leader.css";
import growth from "../../Images/growth.png";
import leader from "../../Images/leader.png";

const Leader = () => {
  return (
    <div className='Leader-container'>
         <div className='leader-details'>
              <div className='leaders'>
                 <div className='img-leader'>
                    <img src={growth} alt="growth"></img>
                 </div>
                 <div className='leader-para'>
                     <img src={leader} alt="leaderpara" />
                 </div>
              </div>
              <div className='discover'>
                 <a href="#">Discover more</a>
              </div>
         </div>
    </div>
  )
}

export default Leader
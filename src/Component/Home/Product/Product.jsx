import React from 'react'
import "./Product.css";
import ApplePlant from "../../Images/Apple.jpg";
import StrawPlant from "../../Images/strawberry.jpg";
import Cabbage from "../../Images/cabbage.jpg";
import Carrot from "../../Images/carrot.jpg";
import Blueberry from "../../Images/Blueberry.webp";
import Eggplant from "../../Images/eggplant.jpg";

const Product = () => {
  return (
    <div className='Product-intro'>
       <div className='product-head'>
           <h5>Popular Foods And Vegetables</h5>
       </div>
       <div className='product-head-1'>
          <h1>Quality Fruits & Vegetables</h1>
       </div>
       <div className='Product-list'>
          <div className='l1'>
                <div className='list-1-prod'>
                    <div className='image-list'>
                        <img src={ApplePlant} alt="Apple Plant"></img>
                    </div>
                    <div className='name-image'>
                        <h5>Apple Plant</h5>
                        <p>Handpicked with care, our apples come straight from the orchard to your table.</p>
                    </div>
                </div>

                <div className='list-1-prod'>
                    <div className='image-list'>
                        <img src={Eggplant} alt="Eggplant"></img>
                    </div>
                    <div className='name-image'>
                        <h5>Eggplant Plant</h5>
                        <p>Freshly picked from our fields, our eggplants are full of flavor and nutrients.</p>
                    </div>
                </div>
        
                <div className='list-1-prod'>
                    <div className='image-list'>
                        <img src={Carrot} alt="Carrot Plant"></img>
                    </div>
                    <div className='name-image'>
                        <h5>Carrot Plant</h5>
                        <p>Straight from the earth to your plate, our carrots are packed with natural goodness.</p>
                    </div>
                </div>
              
           </div>
          <div className='l2'>
                <div className='list-1-prod'>
                    <div className='image-list'>
                        <img src={StrawPlant} alt="Strawberry Plant"></img>
                    </div>
                    <div className='name-image'>
                        <h5>StrawBerry Plant</h5>
                        <p>Fresh from the field to your table, our strawberries are handpicked for exceptional flavor.</p>
                    </div>
                </div>

                <div className='list-1-prod'>
                    <div className='image-list'>
                        <img src={Cabbage} alt="Cabbage Plant"></img>
                    </div>
                    <div className='name-image'>
                        <h5>Cabbage Plant</h5>
                        <p>Grown organically, our cabbages are harvested at peak freshness for your enjoyment.</p>
                    </div>
                </div>

                <div className='list-1-prod'>
                    <div className='image-list'>
                        <img src={Blueberry} alt="Blueberry Plant"></img>
                    </div>
                    <div className='name-image'>
                        <h5>Blueberry Plant</h5>
                        <p>Delicately harvested by hand, our blueberries are a sweet taste of organic goodness.</p>
                    </div>
                </div>
           </div>
       </div>
    </div>
  )
}

export default Product
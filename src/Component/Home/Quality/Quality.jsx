import React from 'react';
import './Quality.css';
import family from "../../Images/family.png";
import logo from "../../Images/logoOrganic.png";
import growth from "../../Images/growth.png";
import vegitables from "../../Images/vegitables.png";

const Quality = () => {
    return (
        <div className='quality_container'>
            <div className='product_Qaulity'>
                <div className='image_prod'>
                    <div className='family_image'>
                        <img src={family} alt="Family Image" />
                    </div>
                    <div className='logo_image'>
                        <img src={logo} alt="Logo" />
                    </div>
                </div>

                <div className='text_product'>
                    <div className='head_product'>
                        <h5>MODERN AGRICULTURE</h5>
                    </div>
                    <div className='heading_product'>
                        <h1>Providing High-Quality Products</h1>
                    </div>
                    <div className='product_image'>
                        <div className='list_quality line_bottom'>
                            <div className='list_image'>
                                <img src={growth} alt="Land"></img>
                            </div>
                            <div className='list_text'>
                                <div className='list_head'>
                                    <h4>Our Agriculture Growth</h4>
                                </div>
                                <div className='list_para'>
                                    <p>Our modern agricultural practices focus on sustainable methods and advanced technology to ensure high-quality products.</p>
                                </div>
                            </div>
                        </div>

                        <div className='list_quality line_list'>
                            <div className='list_image'>
                                <img src={vegitables} alt="Vegetables"></img>
                            </div>
                            <div className='list_text'>
                                <div className='list_head'>
                                    <h4>Making Healthy Foods</h4>
                                </div>
                                <div className='list_para'>
                                    <p>Through our commitment to quality, we strive to provide healthy and nutritious foods that promote well-being.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quality;

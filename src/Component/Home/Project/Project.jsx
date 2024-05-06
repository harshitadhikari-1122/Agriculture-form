import React, { useState } from 'react';
import farm from "../../Images/farmFerti.jpg";
import glow from "../../Images/vegGroc.jpg";
import culti from "../../Images/compaign.jpg";
import rice from "../../Images/rice.webp";
import "./Project.css";

const Project = () => {
    const Project_data = [
        {
            img: farm,
            head: "Pesticide Management Project",
            para: "Responsible, Modern, Precise",
           
        },
        {
            img: glow,
            head: "Vegetable Grocery Project",
            para: "Fresh, Nutritious, Friendly",
           
        },
        {
            img: culti,
            head: "Harvesting Campaign Project",
            para: "Traditional, Quality, Dedication",
            
        },
        {
            img: rice,
            head: "Rice Cultivation Project",
            para: "Sustainable, Abundant, Responsible",
           
        }
    ];

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleDotClick = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <div className='Project_details'>
            <div className='project_head'>
                <h1>Recently Completed Work</h1>
            </div>
            <div className='image_details'>
                <div className='Project_list'>
                        <div className='project_details'>
                            <img src={Project_data[0].img} alt="Pesticide" />
                        </div>
                        <div className='project_heads'>
                            <div>
                                <h5>{Project_data[0].head}</h5>
                            </div>
                        </div>
                 </div>
                 <div className='Project_list'>
                        <div className='project_details'>
                            <img src={Project_data[1].img} alt="Pesticide" />
                        </div>
                        <div className='project_heads'>
                            <div>
                                <h5>{Project_data[1].head}</h5>
                            </div>
                        </div>
                  </div>

                  <div className='Project_list'>

                        <div className='project_details'>
                            <img src={Project_data[2].img} alt="Pesticide" />
                        </div>
                        <div className='project_heads'>
                            <div>
                                <h5>{Project_data[2].head}</h5>
                            </div>
                        </div>
                  </div>

                  <div className='Project_list'>
                        <div className='project_details'>
                            <img src={Project_data[3].img} alt="Pesticide" />
                        </div>
                        <div className='project_heads'>
                            <div>
                                <h5>{Project_data[3].head}</h5>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Project;

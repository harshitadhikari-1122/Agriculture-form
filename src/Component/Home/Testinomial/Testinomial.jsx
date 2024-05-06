import React, { useState } from 'react';
import './Testinomial.css';
import f1 from '../../Images/f-1.jpeg';
import f2 from '../../Images/f-5.jpg';
import f3 from '../../Images/f-8.jpg';
import quote from "../../Images/quote.png";


const Testinomial = () => {
    const testimonials = [
        {
            img: f1,
            name: 'Michael Smith',
            text: "I'm impressed by their rice seeds' quality, free from harmful pesticides. Their dedication to sustainable farming, with a focus on preserving the environment and nurturing healthy crops, is truly commendable."
          },
        {
            img: f2,
            name: 'Lisa Brown',
            text: "Their corn seeds are top-notch, coupled with fair pricing. Their pesticide management project ensures a sustainable approach, making them a leader in environmentally conscious cultivation methods."
          },
        {
            img: f3,
            name: 'Alex Johnson',
            text: "Their vegetable grocery project is a great initiative for the community. It's convenient and supports local farmers, including those who provide high-quality fruits and vegetables.I appreciate their commitment to sustainability and supporting local producers."
          }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handleDotClick = (index) => {
        setCurrentTestimonial(index);
    };

    return (
        <div className='testi_container'>
            <div className='test_data'>
                <div className='test_head'>
                    <h5>Our Testimonials</h5>
                </div>
                <div className='test_heading'>
                    <h1>WHAT THEY’RE TALKING ABOUT</h1>
                </div>
                <div className='test_details'>
                    <div className='testi_list'>
                        <div className='testinomial'>
                            <div className='person_img'><img src={testimonials[currentTestimonial].img} alt={testimonials[currentTestimonial].name} /></div>
                            <div className='quote'>
                               <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div className='testinomial_thoughts'>
                            <div className='para-testi'>
                                <p>" {testimonials[currentTestimonial].text} "</p>
                            </div>
                            <div className='testi_name'>
                                <div className="test_name_head">
                                    <h6>{testimonials[currentTestimonial].name}</h6>
                                </div>
                                <div className='test_occ'>
                                    <h6>Customer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dots'>
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Testinomial;

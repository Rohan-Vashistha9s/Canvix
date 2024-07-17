import React, { useState } from 'react';
import ellipse16 from '../assests/Ellipse 16.png';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const testimonials = [
    {
        quote: "“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”",
        name: "Jacqueline Miller",
        title: "CEO of an eduport"
    },
    {
        quote: "“The team was supportive and proactive throughout the project, ensuring a smooth and successful outcome.”",
        name: "Michael Johnson",
        title: "Project Manager at TechCorp"
    },
    {
        quote: "“An exceptional service that goes above and beyond expectations. Highly recommend to everyone!”",
        name: "Emily Davis",
        title: "Freelance Designer"
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const { quote, name, title } = testimonials[currentIndex];

    return (
        <div className='Testimonial'>
            <div>
                <img src={ellipse16} alt="" className='absolute' />
            </div>
            <div>
                <h1>{quote}</h1>
            </div>
            <div className='slider'>
                <h2>{name}</h2>
                <p>{title}</p>
                <div className='groups'>
                    <div className='group2a' onClick={handlePrevClick}>
                        <FaCircleChevronLeft size={38} />
                    </div>
                    <div className='group2b' onClick={handleNextClick}>
                        <FaCircleChevronRight size={38} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
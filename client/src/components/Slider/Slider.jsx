import React from 'react'
import { Carousel } from 'react-bootstrap';

const Slider = ({photos}) => {
    return (
        <Carousel>
            {photos.map(photo => {
                return (
                    <Carousel.Item key={photo}>
                        <img className='d-block' src={photo} alt="slider-post"/>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default Slider;

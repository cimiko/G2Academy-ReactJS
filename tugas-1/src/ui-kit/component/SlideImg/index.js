import React from 'react';
import { Carousel } from 'react-bootstrap'
import Img from 'ui-kit/Atom/Img';
import { pic1, pic2, pic3, pic4, pic5 } from 'ui-kit/image';

function SlideImg({ className }) {
    return (
        <Carousel className={className}>
            <Carousel.Item>
                <Img src={pic1} alt="First slide" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
                <Img src={pic2} alt="Second slide" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
                <Img src={pic3} alt="Third slide" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
                <Img src={pic4} alt="Four slide" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
                <Img src={pic5} alt="Five slide" className="d-block w-100" />
            </Carousel.Item>
        </Carousel>
    )
}

export default SlideImg;

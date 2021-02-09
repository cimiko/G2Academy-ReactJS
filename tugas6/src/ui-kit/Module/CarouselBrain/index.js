import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Img } from 'ui-kit/Atom'
import { slide1, slide2,slide3,slide4,slide5,slide6 } from 'ui-kit/Files/Img'

function CarouselBrain({ children }) {
    return (
        <Carousel
            plugins={[
                'centered',
                'infinite',
                'arrows',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 2,
                        interval: 2000
                    },
                },
            ]}
            animationSpeed={1000}
        >
            <Img src={slide1} alt="Slide 1" />
            <Img src={slide2} alt="Slide 1" />
            <Img src={slide3} alt="Slide 1" />
            <Img src={slide4} alt="Slide 1" />
            <Img src={slide5} alt="Slide 1" />
            <Img src={slide6} alt="Slide 1" />
        </Carousel>
    )
}

export default CarouselBrain

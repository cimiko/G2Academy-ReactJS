import React from 'react'
import { Carousel } from 'antd';
import { Img } from 'ui-kit/Atom'
import { slide1, slide2, slide3, slide4, slide5, slide6 } from 'ui-kit/Files/Img'
import style from './style.module.css'

function Slide() {

    return (
        <Carousel effect="fade" autoplay speed='500'>
            <div className={style.slide1}>
                <Img src={slide1} alt="Slide 1" className={style.slideImg} />
            </div>
            <div className={style.slide2}>
                <Img src={slide2} alt="Slide 2" className={style.slideImg}/>
            </div>
            <div>
                <Img src={slide3} alt="Slide 3" className={style.slideImg}/>
            </div>
            <div>
                <Img src={slide4} alt="Slide 4" className={style.slideImg}/>
            </div>
            <div>
                <Img src={slide5} alt="Slide 5" className={style.slideImg}/>
            </div>
            <div>
                <Img src={slide6} alt="Slide 6" className={style.slideImg}/>
            </div>
        </Carousel>
    )
}

export default Slide

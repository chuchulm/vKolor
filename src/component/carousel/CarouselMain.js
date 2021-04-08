import React from 'react'
import { Carousel } from 'antd';
import img1 from '../../image/vkolorColores.jpg'
import img2 from '../../image/v1.jpg'
import img3 from '../../image/v8.jpg'



export const CarouselMain = () => {
    return (
        <div className="container-carousel">
            <Carousel autoplay>
                <div>
                  <img src={img1} alt="" className=" img-carousel"/>
                </div>
                <div>
                  <img src={img2} alt="" className=" img-carousel"/>
                </div>
                <div>
                  <img src={img3} alt="" className=" img-carousel"/>
                </div>
              
            </Carousel>,
            
        </div>
    )
}

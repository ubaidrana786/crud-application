import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Assest/Image/image1.jpg"
import image2 from "../Assest/Image/image2.jpg"
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
export const CodeFor = () => {
    return (
        <div  style={{maxWidth:"100%"}}>
             
              <Slider {...settings}>
                  <div>
                      <img src={image1} style={{width:"100%",height:"70%" }} alt="" />
                  </div>
                  <div>
                      <img src={image2} style={{width:"100%",height:"70%" }} alt="" />
                  </div>
                  
                 
              </Slider>
        </div>
    )
}

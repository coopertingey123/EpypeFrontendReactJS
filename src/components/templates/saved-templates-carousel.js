import React from "react";
import Slider from "react-slick";
import Carousel from "react-slick";
import { Container, Row } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PhotoOne from "../../../static/assets/previews/VLPExample.jpg"

// import PhotoTwo from "../../../static/assets/phones/Carousel-img-2.png";
// import PhotoThree from "../../../static/assets/phones/Carousel-img-3.png";
// import PhotoFour from "../../../static/assets/phones/Carousel-img-4.png";
// import PhotoFive from "../../../static/assets/phones/Carousel-img-5.png";
// import PhotoSix from "../../../static/assets/phones/Carousel-img-6.png";

export default function PhoneCarousel() {
    
    let settings = {
        // infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        arrows: true,
        // centerMode: true,
        // centerPadding: '60px',
        // focusOnSelect: true,
        // swipe: true,
        className: "px-5 justify-content-center",
        id:"slides-wrapper",
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }
  return (
    <Container id="user-themes" fluid>
        <h2 className="text-center text-white">Re-use content you've already created.</h2>
        <Container id="slides-wrapper" className="px-5 justify-content-center"  fluid>
            <Slider {...settings}>
                <div className="slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
                <div className="templatesWrapper slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
                <div className="templatesWrapper slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
                <div className="templatesWrapper slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
                <div className="templatesWrapper slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
                <div className="templatesWrapper slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
                <div className="templatesWrapper slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
                <div className="templatesWrapper slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
                <div className="templatesWrapper slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
                <div className="templatesWrapper slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
                <div className="templatesWrapper slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
                <div className="templatesWrapper slide py-5">
                    <img className="slide-img" width="140px" src={PhotoOne} alt="image" />
                    <div className="text-box pt-2">
                        <p>Bareback Riding Event</p>
                    </div>
                </div>
            </Slider>
       </Container>
    </Container>
  );
}
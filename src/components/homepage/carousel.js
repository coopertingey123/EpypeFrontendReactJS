import React from "react";
import Slider from "react-slick";
import Carousel from "react-slick";
import { Container, Row } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PhotoOne from "../../../static/assets/phones/Carousel-img-1.png";
import PhotoTwo from "../../../static/assets/phones/Carousel-img-2.png";
import PhotoThree from "../../../static/assets/phones/Carousel-img-3.png";
import PhotoFour from "../../../static/assets/phones/Carousel-img-4.png";
import PhotoFive from "../../../static/assets/phones/Carousel-img-5.png";
import PhotoSix from "../../../static/assets/phones/Carousel-img-6.png";

export default function PhoneCarousel() {
    
    let settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
        swipe: true,
        className: "center",
        adaptiveHeight: true,
        speed: 500,
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
    <Container id="section-three-container" fluid>
        <div className="slides-container-one">
            <h1>Clients Portfolio</h1>
            <p>Here are a few sample Video Landing Pages:</p>
        </div>
        <Container id="slides-wrapper" fluid>
            <Row>
                <Slider {...settings}>
                    <div className="slide">
                        <div>
                            <img className="slide-img" alt="image" src={PhotoOne}/>
                        </div>
                        <div className="text-box">
                            <h4>Board of Advisors</h4>
                            <p>Promotional Events</p>
                        </div>
                    </div>
                    <div className="slide">
                        <div>
                            <img className="slide-img" alt="image" src={PhotoTwo}/>
                        </div>
                        <div className="text-box">
                            <h4>Jim Piccolo</h4>
                            <p>Speaker / Coaching</p>
                        </div>
                    </div>
                    <div className="slide">
                        <div>
                            <img className="slide-img" alt="image" src={PhotoThree}/>
                        </div>
                        <div className="text-box">
                            <h4>Bottega University</h4>
                            <p>Training / Education</p>
                        </div>
                    </div>
                    <div className="slide">
                        <div>
                            <img className="slide-img" alt="image" src={PhotoFour}/>
                        </div>
                        <div className="text-box">
                            <h4>Platinum Payment Systems</h4>
                            <p>Virtual Business Card</p>
                        </div>
                    </div>
                    <div className="slide">
                        <div>
                            <img className="slide-img" alt="image" src={PhotoFive}/>
                        </div>
                        <div className="text-box">
                            <h4>Kevin Harrington - Shark Tank</h4>
                            <p>Sell your book</p>
                        </div>
                    </div>
                    <div className="slide">
                        <div>
                            <img className="slide-img" alt="image" src={PhotoSix}/>
                        </div>
                        <div className="text-box">
                            <h4>Global Education Philanthropists</h4>
                            <p>Nonprofit / Charitable</p>
                        </div>
                    </div>
                </Slider>
            </Row>
        </Container>
    </Container>
  );
}
import React from 'react'
import { Container, Row, Col} from "react-bootstrap";

import BaseNavbar from "../navigation/navbar";
import PhoneCarousel from "./carousel";

import IphoneImage from "../../../static/assets/phones/iPhone11-hero-image7.png";
import RecordImage from "../../../static/assets/phones/excitedGirl.jpg";
import UploadImage from "../../../static/assets/phones/phoneWithKeyboard.jpg";
import PublishImage from "../../../static/assets/phones/PlatinumVLPIphone.jpg";
import PurplePhone from "../../../static/assets/phones/purple-phone.png";
import GreenPhone from "../../../static/assets/phones/green-phone.png";




export default function (props) {
    return (
        <Container id="main_content" fluid>
            <div id="hero-wrapper" className="hero-text-container py-5">
                <Container>
                    <h1 className="mt-lg-5">
                        <span className="thin-heading-font">Look </span>Your Clients <br/>
                        <span className="green-text">
                            in the Eye.
                        </span>
                    </h1>
                    <h2>
                        Sending videos personalizes your message. <br/>Speak to clients face-to-face.
                    </h2>
                    <div className="text-demo-box py-3">
                        <h3>Try it!</h3>
                        <p>
                            Text <strong className="green-text">DEMO</strong> to <strong className="green-text">888-349-5000</strong>
                        </p>
                        <p>Message and data rates may apply.</p>
                        <div className="iphone-image">
                            <img src={IphoneImage}/>
                        </div>
                    </div>
                </Container>
            </div>

            {/* <div className="section-two"> */}
                <Container id="second-section-wrapper">
	                <h1>How it Works</h1>
                    
                    <Container className="groups-container">
                        <Row>
                            <Col className="group col-12 col-lg-4">
                                <img src={RecordImage}/>
                                <h1>Record</h1>
                                <p> Record a video with your camera</p>
                            </Col>
                            <Col className="group col-12 col-lg-4">
                                <img src={UploadImage}/>
                                <h1>Upload</h1>
                                <p>Upload your new or saved video</p>
                            </Col>
                            <Col className="group col-12 col-lg-4">
                                <img src={PublishImage}/>
                                <h1>Publish</h1>
                                <p>Your video page is ready to view</p>
                            </Col>
                        </Row>
                    </Container>
                    
                    
                    
                </Container>
            {/* </div> */}
            <div className="section-three">
                <PhoneCarousel/>
            </div>
            
            <div className="section-four">
                <Container id="fourth-section-wrapper">
                    <Row>
                        <Col xs={12} md={8}>
                            <h1>Know Who's Interested</h1>
                            <p>We'll provide stats to tell you what customers are doing. Click throughs, video views, purchases, and more.</p>
                        </Col>
                        <Col >
                            <img src={PurplePhone} alt="image" />
                        </Col>
                    </Row>
                    <Row >
                        <Col >
                            <img src={GreenPhone} alt="image" />
                        </Col>
                        <Col xs={12} md={8} >
                            <h1>Automated Follow-up</h1>
                            <ul>
                                <li>Additional video pages sent to customers</li>
                                <li>Sent at timed intervals</li>
                                <li>Customize your content</li>
                            </ul>

                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    )
}
import React from 'react';
import { Container, Col, Row } from "react-bootstrap";

import BuildingPhoto from "../../../static/assets/photos/EpypeCompanyBuilding.jpg";

export default function ContactUs(props) {
    return (
        <Container id="contact-us" className="p-5">
            <h1 className="p-3">Contact Us</h1>
            <Row className="align-items-center">
                <Col>
                    <img width="100%" src={BuildingPhoto}/>
                </Col>
                <Col>
                    <h3>EPYPE</h3>
                    <p>
                        933 E. 1910 S.<br />
                        Suite 202<br />
                        Provo, UT 84606<br />
                    </p>
                    <h3>Customer Support</h3>
                    <p>
                        <a href="mailto:support@epype.net">support@epype.net</a><br/>
                    </p>
                    <h3>Sales</h3>
                    <p>
                        <a href="mailto:sales@epype.net">sales@epype.net</a>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
import React from 'react';
import { Container, Button, Row, Col } from "react-bootstrap";

export default function Signup(props) {
    return (
        <Container id="signup-preview" className="my-5">
            <Row className="justify-content-center">
                <Col className="text-center" md={6}>
                    <h3 className="py-3">Thank you for choosing EPYPE!</h3>
	                <p>To sign up, you'll need to create an account by entering some information about yourself.</p>
	                <p>To purchase for multiple users or a company, contact our sales team at <a href="mailto:sales@epype.net">sales@epype.net.</a></p>
	                <Button className="text-center" variant="primary" href="/signup/signup">Let's Get Started &#187;</Button>
                </Col>
            </Row>
	        
        </Container>
    )
}
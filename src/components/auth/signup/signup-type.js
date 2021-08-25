import React from 'react'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import BaseNavbar from "../../navigation/navbar";

export default function SignupType(props) {
    return (
        <Container className="py-3 text-center">
            <BaseNavbar/>
            <h1 className="green-text">Signup</h1>
            <h3 className="purple2-text">Does your organization already have an EPYPE account?</h3>
            <Row className="justify-content-center">
                <Col className="col-6">
                    
                    
                    <p>If your organization supplies EPYPE for you, choose the second option.  We can always connect you to your organization later.</p>
            
                    <Form.Group className="form1 text-start m-2" action="" method="post">
                        <Form.Check type="radio" label="Create my account without attaching it to my organization"/>
                        <Form.Check type="radio"label="My organization has an EPYPE account"/>
                    </Form.Group>
                    <Button className="m-1">Next</Button>
                    <Button className="bg-secondary m-1">Back</Button>
                </Col>
            </Row>
        </Container>
    )
}

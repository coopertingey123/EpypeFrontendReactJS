import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export default function Signup(props) {
    return (
        <Container className="py-3 text-center">
            <h1 className="green-text">
                Signup
            </h1>
            <h3 className="purple2-text">
                Let's start creating your account.
            </h3>
            <Row className="justify-content-center">
                <Col className="col-6">
                    <Form className="form1 text-start py-3" action="" method="post">
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email address"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password"/>
                            <Form.Text className="text-muted">
                                Your password must consist of at least 1 uppercase letter, 1 lowercase letter, and 1 number, and be at least 8 characters long.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password"/>
                        </Form.Group>
                    </Form>
                    <Button>Next</Button>
                </Col>
            </Row>
        {/* <SignupType/>
        <SignupUserInfo/>
        <SignupPackageSelect/>
        <SignupPaymentEntry/> */}
        </Container>
        
    )
}
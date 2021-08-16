import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

export default function PasswordReset(props) {
    return (
        <Container>
            <h1 className="green-text">Password Reset</h1>
            <Row className="justify-content-center py-3">
                <Col className="col-6">
                    <Form>
                        <Form.Group className="text-start">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Button className="m-1">Reset Password</Button>
            <Button className="btn-danger m-1">Cancel</Button>
            
        </Container>
    )
}
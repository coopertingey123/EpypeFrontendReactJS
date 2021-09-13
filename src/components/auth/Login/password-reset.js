import React, {useState} from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

export default function PasswordReset(props) {

    const [email, setEmail] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email)
    }

    return (
        <Container className="text-center">
            <h1 className="green-text">Password Reset</h1>
            <Row className="justify-content-center py-3">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="text-start">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                autoFocus
                                maxLength="100"
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Button type="submit" className="m-1">Reset Password</Button>
                            <Button className="btn-danger m-1" href="/">Cancel</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
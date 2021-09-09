import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export default function Signup(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
      }

    return (
        <Container className="py-3 text-center">
            <h1 className="green-text">
                Signup
            </h1>
            <h3 className="purple2-text">
                Let's start creating your account.
            </h3>
            <Row className="justify-content-center">
                <Col className="" md={8}>
                    <Form className="form1 text-start py-3" action="" method="post" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Email address"
                                value={email}
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Your password must consist of at least 1 uppercase letter, 1 lowercase letter, and 1 number, and be at least 8 characters long.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button type="submit" href="/signup/client-info">Next</Button>
                        </div>
                    </Form>
                    
                </Col>
            </Row>
        </Container>
        
    )
}
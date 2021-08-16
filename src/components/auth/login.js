import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

import PasswordReset from "./password-reset"

export default function Login(props) {
    return (

        <Container id="login-container" className="py-3 text-center">
            <h1 className="green-text">Log in</h1>
            <Row className="justify-content-center">
                <Col className="col-3 text-start">
                    <Form id="loginForm" className="p-3 border" method="post" action="">
                    <Form.Group className="mb-3" controlId="emailForm">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" maxlength="100" autocomplete="username" autofocus/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="passwordForm">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" id="frmPassword" name="password" maxlength="20" autocomplete="current-password"/>
                    </Form.Group>
                    <p className="text-center">
                        <Button className="btn-primary" type="submit">Log In</Button>
                    </p>
                    <p className="text-center">
                        <a href="/login/password-reset.php">Forgot your password?</a>
                    </p>
                    </Form>
                </Col>
            </Row>
            
            <PasswordReset/>
        </Container>
    )
}


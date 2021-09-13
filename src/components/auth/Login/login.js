import React, {useState} from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(event) {
        event.preventDefault();
        console.log(email)
        console.log(password)
      }

    return (

        <Container id="login-container" className="py-3 text-center">
            <h1 className="green-text">Log in</h1>
            <Row className="justify-content-center">
                <Col className="text-start" md={4}>
                    <Form className="p-3 border needs-validation" method="post" action="" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="emailForm">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Enter email" 
                                maxLength="100" 
                                autoComplete="username" 
                                autoFocus
                                value={email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="passwordForm">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                onChange={(e) => setPassword(e.target.value)} 
                                type="password" 
                                placeholder="Enter password"
                                name="password" 
                                maxLength="20" 
                                autoComplete="current-password"
                                value={password}
                            />
                        </Form.Group>
                        <div className="invalid-feedback">Username or password incorrect. Try again or reset password below</div>
                        <p className="text-center">
                            <Button className="btn-primary" type="submit" href="/user">Log In</Button>
                        </p>
                        <p className="text-center">
                            <a href="/reset-password">Forgot your password?</a>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


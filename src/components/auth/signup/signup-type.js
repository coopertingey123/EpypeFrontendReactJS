import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function SignupType(props) {

    const [signupType, setSignupType] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(signupType)
      }

    return (
        <Container className="py-3">
            <h1 className="green-text text-center">Signup</h1>
            <h3 className="purple2-text text-center">Does your organization already have an EPYPE account?</h3>
            <Row className="text-center justify-content-center">
                <Col className="" lg={6}>
                    
                    <Form onSubmit={handleSubmit}>
                        <Form.Text>If your organization supplies EPYPE for you, choose the second option.  We can always connect you to your organization later.</Form.Text>
                
                        <Form.Group className="form1 text-start m-5" action="" method="post">
                            <Form.Check 
                                type="radio" 
                                label="Create my account without attaching it to my organization"
                                checked={signupType === "no-epype"}
                                value="no-epype"
                                onChange={(e) => setSignupType(e.target.value)}
                            />
                            <Form.Check 
                                type="radio"
                                label="My organization has an EPYPE account"
                                checked={signupType === "epype"}
                                value="epype"
                                onChange={(e) => setSignupType(e.target.value)}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button className="bg-secondary m-1" href="/signup/signup">Back</Button>
                            <Button className="m-1" href="/signup/client-info" type="submit">Next</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

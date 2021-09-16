import React, { useState } from 'react'
import { Container, Form, Button, Row, Col} from 'react-bootstrap'

export default function AddSmsKeyword(props) {

    const [optinMessage, setOptinMessage] = useState("")
    const [messages, setMessages] = useState("")
    const [time, setTime] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log(optinMessage)
        console.log(messages)
        console.log(time)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Label>
                    <p className="text-thin">
                        The first time someone texts your keyword they will receive a message 
                        confirming that they have opted in to receive future messages from you. Customize this message below: 
                    </p>
                </Form.Label>
                <Row>
                    <Col className = "col-8">
                        <Form.Group className="py-2">
                            <Form.Text>
                                What is this keyword for? Examples are "Book Club Information", "Deal Alerts", or "Billing Updates."
                            </Form.Text>
                            <Form.Control
                                value={optinMessage}
                                onChange={(e) => setOptinMessage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="py-2">
                            <Form.Text>
                                How often will you send messages to people who opt in?
                            </Form.Text>
                            <Row className="d-flex align-items-center">
                                <Col className="col-auto">
                                    <Form.Control
                                        value={messages}
                                        onChange={(e) => setMessages(e.target.value)}
                                    />
                                </Col>
                                <Col className="col-auto">
                                    <Form.Label className="d-flex align-items-center">
                                        message(s) every
                                    </Form.Label>
                                </Col>
                                <Col className="">
                                    {/* <Form.Control

                                    /> */}
                                    <select name="" id="" value={time} onChange={(e) => setTime(e.target.value)} className="form-select">
                                        <option value="month">Month</option>
                                        <option value="week">Week</option>
                                    </select>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                    <Col className="col-4">
                        <Form.Text>
                            This is the opt in message: {optinMessage}
                        </Form.Text>
                    </Col>
                </Row>
                <div className="m-1">
                    <Button className="m-1" type="submit">Next</Button>
                    <Button className="m-1" variant="danger">Cancel</Button>
                </div>
            </Form>
            

        </Container>
    )
}
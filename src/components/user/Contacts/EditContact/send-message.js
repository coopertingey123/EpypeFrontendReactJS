import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'

export default function SendMessage(props) {

    const [charsRemaining, setCharsRemaining] = useState(138)
    const [keyword, setKeyword] = useState("")
    const [message, setMessage] = useState("")
    const [vlp, setVlp] = useState("")

    function countChars() {
        let charLength = message.length
        setCharsRemaining(138 - charLength)
    }

    return (
        <Container>
            <h2 className="green-text py-2">Send Message</h2>
            <Alert variant="primary">
                <p>This contact has opted in to text messages for this keyword:</p>
                <Button>COOPER</Button>
            </Alert>
            <Form>
                <Form.Group>
                    <Form.Label>Subscribed Keyword</Form.Label>
                    <select name="" id="" className="form-select" value={keyword} onChange={(e) => setKeyword(e.target.value)}>
                        <option value="COOPER">COOPER</option>
                        <option value="FOOTBALL">FOOTBALL</option>
                    </select>
                </Form.Group>
                <Form.Group className="py-3">
                    <Form.Label>Message Content</Form.Label>
                    <textarea className="form-control" id="" cols="30" rows="5" value={message} 
                        onChange={(e) => {
                            setMessage(e.target.value)
                            countChars(e.target.value)
                        }}/>
                    <Form.Text>Characters Remaining: {charsRemaining}</Form.Text>
                </Form.Group>
                <Row>
                    <Col>
                        <select className="form-select" id="" defaultValue="Select VLP" value={vlp} onChange={(e) => setVlp(e.target.value)}>
                            <option value="asdf">asdf</option>
                            <option value="lkj;">lkj;</option>
                            <option value="Westwood Football Fundraiser">Westwood Football Fundraiser</option>
                            <option value="Welcome to the Rodeo">Welcome to the Rodeo</option>
                        </select>
                    </Col>
                    <Col className="col-auto">
                        <Button>Insert Link</Button>
                    </Col>
                </Row>
                <div className="text-center py-3">
                    <Button className="m-1">Send Message</Button>
                    <Button className="m-1" variant="danger">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}
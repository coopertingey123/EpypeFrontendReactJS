import React, {useState} from 'react'
import { Container, Form, Row, Col, Alert, Button } from 'react-bootstrap'

export default function Invoices(props) {

    const [show, setShow] = useState(false)
    const [message, setMessage] = useState("")
    const [charsRemaining, setCharsRemaining] = useState(138)

    function countChars() {
        let charLength = message.length
        setCharsRemaining(138 - charLength)
    }

    return (
        <Container>
            <h2 className="green-text py-2">Invoices</h2>
            <Alert className="pb-3" variant="danger">
                No invoice history was found
            </Alert>
            <div className="text-center p-3">
                <Button onClick={() => setShow(true)}>+ Add a new Invoice</Button>
            </div>
            {show ? 
                <Container className="pb-5">
                    <h3>Invoice Items</h3>
                    <p className="text-end">
                        <strong>Total </strong> $0.00
                    </p>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <select id="" className="form-select">
                                        <option value="Custom Item">Custom Item</option>
                                        <option value="$5 Donation">$5 Donation</option>
                                        <option value="Custom Item">Custom Item</option>
                                        <option value="Custom Item">Custom Item</option>
                                    </select>
                                </Col>
                                <Col className="col-auto">
                                    <Button>Add Item</Button>
                                </Col>
                            </Row>
                            
                        </Form.Group>
                    </Form>
                    <hr />
                    <h3 className="py-2">Send the invoice to your contact.</h3>
                    <Form>
                        <textarea name="" id="" cols="30" rows="5" className="form-control"
                            placeholder="Enter a brief message and select a VLP to send to your contact." 
                            value={message} onChange={(e)=>{
                                setMessage(e.target.value) 
                                countChars(e.target.value)
                            }}
                        />
                        <Form.Text>Characters remaining: {charsRemaining}</Form.Text>
                        <Row className="py-2">
                            <Col>
                                <select id="" className="form-select">
                                    <option value="">Select VLP</option>
                                    <option value="asdf">asdf</option>
                                    <option value="lkj;">lkj;</option>
                                    <option value="Welcome to the Rodeo">Welcome to the Rodeo</option>
                                    <option value="Westwood Football Fundraiser">Westwood Football Fundraiser</option>
                                </select>
                            </Col>
                            <Col className="col-auto">
                                <Button>Add VLP</Button>
                            </Col>
                        </Row>
                        <Form.Check type="checkbox" label="This contact has consented to receive text messages from me."/>
                    </Form>
                    <div className="text-center">
                        <Button className="m-1">Send Now</Button>
                        <Button className="m-1">Save For Later</Button>
                        <Button className="m-1" variant="danger">Cancel</Button>
                    </div>
                </Container>
            : null}
        </Container>
    )
}
import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

export default function AddSmsKeyword(props) {

    const [myMessage, setMyMessage] = useState("")
    const [link, setLink] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log(myMessage)
        console.log(link)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="py-2">
                    <Form.Label>
                        Enter the message you want sent in response to people who text your keyword.
                    </Form.Label>
                    <textarea
                        value={myMessage}
                        onChange={(e) => setMyMessage(e.target.value)}
                        className="form-control"
                    />
                    <Form.Text>
                        Characters remaining: 137
                    </Form.Text>
                </Form.Group>
                <Form.Group className="py-2">
                    <Row>
                        <Col>
                            <select className="form-select" value={link} onChange={(e) => setLink(e.target.value)}>
                                <option value="https://vlp.epype.net/863lWk">BareBack Friday</option>
                                <option value="https://vlp.epype.net/myEXAn">Bareback Riding 7/22/21</option>
                                <option value="https://vlp.epype.net/V6aWan">Bareback Riding winning ride 7/21/21</option>
                                <option value="https://vlp.epype.net/5nGNNk">Barrels Friday</option>
                                <option value="https://vlp.epype.net/5y9DXn">Bull Riding</option>
                                <option value="https://vlp.epype.net/mk1Yvk">Bull Riding 7/22/21</option>
                                <option value="https://vlp.epype.net/mk1YRk">Bull Riding Friday</option>
                                <option value="https://vlp.epype.net/OnoWVn">Extreme Bulls</option>
                                <option value="https://vlp.epype.net/NyQrM6">Kaycee Feild Welcomes You!</option>
                                <option value="https://vlp.epype.net/Bne10n">Mutton Bustin Friday</option>
                                <option value="https://vlp.epype.net/5y2YDn">Pink Night</option>
                                <option value="https://vlp.epype.net/QyRwQ6">QR Test VLP</option>
                                <option value="https://vlp.epype.net/863lvk">Results and Winning Video Page</option>
                                <option value="https://vlp.epype.net/56lW3y">Results Page</option>
                            </select>
                        </Col>
                        <Col className="col-auto">
                            <Button>Insert Link</Button>
                        </Col>
                    </Row>
                </Form.Group>
                <div className="py-2">
                    <Button className="m-1" type="submit">Add Keyword</Button>
                    <Button className="m-1" type="submit">Next</Button>
                    <Button className="m-1" variant="danger">Cancel</Button>
                </div>
            </Form>
            

        </Container>
    )
}
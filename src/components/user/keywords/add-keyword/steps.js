import React, {useState} from 'react'
import { Container, Form, Button, Row, Col, Alert, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import YoutubeLogo from "../../../../../static/assets/photos/youtube-logo.png"

export default function Steps(props) {

    const [step, setStep] = useState(1)
    const [keyword, setKeyword] = useState("")
    const [optinMessage, setOptinMessage] = useState("")
    const [messages, setMessages] = useState("")
    const [time, setTime] = useState("")
    const [myMessage, setMyMessage] = useState("")
    const [link, setLink] = useState("")
    const [charsLeft, setCharsLeft] = useState(137)
    const [showModal, setShowModal] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(step)
        console.log(keyword)
        console.log(optinMessage)
        console.log(messages)
        console.log(time)
        console.log(myMessage)
        console.log(link)
    }

    function countChars() {
        let charLength = myMessage.length
        setCharsLeft(137 - charLength)
    }
    console.log(step)

    return (
        <Container>
            <h2 className="green-text py-2">Add SMS Keyword</h2>
            <hr style={{width: "100%"}}/>
            <div id="steps-progress-bar-wrapper" className="with-video-training">
                <ul id="steps-progress-bar">
                    <li className={step === 1, 2, 3 ? "active" : null}>
                        <FontAwesomeIcon icon="key"/>
                        <p>Create Keyword</p>
                    </li>
                    <li className={step !== 1 ? "active" : null}>
                        <FontAwesomeIcon icon="tags"/>
                        <p>Compose Message</p>
                    </li>
                    <li className={step === 3 ? "active" : null}>
                        <FontAwesomeIcon icon="envelope-open-text"/>
                        <p>Message Response</p>
                    </li>
                </ul>
                <div id="videoTrainingIcon" className="text-center" onClick={() => setShowModal(true)}>
                    <div className="text-center">
                        <img src={YoutubeLogo} width="60px" alt="" />
                    </div>
                    <p>Video Help</p>
                </div>
                <Modal className="fade" show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Dialog>
                        <Modal.Body>
                            <div className="ratio ratio-16x9">
                                <iframe src="" frameborder="0"></iframe>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => setShowModal(false)}>Close</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
		    </div>
            <Form onSubmit={handleSubmit}>
                {step == 1 ? <Form>
                    <h4 className="green-text my-2">Create Keyword</h4>
                    <Form.Group className="py-2">
                        <Form.Label>
                            Enter a word that people can text to your EPYPE phone number. When people text this number, 
                            they will receive a message from you, which can include a link to one of your
                            Video Landing Pages.
                        </Form.Label>
                        <Form.Control
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <Form.Text>
                            Use 2-12 alphanumeric characters (no spaces)
                        </Form.Text>
                    </Form.Group>
                    <div className="m-1">
                        <Button className="m-1" type="submit" onClick={() => setStep(2)}>Next</Button>
                        <Button className="m-1" variant="danger" href="/user/sms-keywords">Cancel</Button>
                    </div>
                </Form> : null}
                {step == 2 ? <Form>
                    <h4 className="green-text my-2">Compose Message</h4>
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
                                        <select name="" id="" value={time} onChange={(e) => setTime(e.target.value)} className="form-select">
                                            <option value="month">Month</option>
                                            <option value="week">Week</option>
                                        </select>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                        <Col className="col-4">
                            <Form.Label>
                                Your opt-in message for <strong><span>{keyword}</span></strong>:  
                            </Form.Label>
                            <Alert variant="primary">
                                <p>
                                    <em>[YOUR PHONE NUMBER]</em>
                                    <span>{optinMessage}</span>.
                                    Msg&amp;Data rates may apply.
                                    <span id="optInFrequencyCount"> 1</span> msg/<span id="optInFrequencyInterval">mo</span>. Reply HELP for help, STOP to cancel.
                                </p>
                            </Alert>
                        </Col>
                    </Row>
                    <div className="m-1">
                        <Button className="m-1" type="submit" onClick={() => setStep(3)}>Next</Button>
                        <Button className="m-1" variant="danger" onClick={() => setStep(1)}>Back</Button>
                    </div>
                </Form> : null}
                {step == 3 ? <Form>
                    <h4 className="green-text my-2">Message Response</h4>
                    <Form.Group className="py-2">
                        <Form.Label>
                            Enter the message you want sent in response to people who text your keyword.
                        </Form.Label>
                        <textarea
                            value={myMessage}
                            onChange={
                                (e) => {
                                    setMyMessage(e.target.value),
                                    countChars(e.target.value)
                                }
                            }
                            className="form-control"
                        />
                        <Form.Text>
                            Characters remaining: {charsLeft}
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
                        <Button className="m-1" variant="danger" onClick={() => setStep(2)}>Back</Button>
                    </div>
                </Form> : null}
            </Form>
        </Container>
    )
}
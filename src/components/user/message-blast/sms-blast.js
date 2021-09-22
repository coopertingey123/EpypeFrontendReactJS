import React, { useState } from 'react'
import { Container, Table, Button, Row, Col, Alert, Form, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker'
import YoutubeLogo from "../../../../static/assets/photos/youtube-logo.png"

export default function SMSBlast(props) {

    const [step, setStep] = useState(1)
    const [chooseKeyword, setChooseKeyword] = useState("")
    const [tag, setTag] = useState("")
    const [message, setMessage] = useState("")
    const [charsRemaining, setCharsRemaining] = useState(138)
    const [vlp, setVlp] = useState("")
    const [frequency, setFrequency] = useState("")
    const [startDate, setStartDate] = useState("")
    const [sendTime, setSendTime] = useState("")
    const [checked, setChecked] = useState(true)
    const [blast, setBlast] = useState(false)
    const [showModal, setShowModal] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(step)
        console.log(chooseKeyword)
        console.log(tag)
        console.log(message)
        console.log(charsRemaining)
        console.log(vlp)
        console.log(frequency)
        console.log(startDate)
        console.log(sendTime)
        console.log(checked)
        console.log(blast)
    }

    function countChars() {
        let charLength = message.length
        setCharsRemaining(138 - charLength)
    }

    function changeChecked() {
        if (checked === true) {
            setChecked(false)
        }
        else {
            setChecked(true)
        }
    }

    function scheduleBlast() {
        if (blast === true) {
            setBlast(false)
        }
        else {
            setBlast(true)
        }
    }

    return (
        <Container className="text-center">
            <h1 className="green-text">Create a Message Blast</h1>
            <div id="steps-progress-bar-wrapper" className="with-video-training">
                <ul id="steps-progress-bar">
                    <li className={step === 1, 2, 3, 4, 5 ? "active" : ""}>
                        <FontAwesomeIcon icon="key"/>
                        <p>Choose SMS Keyword</p>
                    </li>
                    <li className={step > 1 ? "active" : ""}>
                        <FontAwesomeIcon icon="tags"/>
                        <p>Choose Tags</p>
                    </li>
                    <li className={step > 2 ? "active" : ""}>
                        <FontAwesomeIcon icon="envelope-open-text"/>
                        <p>Compose Message</p>
                    </li>
                    <li className={step > 3 ? "active" : ""}>
                        <FontAwesomeIcon icon="user-check"/>
                        <p>Add Opt-in Message</p>
                    </li>
                    <li className={step > 4 ? "active" : ""}>
                        <FontAwesomeIcon icon="paper-plane"/>
                        <p>Review &amp; Send</p>
                    </li>
                </ul>
                <div id="videoTrainingIcon"  className="text-center" onClick={() => setShowModal(true)}>
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
                { step === 1 ? 
                    <Container>
                        <h3 className="m-4">Choose a keyword</h3>
                        <Form.Group className="text-center py-3">
                            <Form.Label>Select the keyword to use for this Message Blast</Form.Label>
                            <select 
                                name="" 
                                id="" 
                                className="form-select"
                                value={chooseKeyword}
                                onChange={(e) => setChooseKeyword(e.target.value)}
                            >
                                <option value="">Choose Keyword</option>
                                <option value="cooper">COOPER</option>
                                <option value="football">FOOTBALL</option>
                            </select>
                        </Form.Group>
                        <Button type="submit" className="my-2 mx-1" onClick={() => setStep(2)}>Next</Button>
                        <Button variant="danger" className="my-2 mx-1">Cancel</Button>
                    </Container>
                : null }
                {step === 2 ? 
                    <Container>
                        <h3 className="m-4">Select Tags</h3>
                        <Form.Group className="text-center py-3">
                            <Form.Label>Select the tags associated with the contacts you would like to reach. Chose <strong>Any</strong> to match all contacts.</Form.Label>
                            <select 
                                name="" 
                                id="" 
                                className="form-select"
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                                >
                                <option value="">Any</option>
                                <option value="new contact">New Contact</option>
                                <option value="john wright">Johnny Wright</option>
                                <option value="max wright">Max Wright</option>
                            </select>
                        </Form.Group>
                        <Button className="my-2 mx-1" onClick={() => setStep(3)}>Next</Button>
                        <Button className="my-2 mx-1" onClick={() => setStep(1)}>Back</Button>
                        <Button variant="danger" className="my-2 mx-1">Cancel</Button>
                    </Container>
                : null }
                {step === 3 ? 
                    <Container>
                        <h3 className="m-4">Enter the message you want to send.</h3>
                        <Row className="mb-3">
                            <Row>
                                <Col>
                                    <Row>
                                        <div className="mb-3">
                                            <textarea 
                                                id="message_initial_message" 
                                                name="message_initial_message" 
                                                className="text_message_input form-control" 
                                                data-max-chars="138" 
                                                data-count-display-id="char_counter_initial_message" 
                                                rows="3" 
                                                cols="40" 
                                                placeholder="What would you like to say to your amazing people?"
                                                value={message}
                                                onChange={
                                                    (e) => {
                                                        setMessage(e.target.value)
                                                        countChars(e.target.value)
                                                    }
                                                }
                                                >

                                            </textarea>
                                            <Form.Text>
                                                Characters remaining: <span id="char_counter_initial_message">{charsRemaining}</span>
                                            </Form.Text>
                                        </div>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="mb-3">
                                                <select name="" id="" 
                                                    className="form-select"
                                                    value={vlp}
                                                    onChange={(e) => setVlp(e.target.value)}
                                                    >
                                                    <option value="">Select VLP</option>
                                                    <option value="westwood football fundraiser">Westwood Football Fundraiser</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col className="col-auto">
                                            <div className="mb-3">
                                                <Button 
                                                    id="insertVlpButton" 
                                                    className="btn-primary" 
                                                    disabled={vlp === "" ? true : false}
                                                    onClick={() => setMessage(message + vlp)}
                                                    >
                                                        Insert Link
                                                </Button>
                                            </div>
                                        </Col>             
                                    </Row>
                                    
                                </Col>
                                <Col id="step3-right-column" className="col-lg-auto d-flex justify-content-center">
                                    <div className="phone-display">
                                        <div className="user messages">
                                            <span id="messageBubble" className="message last">
                                                <span className="blastMessageContent">{message}</span>
                                                Reply STOP to cancel
                                            </span>
                                        </div>
                                        <div className="bottom-phone"></div>
                                    </div>
                                </Col>
                            </Row>
                        </Row>
                        <Button id="step3NextButton" className="nextButton m-1" onClick={() => setStep(4)}>Next</Button>
                        <Button id="step3NextButton" className="nextButton m-1" onClick={() => setStep(2)}>Back</Button>
                        <Button id="step3NextButton" className="nextButton m-1" variant="danger">Cancel</Button>
                    </Container>
                : null }
                {step === 4 ? 
                    <Container>
                        <Alert className="alert-info mt-3 align-items-center">
                            <FontAwesomeIcon icon="info-circle"/>
                            <p>All the contacts associated with the tags you selected are already opted in to the keyword <strong>COOPER</strong>, so there's no need for an opt-in request message. Click <strong>NEXT</strong> to continue.</p>
                        </Alert>
                        <h3 className="py-3">Please review your message content before sending your blast.</h3>
                        <Row className="mb-3">
                            <Col id="optin-review-column" className="flex-column align-items-center">
                                <Alert className="alert-info d-flex align-items-center">
                                    <p> <FontAwesomeIcon icon="info-circle"/> The <strong className="getContactCountByKeywordAndTag"></strong> contacts who have already opted in to the keyword <strong className="optInMesageKeyword"></strong> will have this experience.</p>
                                </Alert>
                                <div className="phone-display">
                                    <div className="user messages">
                                        <span id="messageBubble" className="message last">
                                            Thank you for optin in to the Westwood Football Fundraiser! Follow the link to support the team!
                                            <span className="blastMessageContent"> https://vlp.epype.net/5y9JD6 </span>
                                            Reply STOP to cancel
                                        </span>
                                    </div>
                                    <div className="bottom-phone"></div>
                                </div>
                            </Col>
                            <Col id="optin-review-column" className="flex-column align-items-center">
                                <Alert id="optin-contact-count" className="alert-info d-flex align-items-center mt-3">
                                    <p> <FontAwesomeIcon icon="info-circle"/> The <strong className="getContactCountByKeywordAndTag"></strong> contacts who have NOT already opted in to the keyword <strong className="optInMesageKeyword">COOPER</strong> will have this experience.</p>
                                </Alert>
                                <div className="phone-display">
                                    <div className="user messages">
                                        <div id="opt-in-request-message-5" className="message">
                                            <span id="optinMessageBubbleContent" className="optinMessageBubbleContent"> Join the Westwood Football Fundraiser! </span>
                                            Msg&amp;Data rates may apply. Reply <span className="optInMessageKeyword">COOPER</span> to opt in, STOP to cancel
                                        </div>
                                    </div>
                                    <div className="contact messages">
                                        <div id="opt-in-keyword" className="message last">
                                            <span className="optInMessageKeyword">COOPER</span>
                                        </div>
                                    </div>
                                    {/* <div className="user messages">
                                        <span id="opt-in-message" className="message">
                                            <span id="smsOptInMessage">https://vlp.epype.net/5y9JD6</span>
                                        </span>
                                    </div> */}
                                    <div className="user messages">
                                        <span id="messageBubble" className="message last">
                                            Thank you for optin in to the Westwood Football Fundraiser! Follow the link to support the team!
                                            <span className="blastMessageContent"> https://vlp.epype.net/5y9JD6 </span>
                                            Reply STOP to cancel
                                        </span>
                                    </div>
                                    <div className="bottom-phone"></div>
                                </div>
                            </Col>
                        </Row>
                        <hr/>
                        <Container>
                            <h3 className="">Scheduled Blasts</h3>
                            <Alert className="alert-danger">You don't have any scheduled message blasts.</Alert>
                            <Table className="table-striped border_bottom table-responsive">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Send Date</th>
                                        <th>Message</th>
                                        <th>Opt-In Message</th>
                                        <th>Message Count</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>8/31/2021 4:45 am</td>
                                        <td>asdfasdf http://vlp.epype.net/5y9JD6</td>
                                        <td></td>
                                        <td>13</td>
                                        <td><Button variant="outline-danger" className="btn-sm"> <FontAwesomeIcon icon="trash"/> Cancel</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="text-center">
                                <Button onClick={scheduleBlast}>Schedule A Message Blast</Button>
                            </div>
                        </Container>
                        <hr/>
                        {blast ? 
                            <div id="scheduleSendWrapper">
                                <h3>Schedule your blast.</h3>
                                <div className="mb-3">
                                    <select 
                                        className="form-select" 
                                        id="scheduleSend"
                                        value={frequency}
                                        onChange={(e) => setFrequency(e.target.value)}
                                        >
                                        <option value="now">Send Now</option>
                                        <option value="future">Send Later</option>
                                    </select>
                                </div>
                                <Row>
                                    <Col className="col-lg mb-3">
                                        <Form.Label>Date</Form.Label>
                                        <div className="input-group">
                                            <DatePicker 
                                                className="form-control" 
                                                selected={startDate} 
                                                onChange={(e) => setStartDate(e)}
                                            />
                                        </div>
                                    </Col>
                                    <Col className="mb-3">
                                        <Form.Label>Time</Form.Label>
                                        <select 
                                            name="" 
                                            id="" 
                                            className="form-select"
                                            value={sendTime}
                                            onChange={(e) => setSendTime(e.target.value)}
                                        >
                                            <option value="">---</option>
                                            <option value="00:00">12:00 AM</option>
                                            <option value="00:15">12:15 AM</option>
                                            <option value="00:30">12:30 AM</option>
                                            <option value="00:45">12:45 AM</option>
                                            <option value="01:00">1:00 AM</option>
                                            <option value="01:15">1:15 AM</option>
                                            <option value="01:30">1:30 AM</option>
                                            <option value="01:45">1:45 AM</option>
                                            <option value="02:00">2:00 AM</option>
                                            <option value="02:15">2:15 AM</option>
                                            <option value="02:30">2:30 AM</option>
                                            <option value="02:45">2:45 AM</option>
                                            <option value="03:00">3:00 AM</option>
                                            <option value="03:15">3:15 AM</option>
                                            <option value="03:30">3:30 AM</option>
                                            <option value="03:45">3:45 AM</option>
                                            <option value="04:00">4:00 AM</option>
                                            <option value="04:15">4:15 AM</option>
                                            <option value="04:30">4:30 AM</option>
                                            <option value="04:45">4:45 AM</option>
                                            <option value="05:00">5:00 AM</option>
                                            <option value="05:15">5:15 AM</option>
                                            <option value="05:30">5:30 AM</option>
                                            <option value="05:45">5:45 AM</option>
                                            <option value="06:00">6:00 AM</option>
                                            <option value="06:15">6:15 AM</option>
                                            <option value="06:30">6:30 AM</option>
                                            <option value="06:45">6:45 AM</option>
                                            <option value="07:00">7:00 AM</option>
                                            <option value="07:15">7:15 AM</option>
                                            <option value="07:30">7:30 AM</option>
                                            <option value="07:45">7:45 AM</option>
                                            <option value="08:00">8:00 AM</option>
                                            <option value="08:15">8:15 AM</option>
                                            <option value="08:30">8:30 AM</option>
                                            <option value="08:45">8:45 AM</option>
                                            <option value="09:00">9:00 AM</option>
                                            <option value="09:15">9:15 AM</option>
                                            <option value="09:30">9:30 AM</option>
                                            <option value="09:45">9:45 AM</option>
                                            <option value="10:00">10:00 AM</option>
                                            <option value="10:15">10:15 AM</option>
                                            <option value="10:30">10:30 AM</option>
                                            <option value="10:45">10:45 AM</option>
                                            <option value="11:00">11:00 AM</option>
                                            <option value="11:15">11:15 AM</option>
                                            <option value="11:30">11:30 AM</option>
                                            <option value="11:45">11:45 AM</option>
                                            <option value="12:00">12:00 PM</option>
                                            <option value="12:15">12:15 PM</option>
                                            <option value="12:30">12:30 PM</option>
                                            <option value="12:45">12:45 PM</option>
                                            <option value="13:00">1:00 PM</option>
                                            <option value="13:15">1:15 PM</option>
                                            <option value="13:30">1:30 PM</option>
                                            <option value="13:45">1:45 PM</option>
                                            <option value="14:00">2:00 PM</option>
                                            <option value="14:15">2:15 PM</option>
                                            <option value="14:30">2:30 PM</option>
                                            <option value="14:45">2:45 PM</option>
                                            <option value="15:00">3:00 PM</option>
                                            <option value="15:15">3:15 PM</option>
                                            <option value="15:30">3:30 PM</option>
                                            <option value="15:45">3:45 PM</option>
                                            <option value="16:00">4:00 PM</option>
                                            <option value="16:15">4:15 PM</option>
                                            <option value="16:30">4:30 PM</option>
                                            <option value="16:45">4:45 PM</option>
                                            <option value="17:00">5:00 PM</option>
                                            <option value="17:15">5:15 PM</option>
                                            <option value="17:30">5:30 PM</option>
                                            <option value="17:45">5:45 PM</option>
                                            <option value="18:00">6:00 PM</option>
                                            <option value="18:15">6:15 PM</option>
                                            <option value="18:30">6:30 PM</option>
                                            <option value="18:45">6:45 PM</option>
                                            <option value="19:00">7:00 PM</option>
                                            <option value="19:15">7:15 PM</option>
                                            <option value="19:30">7:30 PM</option>
                                            <option value="19:45">7:45 PM</option>
                                            <option value="20:00">8:00 PM</option>
                                            <option value="20:15">8:15 PM</option>
                                            <option value="20:30">8:30 PM</option>
                                            <option value="20:45">8:45 PM</option>
                                            <option value="21:00">9:00 PM</option>
                                            <option value="21:15">9:15 PM</option>
                                            <option value="21:30">9:30 PM</option>
                                            <option value="21:45">9:45 PM</option>
                                            <option value="22:00">10:00 PM</option>
                                            <option value="22:15">10:15 PM</option>
                                            <option value="22:30">10:30 PM</option>
                                            <option value="22:45">10:45 PM</option>
                                            <option value="23:00">11:00 PM</option>
                                            <option value="23:15">11:15 PM</option>
                                            <option value="23:30">11:30 PM</option>
                                            <option value="23:45">11:45 PM</option>
                                        </select>
                                    </Col>
                                </Row>
                            </div>
                         : null}
                        <div className="text-center">
                            <Row className="justify-content-center">
                                <Col className="px-5" md={3}>
                                    <Form.Check 
                                        className="mb-3 float-none" 
                                        type="checkbox" 
                                        label="Does everything look correct?" 
                                        id="confirm-blast"
                                        onClick={changeChecked}
                                        />
                                </Col>
                            </Row>
                            <div className="mb-3">
                                <Button type="submit" id="step5NextButton" className="nextButton mx-1" disabled={checked} onClick={() => setStep(5)}>Confirm &amp; Send</Button>
                                <Button id="step5PrevButton" className="prevButton mx-1" onClick={() => setStep(3)}>Back</Button>
                                <Button id="step5CancelButton" className="btn-danger mx-1">Cancel</Button>
                            </div>
                        </div>
                    </Container>
                : null }
                {step === 5 ? 
                    <Container>
                        <h2 className="text-success">
                            {/* insert fontawesome icon here */} Thank you! Your message blast has been sent!
                        </h2>
                        <Alert id="blast-results" className="alert-success">
                            <div>
                                <p>Your message was sent to <strong id="successfulBlastMessageCount">5</strong> contacts.</p>
                            </div>
                            <div>
                                <p>An opt-in request was sent to <strong id="successfulOptInRequestCount">10</strong> contacts.</p>
                            </div>
                        </Alert>
                        <Alert className="alert-danger">
                            <p>Some messages could not be sent.</p>
                            <ul id="blast-errors"></ul>
                        </Alert>
                        <p className="text-center">
                            <Button id="return-home-btn" className="returnButton btn-primary" onClick={() => setStep(6)} href="/user">Done</Button>
                        </p>
                        <p id="try-again-later-wrapper" className="text-center">
                            <Button id="try-again-later-btn" className="tryAgainLaterButton btn-primary">Try Again Later</Button>
                        </p>
                    </Container>
                : null }
            </Form>
            {/* <ScheduledBlasts/> */}
        </Container>
    )
}
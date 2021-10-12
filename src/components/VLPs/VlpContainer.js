// import { Dropdown } from 'bootstrap';
import React, {useState} from 'react'
import {Container, Card, Col, Row, Button, Modal, Dropdown, DropdownButton, Form, Table, Nav} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ExcitedGirl from "../../../static/assets/photos/vlpExample2.jpg"
import BarChart from "../user/Reports/bar-chart"
import DatePicker from 'react-datepicker';

export default function VlpContainerThumbnail(props) {

    const [showVideoModal, setVideoModalShow] = useState(false);
    const [showQuickSendModal, setShowQuickSendModal] = useState(false);
    const [showActivityModal, setShowActivityModal] = useState(false)

    const [sendMessage, setSendMessage] = useState("")
    const [sendIndividualMessage, setSendIndividualMessage] = useState("")
    const [messageKeyword, setMessageKeyword] = useState("")
    const [indPhoneNumber, setIndPhoneNumber] = useState("")
    
    const [active, setActive] = useState("1")

    const [subMessageSendTime, setSubMessageSendTime] = useState("")
    const [indMessageSendTime, setIndMessageSendTime] = useState("")
    const [subSendDate, setSubSendDate] = useState("")
    const [subSendTime, setSubSendTime] = useState("")
    const [indSendDate, setIndSendDate] = useState("")
    const [indSendTime, setIndSendTime] = useState("")

    const [subCharsRemaining, setSubCharsRemaining] = useState(100)
    const [charsRemaining, setCharsRemaining] = useState(100)

    const [currentTab, setCurrentTab] = useState("subscribers")

    function countSubChars() {
        let charLength = sendMessage.length
        setSubCharsRemaining(100 - charLength)
    }
    function countChars() {
        let charLength = sendIndividualMessage.length
        setCharsRemaining(100 - charLength)
    }

    function handleSubmit() {
        console.log(messageKeyword)
        console.log(sendMessage)
        console.log(subMessageSendTime)
        console.log(subSendTime)
        console.log(subSendDate)
        console.log(indPhoneNumber)
        console.log(sendIndividualMessage)
        console.log(indMessageSendTime)
        console.log(indSendTime)
        console.log(indSendDate)
    }

    return (
        <Container>

            <Modal 
                show={showVideoModal} 
                onHide={() => setVideoModalShow(false)} 
                className="videoModal"
            >
                <Modal.Body>
                    <div id="videoContainer">
                        {/* <video id="myVideo" playsinline className="video-js vjs-default-skin vjs-big-play-centered"></video> */}
                        {/* Video Goes here */}
                        <img width="100%" src={ExcitedGirl} alt="" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setVideoModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal 
                show={showQuickSendModal} 
                onHide={() => setShowQuickSendModal(false)} 
                // onClick={() => showQuickSendModal(true)}
                id="videoPlaybackModal" tabindex="-1" 
                aria-labelledby="loginPatienterModalLabel" 
                aria-hidden="true"
                className="sendQuickMessageModal"
            >
                <h3 className="p-3 green-text">Quick Send</h3>
                <h4 className="py-2 px-3">Choose Recipient</h4>
                <Nav variant="tabs" id="crminfocontainer" className="m-3" activeKey={active}>
                    <Nav.Item>
                        <Nav.Link
                            href="" 
                            onClick={() => {
                                setCurrentTab("subscribers") 
                                setActive(1)
                            }} 
                            className="text-decoration-none"
                            eventKey="1"
                            >
                                Subscribers
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            onClick={() => {
                                setCurrentTab("individual")
                                setActive(2)
                            }}
                            eventKey="2"
                            >
                            Individual
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                {currentTab == "subscribers" ? 
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Send to your subscribers by Keyword.</Form.Label>
                            <Form.Control 
                                value={messageKeyword}
                                onChange={(e) => setMessageKeyword(e.target.value)}
                            />
                        </Form.Group>
                        <hr />
                        <h4 className="py-2">Message</h4>
                        <Form.Group>
                            <Form.Label>
                                Your Video Landing Page URL will be automatically added to your message.
                            </Form.Label>
                            <textarea 
                                className="form-control" 
                                id="" cols="15" rows="5"
                                value={sendMessage}
                                onChange={
                                    (e) => {
                                        setSendMessage(e.target.value)
                                        countSubChars(e.target.value)
                                    }
                                }
                            />
                            <Form.Text>
                                Characters remaining: {subCharsRemaining}
                            </Form.Text>
                        </Form.Group>
                        <hr />
                        <h4 className="py-2">Schedule Send Time</h4>
                        <select 
                            className="form-select mb-3" id=""
                            value={subMessageSendTime}
                            onChange={(e) => setSubMessageSendTime(e.target.value)}
                        >
                            <option value="now">Send Now</option>
                            <option value="later">Send Later</option>
                        </select>
                        {subMessageSendTime == "later" ? 
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>
                                            Date
                                        </Form.Label>
                                        <DatePicker 
                                            className="form-control"
                                            selected={subSendDate}
                                            onChange={(e) => setSubSendDate(e)}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            Time
                                        </Form.Label>
                                        <select 
                                            className="form-select"
                                            value={subSendTime}
                                            onChange={(e) => setSubSendTime(e.target.value)}
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
                            </Form.Group>  
                    : null }
                    </Form>
                </Modal.Body> :
                    <Modal.Body>
                        Send to an individual phone number
                        <Form>
                            <Form.Group>
                                <Form.Control 
                                    className="my-2" 
                                    placeholder="e.g. (201) 555-0123"
                                    value={indPhoneNumber}
                                    onChange={(e) => setIndPhoneNumber(e.target.value)}
                                />
                                <Form.Check type="checkbox" label="This person has consented to receive text messages from me"/>
                            </Form.Group>
                            <hr />
                            <h4 className="py-2">Message</h4>
                            <Form.Group>
                                <Form.Label>
                                    Your Video Landing Page URL will be automatically added to your message.
                                </Form.Label>
                                <textarea 
                                    className="form-control" 
                                    id="" cols="15" rows="5"
                                    value={sendIndividualMessage}
                                    onChange={
                                        (e) => {
                                            setSendIndividualMessage(e.target.value)
                                            countChars(e.target.value)
                                        }
                                    }
                                />
                                <Form.Text>
                                    Characters remaining: {charsRemaining}
                                </Form.Text>
                            </Form.Group>
                            <hr />
                            <h4 className="py-2">Schedule Send Time</h4>
                        <select 
                            className="form-select mb-3" id=""
                            value={indMessageSendTime}
                            onChange={(e) => setIndMessageSendTime(e.target.value)}
                        >
                            <option value="now">Send Now</option>
                            <option value="later">Send Later</option>
                        </select>
                        {indMessageSendTime == "later" ? 
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>
                                            Date
                                        </Form.Label>
                                        <DatePicker 
                                            className="form-control"
                                            selected={indSendDate}
                                            onChange={(e) => setIndSendDate(e)}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            Time
                                        </Form.Label>
                                        <select 
                                            className="form-select"
                                            value={indSendTime}
                                            onChange={(e) => setIndSendTime(e.target.value)}
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
                            </Form.Group>  
                            : null }
                        </Form>
                    </Modal.Body>
                }
                <Modal.Footer>
                    <Button onClick={
                        () => handleSubmit(),
                        () => setShowQuickSendModal(false)
                    }>Send Now </Button>
                    <Button variant="danger" onClick={() => setShowQuickSendModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>


            <Modal 
                show={showActivityModal} 
                onHide={() => setShowActivityModal(false)} 
                // onClick={() => setShowActivityModal(true)}
                id="videoPlaybackModal" tabindex="-1" 
                aria-labelledby="loginPatienterModalLabel" 
                aria-hidden="true"
                className="activityModal"
            >
                <Modal.Body>
                    <h3 className="green-text">VLP Activity</h3>
                    <hr />
                    <Row className="py-2">
                        <Col>
                            Last 7 days
                        </Col>
                        <Col className="text-end">
                            <Button className="btn-sm">Older History</Button>
                        </Col>
                    </Row>
                    <Table className="table-responsive table-striped border_bottom">
                        <thead className="thead-dark">
                            <tr>
                                <td></td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>VLP views</td>
                                <td className="text-end">0</td>
                            </tr>
                            <tr>
                                <td>Video watches</td>
                                <td className="text-end">0</td>
                            </tr>
                            <tr>
                                <td>Average watch time (seconds)</td>
                                <td className="text-end">0</td>
                            </tr>
                            <tr>
                                <td>VLP shares</td>
                                <td className="text-end">0</td>
                            </tr>
                            <tr>
                                <td>Link clicks: General</td>
                                <td className="text-end">0</td>
                            </tr>
                            <tr>
                                <td>Link Clicks: Action Items</td>
                                <td className="text-end">0</td>
                            </tr>
                            <tr>
                                <td>Link clicks: Social Media</td>
                                <td className="text-end">0</td>
                            </tr>
                            <tr>
                                <td>Product Purchases</td>
                                <td className="text-end">0</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p>Last 7 days</p>
                    <div>
                        <BarChart/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowActivityModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>


            <Card className="mb-3">
                <Card.Header>
                    <h6 className="mb-0">Example VLP</h6>
                </Card.Header>
                <Card.Body className="p-2">
                    <div className="videoThumbnail">
                        <a 
                        id="actionVideoPlay853"
                        className="actionVideoPlay"
                        onClick={() => setVideoModalShow(true)}
                        href="#"
                        data-video-id="853"
                        data-video-url=""
                        data-bs-toggle="modal"
                        data-bs-target="#videoPlaybackModal">
                            <img src={ExcitedGirl} alt="Example VLP" title="Example VLP"/>
                        </a>
                        <p className="carousel-caption"><small>August 2, 2021</small></p>
                    </div>
                    <p className="carousel-caption"><small>August 2, 2021</small></p>
                    <Row className="mt-2 justify-content-space-between videoPageLinks">
                        <Col className="text-start">
                            <Button 
                                id="actionSms853" 
                                variant="outline-primary" 
                                className="btn-sm actionSms mx-1" 
                                href="" title="Quick Send"
                                onClick={() => setShowQuickSendModal(true)}>
                                <small> <FontAwesomeIcon icon="share"/> Send</small>
                            </Button>
                            <Button 
                                id="vlpStats853" 
                                variant="outline-primary" 
                                className="btn-sm actionStats mx-1" 
                                href="" title="VLP Stats"
                                onClick={() => setShowActivityModal(true)}
                                >
                                <small> <FontAwesomeIcon icon="chart-bar"/> Activity</small>
                            </Button>
                            <Button id="actionUpdate853" variant="outline-primary" className="btn-sm actionUpdate853 mx-1" href="/user/update-vlp" title="Update">
                                <small> <FontAwesomeIcon icon="edit" /> Update</small>
                            </Button>
                        </Col>
                        <Col className="col-auto">
                            <Dropdown>
                                <DropdownButton variant="outline-secondary" size="sm" href="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Dropdown.Item id="actionView853" className="actionView" href="" target="_blank" title="View VLP"> <FontAwesomeIcon icon="eye"/> View</Dropdown.Item>
                                    <Dropdown.Item id="actionCopy853" className="actionCopy" href="" target="" title="Copy URL"> <FontAwesomeIcon icon="copy"/> Copy URL</Dropdown.Item>
                                    <Dropdown.Item id="actionDeactivate853" className="actionDeactivate" href="" target="" title="Deactivate"> <FontAwesomeIcon icon="ban"/> Deactivate</Dropdown.Item>
                                    <Dropdown.Item id="actionDelete853" className="actionDelete" href="" target="" title="Delete"> <FontAwesomeIcon icon="trash"/> Delete</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

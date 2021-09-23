// import { Dropdown } from 'bootstrap';
import React, {useState} from 'react'
import {Container, Card, Col, Row, Button, Modal, Dropdown, DropdownButton, Form, Table} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ExcitedGirl from "../../../static/assets/photos/vlpExample2.jpg"
import BarChart from "../user/Reports/bar-chart"

export default function VlpContainerThumbnail(props) {

    const [showVideoModal, setVideoModalShow] = useState(false);
    const [showQuickSendModal, setShowQuickSendModal] = useState(false);
    const [showActivityModal, setShowActivityModal] = useState(false)

    const [sendMessage, setSendMessage] = useState("")
    const [messageKeyword, setMessageKeyword] = useState("")
    const [messageSendTime, setMessageSendTime] = useState("")


    const [charsRemaining, setCharsRemaining] = useState(100)

    const [currentTab, setCurrentTab] = useState()

    function countChars() {
        let charLength = message.length
        setCharsRemaining(100 - charLength)
    }

    return (
        <Container>


            <Modal 
                show={showVideoModal} 
                onHide={() => setVideoModalShow(false)} 
                id="videoPlaybackModal" tabindex="-1" 
                aria-labelledby="loginPatienterModalLabel" 
                aria-hidden="true"
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
                <Nav variant="tabs" id="crminfocontainer" className="my-3" activeKey={active}>
                    <Nav.Item>
                        <Nav.Link
                            href="" 
                            onClick={() => {
                                setCurrentTab("subscribers") 
                                setActive("1")
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
                                setActive("2")
                            }}
                            eventKey="2"
                            >
                            Individual
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Modal.Body>
                    <Form>
                        <h3>Choose Recipient</h3>
                        <Form.Group>
                            <Form.Label>Send to your subscribers by Keyword.</Form.Label>
                            <Form.Control 
                                value={messageKeyword}
                                onChange={(e) => setMessageKeyword(e.target.value)}
                            />
                        </Form.Group>
                        <hr />
                        <h3>Message</h3>
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
                                        countChars(e.target.value)
                                    }
                                }
                            />
                            <Form.Text>
                                Characters remaining: {charsRemaining}
                            </Form.Text>
                        </Form.Group>
                        <hr />
                        <h3>Schedule Send Time</h3>
                        <select 
                            className="form-select" id=""
                            value={messageSendTime}
                            onChange={(e) => setMessageSendTime(e.target.value)}
                        >
                            <option value="now">Send Now</option>
                            <option value="later">Send Later</option>
                        </select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Send Now </Button>
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
                        onClick={() => setShowActivityModal(true)}
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
                            <Button id="actionUpdate853" variant="outline-primary" className="btn-sm actionUpdate853 mx-1" href="" title="Update">
                                <small> <FontAwesomeIcon icon="edit"/> Update</small>
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

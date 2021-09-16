// import { Dropdown } from 'bootstrap';
import React, {useState} from 'react'
import {Container, Card, Col, Row, Button, Modal, Dropdown, DropdownButton} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ExcitedGirl from "../../../static/assets/photos/vlpExample2.jpg"

export default function VlpContainerThumbnail(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="p-3">
            <Modal show={show} onHide={handleClose} id="videoPlaybackModal" className="modal" tabindex="-1" aria-labelledby="loginPatienterModalLabel" aria-hidden="true">
                <Modal.Body>
                    <div id="videoContainer">
                        {/* <video id="myVideo" playsinline className="video-js vjs-default-skin vjs-big-play-centered"></video> */}
                        {/* Video Goes here */}
                        <img width="100%" src={ExcitedGirl} alt="" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Row>
                <Col className="col-12 col-md-6 col-lg-4 col-xxl-3 videoPageInfo videoPageStatus2">
                    <Card className="mb-3">
                        <Card.Header>
                            <h6 className="mb-0">Example VLP</h6>
                        </Card.Header>
                        <Card.Body className="p-2">
                            <div className="videoThumbnail">
						        <a 
                                id="actionVideoPlay853"
                                className="actionVideoPlay"
                                onClick={handleShow}
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
                                    <Button id="actionSms853" variant="outline-primary" className="btn-sm actionSms mx-1" href="" title="Quick Send">
                                        <small> <FontAwesomeIcon icon="share"/> Send</small>
                                    </Button>
                                    <Button id="vlpStats853" variant="outline-primary" className="btn-sm actionStats mx-1" href="" title="VLP Stats">
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
                </Col>
            </Row>
        </Container>
    )
}

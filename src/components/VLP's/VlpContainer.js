// import { Dropdown } from 'bootstrap';
import React from 'react'
import {Container, Card, Col, Row, Button, Modal, DropdownButton, Dropdown} from "react-bootstrap";

import ExcitedGirl from "../../../static/assets/phones/iPhone11-hero-image7.png"

export default function (props) {
    return (
        <Container id="main_content">
            <Modal id="videoPlaybackModal" className="modal" tabindex="-1" aria-labelledby="loginPatienterModalLabel" aria-hidden="true">
                <Modal.Dialog>
                    <Modal.Content>
                        <Modal.Body>
                            <div id="videoContainer">
                                {/* <video id="myVideo" playsinline class="video-js vjs-default-skin vjs-big-play-centered"></video> */}
                                Video Goes here
                            </div>
                        <div className="modal-footer">
                            <Button data-bs-dismiss="modal">Close</Button>
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button>Close</Button>
                        </Modal.Footer>
                    </Modal.Content>

                </Modal.Dialog>
            </Modal>
            <Row className="mt-2 justify-content-space-between videoPageLinks">
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
                                href="#"
                                data-video-id="853"
                                data-video-url=""
                                data-bs-toggle="modal"
                                data-bs-target="#videoPlaybackModal">
                                    <img src={ExcitedGirl} alt="Example VLP" title="Example VLP"/>
                                </a>
						        <p className="carousel-caption"><small>August 2, 2021</small></p>
					        </div>
                            <Row className="mt-2 justify-content-space-between align-items-center videoPageLinks">
                                <Col className="col-auto">
                                    <Button id="actionSms853" variant="outline-primary" className="btn-sm actionSms mx-1" href="" title="Quick Send">
                                        <small>Send</small>
                                    </Button>
                                    <Button id="vlpStats853" variant="outline-primary" className="btn-sm actionStats mx-1" href="" title="VLP Stats">
                                        <small>Activity</small>
                                    </Button>
                                    <Button id="actionUpdate853" variant="outline-primary" className="btn-sm actionUpdate853 mx-1" href="" title="Update">
                                        <small>Update</small>
                                    </Button>
                                </Col>
                                <Col className="col-auto">
                                    <Dropdown>
                                        <DropdownButton variant="outline-secondary" className="btn-sm dropdown" href="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            <Dropdown.Item id="actionView853" className="actionView" href="" target="_blank" title="View VLP">View</Dropdown.Item>
                                            <Dropdown.Item id="actionCopy853" className="actionCopy" href="" target="" title="Copy URL">Copy URL</Dropdown.Item>
                                            <Dropdown.Item id="actionDeactivate853" className="actionDeactivate" href="" target="" title="Deactivate">Deactivate</Dropdown.Item>
                                            <Dropdown.Item id="actionDelete853" className="actionDelete" href="" target="" title="Delete">Delete</Dropdown.Item>
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

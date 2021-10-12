import React, { useState } from 'react'
import { Container, Form, Button, Alert, Row, Col, Popover, OverlayTrigger, Modal, Nav } from 'react-bootstrap'
import SavedTemplatesCarousel from "../templates/saved-templates-carousel";
import ThemesCarousel from "../templates/themes-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YoutubeLogo from "../../../static/assets/photos/youtube-logo.png"

import PhotoOne from "../../../static/assets/photos/vlpExample2.jpg"

export default function CreateVlp(props) {

    const [vlpName, setVlpName] = useState("")
    const [step, setStep] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const [templateName, setTemplateName] = useState("")
    const [active, setActive] = useState("templates")

    const popover = (
        <Popover id="popover-basic" className="text-center">
          <h4 className="p-2">Saving a Copy of Your VLP Content</h4>
          <p className="p-2">
            You've worked hard on this design, and you might want to use
            it again for another VLP. Remember that this only saves a copy
            of the content for you to re-use later-not the video that goes along with it.
          </p>
        </Popover>
    );
      

    return (
        <Container id="main_content" fluid>
            <Container>
                <h3 className="green-text">Create a VLP</h3>
                <div id="steps-progress-bar-wrapper" className="with-video-training">
                    <ul id="steps-progress-bar">
                        <li className={step === 1, 2, 3, 4, 5 ? "active" : ""}>
                            <FontAwesomeIcon icon="key"/>
                            <p>Choose Page Title</p>
                        </li>
                        <li className={step > 1 ? "active" : ""}>
                            <FontAwesomeIcon icon="grip-lines"/>
                            <p>Build Page Content</p>
                        </li>
                        <li className={step > 2 ? "active" : ""}>
                            <FontAwesomeIcon icon="envelope-open-text"/>
                            <p>Add Video</p>
                        </li>
                        <li className={step > 3 ? "active" : ""}>
                            <FontAwesomeIcon icon="user-check"/>
                            <p>Publish</p>
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
            </Container>
            {step == 1 ? 
                <Container>
                    <Form className="text-center">
                        <h3 className="p-3">
                            First, give your VLP a name.
                        </h3>
                        <Form.Control className="py-2" placeholder="Page Title" value={vlpName} onChange={(e) => setVlpName(e.target.value)}/>
                        <div className="py-3">
                            <Button className="m-1" onClick={(e) => setStep(2)}>Next</Button>
                            <Button className="m-1" variant="danger" href="/user">Cancel</Button>
                        </div>
                    </Form>
                </Container>
            : null }
            {step == 2 ? 
                <Container id="main_content" fluid>
                    <Nav variant="pills" className="d-flex justify-content-center p-3" activeKey={active}>
                        <Nav.Item>
                            <Nav.Link eventKey="templates" onClick={() => setActive("templates")}>
                                Saved Templates
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item eventKey="themes">
                            <Nav.Link eventKey="themes" onClick={() => setActive("themes")}>
                                Themes
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {active == "templates" ? 
                    <div className="section-three d-md-flex d-none">
                        <SavedTemplatesCarousel/>
                    </div>
                    : 
                    <div className="section-three d-md-flex d-none">
                        <ThemesCarousel/>
                    </div> }
                    <h2 className="text-center pb-4">Use the buttons below to build your content. </h2>
                    <Container>
                        <Row className="justify-content-center">
                            <Col>
                                <Row className="justify-content-end pe-3">
                                    <Col lg={8}>
                                        <Alert className="alert-secondary text-center">
                                            <Form.Check type="checkbox" label="I want to save this content as a template for later use."/>
                                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                                <Button className="btn-sm my-1" variant="success">Learn more</Button>
                                            </OverlayTrigger>
                                            <Form.Control value={templateName} onChange={(e) => setTemplateName(e.target.value)} placeholder="Template Name"/>
                                        </Alert>
                                        <div className="text-center title-element" width="100%">
                                            <Button style={{width: "100%"}} className="btn-lg justify-content-between my-2 p-lg-3 d-flex">
                                                <h4>
                                                    <FontAwesomeIcon className="" icon="heading"/>
                                                </h4>
                                                <h4>Add Heading</h4>
                                                <h4></h4>
                                            </Button>
                                        </div>
                                        <div className="text-center">
                                            <Button style={{width: "100%"}} className="btn-lg justify-content-between my-2 p-lg-3 d-flex">
                                                <h4>
                                                    <FontAwesomeIcon className="" icon="align-center"/>
                                                </h4>
                                                <h4>Add Text</h4>
                                                <h4></h4>
                                            </Button>
                                        </div>
                                        <div className="text-center">
                                            <Button style={{width: "100%"}} className="btn-lg justify-content-between my-2 p-lg-3 d-flex">
                                                <h4>
                                                    <FontAwesomeIcon className="" icon="image"/>
                                                </h4>
                                                <h4>Add Image</h4>
                                                <h4></h4>
                                            </Button>
                                        </div>
                                        <div className="text-center">
                                            <Button style={{width: "100%"}} className="btn-lg justify-content-between my-2 p-lg-3 d-flex">
                                                <h4>
                                                    <FontAwesomeIcon className="" icon="link"/>
                                                </h4>
                                                <h4>Add Link</h4>
                                                <h4></h4>
                                            </Button>
                                        </div>
                                        <div className="text-center">
                                            <Button style={{width: "100%"}} className="btn-lg justify-content-between my-2 p-lg-3 d-flex">
                                                <h4>
                                                    <FontAwesomeIcon className="" icon="shopping-cart"/>
                                                </h4>
                                                <h4>Add Product</h4>
                                                <h4></h4>
                                            </Button>
                                        </div>
                                        <div className="text-center">
                                            <Button style={{width: "100%"}} variant="danger" className="btn-lg justify-content-between my-2 p-lg-3 d-flex">
                                                <h4>
                                                    <FontAwesomeIcon className="" icon="trash"/>
                                                </h4>
                                                <h4>Clear Content</h4>
                                                <h4></h4>
                                            </Button>
                                        </div>
                                        <div className="text-center">
                                            <Button style={{width: "100%"}} className="btn-lg justify-content-between my-2 p-lg-3 mt-5 d-flex">
                                                <h4>
                                                    <FontAwesomeIcon className="" icon="comments"/>
                                                </h4>
                                                <h4>Contact Options</h4>
                                                <h4></h4>
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="justify-content-center mx-4">
                                <img src={PhotoOne} style={{width: "100%"}} alt="" />
                            </Col>
                        </Row>
                    </Container>
                    <div className="py-3 text-center">
                        <Button className="m-1" onClick={() => setStep(3)}>Next</Button>
                        <Button className="m-1" onClick={() => setStep(1)}>Back</Button>
                        <Button className="m-1" variant="danger" href="/user">Cancel</Button>
                    </div>
                </Container>
            : null }
            {step == 3 ?
                <Container>
                    <h3 className="text-center">Select a video option.</h3>
                    <div className="text-center">
                        <Button style={{width: "300px", height: "100px"}} className="m-2" onClick={() => setStep(5)}>
                            <div className="video">
                                <FontAwesomeIcon icon="video"/>
                            </div>
                            Record from Camera
                        </Button>
                        <Button style={{width: "300px", height: "100px"}} className="m-2" onClick={() => setStep(4)}>
                            <div className="video">
                                <FontAwesomeIcon icon="file-video"/>
                            </div>
                            Select a file
                        </Button>
                    </div>
                    <div className="text-center">
                        <Button variant="danger" href="/user" className="m-1">Cancel</Button>
                    </div>
                </Container>
            : null }
            {step == 4 ?
                <Container>
                    <h3>Select a video file.</h3>
                    <Form.Group className="py-5">
                        <Form.Control className="form-control" type="file"/>
                    </Form.Group>
                    <div className="text-center">
                        <Button onClick={() => setStep(6)} className="m-1">Upload Video</Button>
                        <Button className="m-1" onClick={() => setStep(3)}>Back</Button>
                        <Button variant="danger" className="m-1" href="/user">Cancel</Button>
                    </div>
                </Container>
            : null }
            {step == 5 ?
                <Container className="text-center py-3">
                    <h3>Record your video.</h3>
                    <img src={PhotoOne} className="text-center py-3" width="600px" alt="" />
                    <div className="buttons py-3">
                        <Button className="m-1">Save a Copy</Button>
                        <Button className="m-1" onClick={() => setStep(6)}>Upload Video</Button>
                        <Button className="m-1" onClick={() => setStep(3)}>Back</Button>
                        <Button className="m-1" variant="danger" href="/user">Cancel</Button>
                    </div>
                </Container>
            : null }
            {step == 6 ? 
                <Container className="text-center">
                    <h2 className="my-3">Thank you!</h2>
                    <strong className="my-3">Your Video Landing Page is being processed and will rbe ready shortly.</strong>
                    <Alert variant="primary" className="my-3">
                        <FontAwesomeIcon icon="info-circle"/> 
                         Your VLP will be reviewed for content and terms of service violations. We reserve the right to remove any VLP from your account.
                    </Alert>
                    <hr />
                    <h4 className="my-3">Would you like to send this VLP to your contacts right now?</h4>
                    <div className="buttons">
                        <Button className="m-1" href="/user">Quick Send</Button>
                        <Button className="m-1" href="/user">Advanced</Button>
                        <Button className="m-1" variant="danger" href="/user">Skip</Button>
                    </div>
                </Container>
            : null }
        </Container>
    )
}
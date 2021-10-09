import React, {useState} from 'react'
import {Container, Nav, Row, Col, Alert, OverlayTrigger, Button, Form, Popover} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PhotoOne from "../../../static/assets/photos/vlpExample2.jpg"
import SavedTemplatesCarousel from "../templates/saved-templates-carousel"
import ThemesCarousel from "../templates/themes-carousel"

export default function UpdateVlp(props) {

    const [active, setActive] = useState("templates")
    const [alternateThemes, setAlerternateThemes] = useState(false)
    const [templateName, setTemplateName] = useState("")

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
            <h2 className="green-text text-center pt-3">Update a VLP</h2>
            <Row>
                <Col className="text-start">
                    <Button className="mb-5 ms-5" onClick={alternateThemes == false ? () => setAlerternateThemes(true) : () => setAlerternateThemes(false)}>Alternate Themes</Button>
                </Col>
                <Col className="text-end">
                    <Button className="mb-5 me-5">Advanced Edit</Button>
                </Col>
            </Row>
            {alternateThemes ? 
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
                </Container>
            : null}
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
                <Button className="m-1" variant="danger">Cancel</Button>
            </div>
        </Container>
    )
}
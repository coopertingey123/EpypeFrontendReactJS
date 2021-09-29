import React, { useState } from 'react'
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap'
import SavedTemplatesCarousel from "./saved-templates-carousel"

import PhotoOne from "../../../static/assets/photos/vlpExample2.jpg"

export default function CreateVlp(props) {

    const [vlpName, setVlpName] = useState("")

    return (
        <Container id="main_content" fluid>
            <Container>
                <Form className="text-center">
                    <h3 className="p-3">
                        First, give your VLP a name.
                    </h3>
                    <Form.Control className="py-2" placeholder="Page Title" value={vlpName} onChange={(e) => setVlpName(e.target.value)}/>
                    <div className="py-3">
                        <Button className="m-1">Next</Button>
                        <Button className="m-1" variant="danger">Cancel</Button>
                    </div>
                </Form>
            </Container>
            <div className="section-three d-md-flex d-none">
                <SavedTemplatesCarousel/>
            </div>
            <Container>
                <h2 className="text-center">Use the buttons below to build your content. </h2>
                <Row className="space-between">
                    <Col className="flex-dir-col" lg={4}>
                        <Alert className="alert-secondary">
                            <Form.Check type="checkbox" label="I want to save this content as a template for later use"/>
                            <Form.Control value="" placeholder="Nuet is Starting a Workout Series!"/>
                        </Alert>
                        <div className="text-center title-element" width="100%">
                            <Button width="100%" className="btn-lg my-2 p-lg-3">Add Heading</Button>
                        </div>
                        <div className="text-center">
                            <Button className="btn-lg my-2 p-lg-3">Add Text</Button>
                        </div>
                        <div className="text-center">
                            <Button className="btn-lg my-2 p-lg-3">Add Image</Button>
                        </div>
                        <div className="text-center">
                            <Button className="btn-lg my-2 p-lg-3">Add Link</Button>
                        </div>
                        <div className="text-center">
                            <Button className="btn-lg my-2 p-lg-3">Add Product</Button>
                        </div>
                        <div className="text-center">
                            <Button className="btn-lg my-2 p-lg-3" variant="danger">Clear Content</Button>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <img src={PhotoOne} width="300px" alt="" />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
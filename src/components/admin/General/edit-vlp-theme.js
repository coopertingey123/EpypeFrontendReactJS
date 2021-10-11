import React, { useState } from 'react'
import { Container, Form, Col, Row, Button } from 'react-bootstrap'

import { Editor } from "@tinymce/tinymce-react"

export default function EditVlpTheme(props) {

    const [name, setName] = useState("")
    const [linkStyle, setLinkStyle] = useState("")
    const [linkIconSize, setLinkIconSize] = useState("")

    return (
        <Container>
            <h3 className="green-text py-3">Edit Video Landing Page Theme</h3>
            <Form>
                <Form.Group className="py-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} placeholder="Default EPYPE Theme"/>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label>Link Style</Form.Label>
                            <select value={linkStyle} onChange={(e) => setLinkStyle(e.target.value)} className="form-select">
                                <option value="Icon on Top">Icon on Top</option>
                                <option value="Icon on Side">Icon on Side</option>
                            </select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label>Link Icon Size</Form.Label>
                            <select value={linkIconSize} onChange={(e) => setLinkIconSize(e.target.value)} className="form-select" defaultValue="Normal">
                                <option value="x.875">x 0.875</option>
                                <option value="Normal">Normal</option>
                                <option value="x1.33">x 1.33</option>
                                <option value="x2">x 2</option>
                            </select>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="py-2">
                    <Form.Label>Example Content</Form.Label>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </Form.Group>
                <div className="text-center">
                    <Button className="m-1">Save Changes</Button>
                    <Button className="m-1" variant="danger">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}
import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

import { Editor } from "@tinymce/tinymce-react"

export default function EditEmailNotice(props) {

    const [description, setDescription] = useState("")
    const [subject, setSubject] = useState("")
    const [textBody, setTextBody] = useState("")

    return (
        <Container>
            <h3 className="green-text py-3">
                Edit Email Notice
            </h3>
            <p>Email ID:          user_signup_welcome</p>
            <Form>
                <Form.Group className="py-2">
                    <Form.Label>Email Description</Form.Label>
                    <Form.Control value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Email Subject</Form.Label>
                    <Form.Control value={subject} onChange={(e) => setSubject(e.target.value)}/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>HTML Email Body</Form.Label>
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
                <Form.Group className="py-2">
                    <Form.Label>Alternate Text-only Body</Form.Label>
                    <textarea cols="30" rows="5" className="form-control" value={textBody} onChange={(e) => setTextBody(e.target.value)}/>
                </Form.Group>
                <div className="text-center">
                    <Button className="m-1">Save Changes</Button>
                    <Button className="m-1" variant="danger" href="/admin">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}
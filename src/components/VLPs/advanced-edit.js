import React, {useRef, useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
// import { Editor } from "react-draft-wysiwyg"
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "@tinymce/tinymce-react"

export default function AdvancedEdit(props) {

    const [pageTitle, setPageTitle] = useState("my title")
    const [contactMethod, setContactMethod] = useState("")
    const [linkText, setLinkText] = useState("")
    const [phoneCall, setPhoneCall] = useState("(480) 111-1111")
    const [textMessage, setTextMessage] = useState("(480) 111-1111")
    const [email, setEmail] = useState("myemail@myemail.com")
    const [facetimePhone, setFacetimePhone] = useState("")
    const [whatsappPhone, setWhatsappPhone] = useState("")
    const [messengerId, setMessengerId] = useState("")


    const editorRef = useRef(null)
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    }

    return (
        <Container>
            <h3 className="green-text py-3">Update a VLP</h3>
            <div className="text-end">
                <Button href="/user/update-vlp">Simple Edit</Button>
            </div>
            <Form>
                <Form.Group className="py-2">
                    <Form.Label>Page Title</Form.Label>
                    <Form.Control value={pageTitle} onChange={(e) => setPageTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Content</Form.Label>
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
                    <Button onClick={log}>Log editor content</Button>
                </Form.Group>
                <h4 className="py-2">Contact Options</h4>
                <Form.Group className="py-2">
                    <Form.Label>Which contact method would you like on your VLP?</Form.Label>
                    <select className="form-select" defaultValue="none" value={contactMethod} onChange={(e) => setContactMethod(e.target.value)} id="">
                        <option value="EPYPE Profile">EPYPE Profile</option>
                        <option value="Live Chat">Live Char (Third Party)</option>
                        <option value="none">None</option>
                    </select>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Link Text</Form.Label>
                    <Form.Control value={linkText} onChange={(e) => setLinkText(e.target.value)} placeholder="Default: Let's talk!"/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Check type="checkbox" label="Phone Call" checked/>
                    <Form.Control value={phoneCall} onChange={(e) => setPhoneCall(e.target.value)}/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Check type="checkbox" label="Text Message" checked/>
                    <Form.Control value={textMessage} onChange={(e) => setTextMessage(e.target.value)}/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Check type="checkbox" label="Email" checked/>
                    <Form.Control value={email} setEmail={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Check type="checkbox" label="FaceTime Phone" checked/>
                    <Form.Control placeholder="Default: None" value={facetimePhone} onChange={(e) => setFacetimePhone(e.target.value)}/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Check type="checkbox" label="WhatsApp Phone" checked/>
                    <Form.Control placeholder="Default: None" value={whatsappPhone} onChange={(e) => setWhatsappPhone(e.target.value)}/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Check type="checkbox" label="Messenger ID/Username" checked/>
                    <Form.Control placeholder="Default: None" value={messengerId} onChange={(e) => setMessengerId(e.target.value)}/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Check type="checkbox" label="vCard Download" checked/>
                </Form.Group>
            </Form>
            <div className="text-center">
                <Button className="m-1">Save Changes</Button>
                <Button className="m-1" variant="danger">Cancel</Button>
            </div>
        </Container>
    )
}


import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function AddSmsCode(props) {

    const [smsCode, setSmsCode] = useState("")
    const [gateway, setGateway] = useState("")
    const [messageType, setMessageType] = useState("")
    const [status, setStatus] = useState("")
    const [description, setDescription] = useState("")
    const [webDescription, setWebDescription] = useState("")
    const [maxUsers, setMaxUsers] = useState("0")

    return (
        <Container>
            <h3 className="green-text py-3">Add SMS Code</h3>
            <Form>
                <Form.Group className="py-2">
                    <Form.Label>SMS Code</Form.Label>
                    <Form.Control value={smsCode} onChange={(e) => setSmsCode(e.target.value)} placeholder="e.g. (201) 555-0123"/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Gateway</Form.Label>
                    <select className="form-select" value={gateway} onChange={(e) => setGateway(e.target.value)}>
                        <option value="bandwidth">Bandwidth</option>
                        <option value="twilio">Twilio</option>
                    </select>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Message Type</Form.Label>
                    <select className="form-select" value={messageType} onChange={(e) => setMessageType(e.target.value)}>
                        <option value="SMS/MMS">SMS/MMS</option>
                        <option value="WhatsApp">WhatsApp</option>
                    </select>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Status</Form.Label>
                    <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="enabled">Enabled</option>
                        <option value="disabled">Disabled</option>
                        <option value="auto issue">Auto Issue</option>
                        <option value="reserved">Reserved</option>
                        <option value="bad">Bad</option>
                    </select>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Web Description</Form.Label>
                    <Form.Control value={webDescription} onChange={(e) => setWebDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Check label="Allow Multiple Users"/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Maximum Users</Form.Label>
                    <Form.Control value={maxUsers} onChange={(e) => setMaxUsers(e.target.value)}/>
                </Form.Group>
                <div className="text-center">
                    <Button className="m-1">Save Changes</Button>
                    <Button className="m-1" variant="danger" href="/admin/sms-codes">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}
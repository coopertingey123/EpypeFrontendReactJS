import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function SMSCodes(props) {

    const [smsCode, setSmsCode] = useState("")
    const [status, setStatus] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(smsCode)
        console.log(status)

    }

    return (
        <Container className="text-center">
            <h1 className="green-text p-3">SMS Codes</h1>
            <Button>+ Add a new SMS Code</Button>
            <Form className="text-start py-3" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>SMS Code</Form.Label>
                    <Form.Control
                        value={smsCode}
                        onChange={(e) => setSmsCode(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <select 
                        className="form-select" 
                        size="6"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="enabled">Enabled</option>
                        <option value="disabled">Disabled</option>
                        <option value="autoIssue">Auto Issue</option>
                        <option value="reserved">Reserved</option>
                        <option value="bad">Bad</option>
                    </select>
                </Form.Group>
                <div className="text-center">
                    <Button className="m-3" type="submit">Find SMS Codes</Button>
                    <Button className="m-3">Previous Search</Button>
                </div>
            </Form>
            
        </Container>
    )
}
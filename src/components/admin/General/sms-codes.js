import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function SMSCodes(props) {
    return (
        <Container className="text-center">
            <h1 className="green-text p-3">SMS Codes</h1>
            <Button>+ Add a new SMS Code</Button>
            <Form className="text-start py-3">
                <Form.Group>
                    <Form.Label>SMS Code</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <select className="form-select" size="6">
                        <option value="All">All</option>
                        <option value="">Enabled</option>
                        <option value="">Disabled</option>
                        <option value="">Auto Issue</option>
                        <option value="">Reserved</option>
                        <option value="">Bad</option>
                    </select>
                </Form.Group>
            </Form>
            <Button className="m-3">Find SMS Codes</Button>
            <Button className="m-3">Previous Search</Button>
        </Container>
    )
}
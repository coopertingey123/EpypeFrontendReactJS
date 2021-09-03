import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function AdminChangePreferences(props) {
    return (
        <Container className="text-center">
            <h1 className="green-text pt-3">Change Preferences</h1>
            <Form className="py-3 text-start">
                <Form.Group className="py-2">
                    <Form.Label>Time Zone</Form.Label>
                    <select className="form-select">
                        <option value="">Mountain</option>
                        <option value="">Alaska</option>
                        <option value="">Arizona</option>
                        <option value="">Central</option>
                        <option value="">Eastern</option>
                        <option value="">Hawaii-Aleutian</option>
                        <option value="">Pacific</option>
                    </select>
                </Form.Group>
            </Form>
            <Button className="m-1">Save Changes</Button>
            <Button className="btn-danger m-1">Cancel</Button>
        </Container>
    )
}
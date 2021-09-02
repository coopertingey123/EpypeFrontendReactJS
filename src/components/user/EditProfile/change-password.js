import React from 'react'
import { Container, Form, Button } from "react-bootstrap"

export default function ChangePassword(props) {
    return (
        <Container>
            <h1 className="green-text">Change Password</h1> 
            <h3>Fiesta Days</h3>
            <Form>
                <Form.Group className="py-2">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control/>
                </Form.Group>
            </Form>
            <p className="text-center">
                <Button className="m-1">Change Password</Button>
                <Button variant="danger" className="m-1">Cancel</Button>
            </p>
        </Container>
    )
}
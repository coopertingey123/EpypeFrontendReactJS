import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import NavbarAdmin from "../../navigation/navbar-admin";

export default function AdminChangePassword(props) {
    return (
        <Container className="text-center">
            <NavbarAdmin/>
            <h1 className="green-text pt-3">Change Password</h1>
            <Form className="py-3 text-start">
                <Form.Group className="py-2">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Confirm new password</Form.Label>
                    <Form.Control/>
                </Form.Group>
            </Form>
            <Button className="m-1">Change Password</Button>
            <Button className="btn-danger m-1">Cancel</Button>
        </Container>
    )
}
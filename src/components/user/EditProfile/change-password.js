import React, { useState } from 'react'
import { Container, Form, Button } from "react-bootstrap"

export default function ChangePassword(props) {

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log(currentPassword)
        console.log(newPassword)
        console.log(confirmPassword)
    }

    return (
        <Container>
            <h1 className="green-text">Change Password</h1> 
            <hr style={{width: "100%"}}/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="py-2">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <p className="text-center">
                <Button className="m-1" type="submit">Change Password</Button>
                <Button variant="danger" className="m-1">Cancel</Button>
            </p>
        </Container>
    )
}
import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function AdminChangePassword(props) {

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(currentPassword)
        console.log(newPassword)
        console.log(confirmNewPassword)
      }

    return (
        <Container className="text-center">
            <h1 className="green-text pt-3">Change Password</h1>
            <Form className="py-3 text-start" onSubmit={handleSubmit}>
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
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                    />
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Confirm new password</Form.Label>
                    <Form.Control
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        value={confirmNewPassword}
                    />
                </Form.Group>
                <div className="text-center">
                    <Button className="m-1" type="submit">Change Password</Button>
                    <Button className="btn-danger m-1">Cancel</Button>
                </div>
            </Form>
            
        </Container>
    )
}
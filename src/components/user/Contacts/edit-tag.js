import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function AddTag(props) {

    const [description, setDescription] = useState("")

    return (
        <Container>
            <h2 className="green-text py-3">Edit Contact Tag</h2>
            <Form>
                <Form.Label>Description</Form.Label>
                <Form.Control value={description} onChange={(e) => setDescription(e.target.value)}/>
                <div className="text-center py-3">
                    <Button className="m-1" href="/user/tags">Save Changes</Button>
                    <Button className="m-1" variant="danger" href="/user/tags">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}
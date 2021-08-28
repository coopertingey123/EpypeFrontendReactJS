import React from 'react'
import { Container, Button, Form } from 'react-bootstrap'

export default function ChooseSMSKeyword(props) {
    return (
        <Container>
            <Form.Group className="text-center py-3">
                <Form.Label>Choose the keyword to use for this Message Blast</Form.Label>
                <select name="" id="" className="form-select">
                    <option value="">Choose Keyword</option>
                    <option value="">COOPER</option>
                    <option value="">FOOTBALL</option>
                </select>
            </Form.Group>
            <Button className="my-2 mx-1">Next</Button>
            <Button variant="danger" className="my-2 mx-1">Cancel</Button>
        </Container>
    )
}
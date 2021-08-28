import React from 'react'
import {Container, Button, Form} from "react-bootstrap"

export default function ChooseTags(props) {
    return (
        <Container>
            <Form.Group className="text-center py-3">
                <Form.Label>Select the tags associated with the contacts you would like to reach. Chose <strong>Any</strong> to match all contacts.</Form.Label>
                <select name="" id="" className="form-select">
                    <option value="">Any</option>
                    <option value="">New Contact</option>
                    <option value="">Johnny Wright</option>
                    <option value="">Max Wright</option>
                </select>
            </Form.Group>
            <Button className="my-2 mx-1">Next</Button>
            <Button className="my-2 mx-1">Back</Button>
            <Button variant="danger" className="my-2 mx-1">Cancel</Button>
        </Container>
    )
}
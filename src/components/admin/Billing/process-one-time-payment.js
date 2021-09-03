import React from 'react'
import { Container, Form, Button} from "react-bootstrap"

export default function ProcessOneTimePayment(props) {
    return (
        <Container className="text-center">
            <h1 className="green-text text-center p-3">Process One-time Payment</h1>
            <Form className="text-start py-3">
                <Form.Group>
                    <Form.Label>Account</Form.Label>
                    <select className="form-select my-3">
                        <option value="">User</option>
                        <option value="">Organization</option>
                    </select>
                    <Form.Control/>
                </Form.Group>
            </Form>
            <Button className="m-1">Next</Button>
            <Button className="btn-danger m-1">Cancel</Button>
        </Container>
    )
}
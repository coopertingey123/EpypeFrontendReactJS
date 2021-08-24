import React from 'react'
import { Container, Row, Col, Form, Button} from "react-bootstrap"

export default function InvoicePayments(props) {
    return (
        <Container className="text-center">
            <h1 className="green-text p-3">Invoice Payments</h1>
            <Form className="text-start">
                <Form.Group>
                    <Form.Label>Invoice ID</Form.Label>
                    <Form.Control className="my-2"/>
                    <a href="">All Unpaid Invoices</a>
                </Form.Group>
            </Form>
            <Button className="m-1">Next</Button>
            <Button className="btn-danger m-1">Cancel</Button>
        </Container>
    )
}
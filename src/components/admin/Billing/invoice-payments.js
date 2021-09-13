import React, {useState} from 'react'
import { Container, Form, Button} from "react-bootstrap"

export default function InvoicePayments(props) {

    const [invoiceId, setInvoiceId] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(invoiceId)
    }

    return (
        <Container className="text-center">
            <h1 className="green-text p-3">Invoice Payments</h1>
            <Form className="text-start" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Invoice ID</Form.Label>
                    <Form.Control 
                        className="my-2"
                        value={invoiceId}
                        onChange={(e) => setInvoiceId(e.target.value)}
                    />
                    <a href="">All Unpaid Invoices</a>
                </Form.Group>
                <div className="text-center">
                    <Button className="m-1" type="submit">Next</Button>
                    <Button className="btn-danger m-1">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}
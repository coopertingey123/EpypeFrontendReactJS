import React, {useState} from 'react'
import { Container, Button, Form, Alert, Row, Col } from 'react-bootstrap'

export default function OrganizationBilling(props) {

    const [billedBy, setBilledBy] = useState("")
    const [amounts, setAmounts] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(billedBy)
        console.log(amounts)
    }

    return (
        <Container className="text-center">
            <h1 className="green-text py-3">Organization Billing for August 24, 2021</h1>
            <Form className="py-3" onSubmit={handleSubmit}>
                <Row className="align-items-center justify-content-center mb-3 g-3">
                    <Col className="col-auto">
                        <label htmlFor="">Show accounts billed by</label>
                    </Col>
                    <Col className="col-auto">
                        <select 
                            className="form-select"
                            value={billedBy}
                            onChange={(e) => setBilledBy(e.target.value)}
                        >
                            <option value="creditCard">Credit Card</option>
                            <option value="invoice">Invoice</option>
                            <option value="both">Both</option>
                        </select>
                    </Col>
                    <Col className="col-auto">
                        <label htmlFor=""> and amounts </label>
                    </Col>
                    <Col className="col-auto">
                        <select 
                            className="form-select"
                            value={amounts}
                            onChange={(e) => setAmounts(e.target.value)}
                        >
                            <option value="newOnly">New Only</option>
                            <option value="closedInvoicesOnly">Closed Invoices Only</option>
                            <option value="both">Both</option>
                        </select>
                    </Col>
                    <Col className="col-auto">
                        <Button type="submit">Go</Button>
                    </Col>
                </Row>
            </Form>
            <Alert variant="danger">No outstanding billing found.</Alert>
        </Container>
    )
}
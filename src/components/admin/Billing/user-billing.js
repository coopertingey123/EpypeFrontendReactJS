import React from 'react'
import { Container, Button, Form, Alert, Row, Col } from 'react-bootstrap'

import NavbarAdmin from "../../navigation/navbar-admin";

export default function UserBilling(props) {
    return (
        <Container className="text-center">
            <NavbarAdmin/>
            <h1 className="green-text py-3">User Billing for August 24, 2021</h1>
            <Form className="py-3">
                <Row className="align-items-center mb-3 g-3">
                    <Col className="col-auto">
                        <label htmlFor="">Show accounts billed by</label>
                    </Col>
                    <Col className="col-auto">
                        <select className="form-select">
                            <option value="">Credit Card</option>
                            <option value="">Invoice</option>
                            <option value="">Both</option>
                        </select>
                    </Col>
                    <Col className="col-auto">
                        <label htmlFor=""> and amounts </label>
                    </Col>
                    <Col className="col-auto">
                        <select className="form-select">
                            <option value="">New Only</option>
                            <option value="">Closed Invoices Only</option>
                            <option value="">Both</option>
                        </select>
                    </Col>
                    <Col className="col-auto">
                        <Button>Go</Button>
                    </Col>
                </Row>
            </Form>
            <Alert variant="danger">No outstanding billing found.</Alert>
        </Container>
    )
}